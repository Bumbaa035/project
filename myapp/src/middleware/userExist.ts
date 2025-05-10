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

export const userExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { phoneNumber } = req.body;

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
      res.status(404).json({
        success: false,
        message: "User not found. Please enter registered information.",
      });
      return;
    }

    // Attach user to request for subsequent middleware
    req.user = user;
    next();
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({
      success: false,
      message: `Internal server error: ${error}`,
    });
  }
};
