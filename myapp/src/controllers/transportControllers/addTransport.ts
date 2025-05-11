import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const addTransport = async (req: Request, res: Response) => {
  const { carId, userId, destination } = req.body;
  try {
    const newTransport = await prisma.transport.create({
      data: {
        carId,
        userId,
      },
    });
    res.status(202).json({
      success: true,
      message: "New transport registered",
      info: newTransport,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when add transport info:${error}`,
    });
  }
};
