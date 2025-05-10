import { Request, Response, NextFunction } from "express";
import prisma from "../prismaClient";
import bcrypt from "bcrypt";

export const addPass = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { phoneNumber, password } = req.body;
  const user = req.user; // User should be attached by userExist middleware

  try {
    // If user doesn't have a password yet, add one
    if (!user.password) {
      const hashedPassword = await bcrypt.hash(password, 8);

      await prisma.user.update({
        where: {
          phoneNumber,
        },
        data: {
          password: hashedPassword,
        },
      });

      // Update the user object in the request
      req.user = await prisma.user.findUnique({
        where: {
          phoneNumber,
        },
      });
    }

    // Continue to next middleware/controller
    next();
  } catch (error) {
    console.error("Error adding password:", error);
    res.status(500).json({
      success: false,
      message: `Internal server error when setting password: ${error}`,
    });
  }
};
