import prisma from "../../prismaClient";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"; // ✅ correct import

export const signUp = async (req: Request, res: Response) => {
  const { firstName, lastName, register, phoneNumber, password } = req.body;
  const JWT_SECRET_KEY = process.env.JWT_KEY || "1234";

  try {
    const hashedRegister = await bcrypt.hash(register, 8);
    const hashedPass = await bcrypt.hash(password, 8);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        register: hashedRegister,
        phoneNumber,
        password: hashedPass,
      },
    });

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: { email: newUser.firstName, username: newUser.lastName },
      },
      JWT_SECRET_KEY
    );

    res.status(201).json({
      success: true,
      message: "Successfully created user info",
      token: token,
      userId: newUser.id,
    });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return res.status(400).json({
        success: false,
        message: "Энэ утасны дугаар бүртгэлтэй байна!",
      });
    }

    console.error("Signup error:", error);
    res.status(500).json({
      error: true,
      message: `Серверийн алдаа!`,
    });
  }
};
