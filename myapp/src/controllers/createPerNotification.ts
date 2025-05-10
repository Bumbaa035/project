import prisma from "../prismaClient";
import { Request, Response } from "express";
export const createPerNotification = async (req: Request, res: Response) => {
  const { userId, message } = req.body;
  try {
    const newNotification = await prisma.permissionNotification.create({
      data: {
        userId,
        message,
      },
    });

    res.status(201).json({
      success: true,
      message: `Successfully create new notification`,
      info: newNotification,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when add permission notification:${error}`,
    });
  }
};
