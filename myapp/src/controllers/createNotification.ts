import prisma from "../prismaClient";
import { Request, Response } from "express";
export const createNotification = async (req: Request, res: Response) => {
  const { transportId, callCenterId, message } = req.body;
  try {
    const newNotification = await prisma.notification.create({
      data: {
        transportId,
        callCenterId,
        message,
      },
    });
    res.status(201).json({
      success: true,
      message: `Successfully added new notification: ${newNotification}`,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when create notification:${error}`,
    });
  }
};
