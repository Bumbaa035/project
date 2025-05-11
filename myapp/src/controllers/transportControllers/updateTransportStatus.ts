import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const updateTransportStatus = async (req: Request, res: Response) => {
  const { id, status } = req.body;
  try {
    const updatedInfo = await prisma.transport.update({
      where: id,
      data: {
        status,
      },
    });
    res.status(200).json({
      success: true,
      message: "Transport info updated",
      info: updatedInfo,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when update transport info:${error}`,
    });
  }
};
