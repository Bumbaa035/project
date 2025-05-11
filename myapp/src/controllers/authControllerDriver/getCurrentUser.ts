import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const getCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        penalty: true,
        transport: {
          include: {
            car: true,
          },
        },
        notifications: true,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when add car info:${error}`,
    });
  }
};
