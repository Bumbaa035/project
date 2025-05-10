import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const getCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: id,
      include: {
        penalty: true,
        transport: true,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when add car info:${error}`,
    });
  }
};
