import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const createPenalty = async (req: Request, res: Response) => {
  const { time, userId, carId } = req.body;
  const cost = 1000;
  try {
    const newPenalty = await prisma.penalty.create({
      data: {
        amount: (Number(time) * cost).toString(),
        userId,
        carId,
      },
    });
    res.status(201).json({
      success: true,
      message: `Successfully added penalty: ${newPenalty}`,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when create penalty:${error}`,
    });
  }
};
