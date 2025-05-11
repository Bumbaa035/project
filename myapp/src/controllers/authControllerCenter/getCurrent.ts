import prisma from "../../prismaClient";
import { Request, Response, NextFunction } from "express";

// Changed return type to Promise<void> and added NextFunction parameter
export const getCurrent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = Number(req.params.id);

  try {
    const callCenter = await prisma.callCenter.findUnique({
      where: { id },
      include: {
        area: {
          include: {
            transports: true,
          },
        },
        notifications: true,
      },
    });

    if (!callCenter) {
      res.status(404).json({
        error: true,
        message: "Call center not found",
      });
      return; // Return without using return res...
    }

    const transportDetails = await Promise.all(
      callCenter.area.transports.map((transport) =>
        prisma.transport.findUnique({
          where: { id: transport.id },
          include: {
            user: true,
            car: true,
          },
        })
      )
    );

    res.status(200).json({
      success: true,
      data: {
        callCenter,
        transportDetails,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when getting user info: ${error}`,
    });
  }
};
