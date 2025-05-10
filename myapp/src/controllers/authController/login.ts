import prisma from "../../prismaClient";
import { Request, Response } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const { phoneNumber, password } = req.body;
  const JWT_SECRET_KEY = process.env.JWT_KEY || 1234;
  try {
    const userExist = await prisma.user.findUnique({
      where: {
        phoneNumber,
      },
    });
    if (userExist) {
      const registered = await bcrypt.compare(register, userExist.register);
      if (registered) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: { email: userExist.firstName, username: userExist.lastName },
          },
          JWT_SECRET_KEY
        );
      res.status(201).json({
        success: true,
        message: `Successfully logged in.`,
        user: userExist,
        // token: token,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Enter registered information .`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when login:${error}`,
    });
  }
};
