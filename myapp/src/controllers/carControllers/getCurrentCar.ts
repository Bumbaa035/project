import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const getCurrentCar = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const currentCar = await prisma.car.findUnique({
      where: id,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when check car info:${error}`,
    });
  }
};
