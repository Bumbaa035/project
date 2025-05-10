import prisma from "../prismaClient";
import { NextFunction, Request, Response } from "express";
export const carExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cabinNumber } = req.body;
  try {
    const car = await prisma.car.findUnique({
      where: {
        cabinNumber,
      },
    });
    if (car) {
      res.status(202).json({
        success: true,
        message: "Car info found",
        info: car,
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when check car info:${error}`,
    });
  }
};
