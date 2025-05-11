import prisma from "../prismaClient";
import { NextFunction, Request, Response } from "express";
export const callCenterExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  try {
    const callCenter = await prisma.callCenter.findUnique({
      where: email,
    });
    if (callCenter) {
      next();
    } else {
      res.status(404).json({
        success: false,
        message: "Enter registered email and password",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when add car info:${error}`,
    });
  }
};
