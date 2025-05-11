import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const updateStatus = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const updated = await prisma.penalty.update({
      where: id,
      data: {
        paid: true,
      },
    });
    res.status(200).json({
      success: true,
      message: "Successfully paig penalty",
      info: updated,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when add car info:${error}`,
    });
  }
};
