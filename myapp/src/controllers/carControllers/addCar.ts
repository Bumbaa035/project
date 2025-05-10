import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const addCar = async (req: Request, res: Response) => {
  const {
    axleCount,
    buildYear,
    cabinNumber,
    capacity,
    className,
    colorName,
    countryName,
    fuelType,
    height,
    importDate,
    length,
    manCount,
    markName,
    mass,
    modelName,
    motorNumber,
    ownerType,
    plateNumber,
    type,
    wheelPosition,
    width,
    location,
  } = req.body;
  try {
    const carExist = await prisma.car.findUnique({
      where: {
        cabinNumber,
      },
    });
    if (carExist) {
      res.status(202).json({
        success: true,
        message: `Successfully find the car`,
      });
    } else {
      const newCar = await prisma.car.create({
        data: {
          location,
          width,
          wheelPosition: wheelPosition !== "зүүн" ? "RIGHT" : "LEFT",
          type,
          plateNumber,
          ownerType: ownerType === "Хувь хүн" ? "PERSON" : "COMPANY",
          axleCount,
          buildYear,
          cabinNumber,
          capacity,
          className,
          colorName,
          countryName,
          fuelType,
          height,
          importDate,
          length,
          manCount,
          markName,
          mass,
          modelName,
          motorNumber,
        },
      });
      res.status(201).json({
        success: true,
        message: `Successfully added new car info: ${newCar}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Internal server error when add car info:${error}`,
    });
  }
};
