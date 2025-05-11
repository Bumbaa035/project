import { Request, Response, NextFunction } from "express";
import prisma from "../../prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { phoneNumber, password } = req.body;
  const JWT_SECRET_KEY = process.env.JWT_KEY || "1234";

  try {
    // Validation should already be handled by previous middleware
    const userExist = req.user; // Assuming user is attached by userExist middleware

    // Check password
    const matched = await bcrypt.compare(password, userExist.password);

    if (!matched) {
      res.status(401).json({
        success: false,
        message: "Invalid credentials. Please check your entered information.",
      });
      return;
    }

    // Generate token
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          id: userExist.id,
          firstName: userExist.firstName,
          lastName: userExist.lastName,
        },
      },
      JWT_SECRET_KEY
    );

    res.status(200).json({
      success: true,
      message: "Successfully logged in.",
      user: userExist,
      token: token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: `Internal server error when logging in: ${error}`,
    });
  }
};
