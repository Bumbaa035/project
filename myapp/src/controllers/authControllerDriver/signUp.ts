import prisma from "../../prismaClient";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req: Request, res: Response) => {
  const { firstName, lastName, register, location, phoneNumber, password } =
    req.body;
  const JWT_SECRET_KEY = process.env.JWT_KEY || "1234";

  try {
    const hashedRegister = await bcrypt.hash(register, 8);
    const hashedPass = await bcrypt.hash(password, 8);
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        register: hashedRegister,
        location: location,
        phoneNumber: phoneNumber,
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
    res.status(202).json({
      success: true,
      message: "Successfully created user info",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when signup:${error}`,
    });
  }
};
