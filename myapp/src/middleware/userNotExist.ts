import { Request, Response, NextFunction } from "express";
import prisma from "../prismaClient";

// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const userNotExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { phoneNumber } = req.body;
  console.log(req.body);

  try {
    // Validate input
    if (!phoneNumber) {
      res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        phoneNumber,
      },
    });

    if (!user) {
      next();
    } else {
      res.status(404).json({
        success: false,
        message: "User found. Please login.",
      });
      return;
    }
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({
      success: false,
      message: `Internal server error: ${error}`,
    });
  }
};
