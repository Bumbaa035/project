-- CreateEnum
CREATE TYPE "OwnerType" AS ENUM ('PERSON', 'COMPANY');

-- CreateEnum
CREATE TYPE "WheelPosition" AS ENUM ('RIGHT', 'LEFT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penalty" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" TEXT NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Penalty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "axleCount" INTEGER NOT NULL,
    "buildYear" TEXT NOT NULL,
    "cabinNumber" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "colorName" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "importDate" TIMESTAMP(3) NOT NULL,
    "length" TEXT NOT NULL,
    "manCount" INTEGER NOT NULL,
    "markName" TEXT NOT NULL,
    "mass" TEXT NOT NULL,
    "modelName" TEXT NOT NULL,
    "motorNumber" TEXT NOT NULL,
    "ownerType" "OwnerType" NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "wheelPosition" "WheelPosition" NOT NULL,
    "width" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_cabinNumber_key" ON "Car"("cabinNumber");

-- AddForeignKey
ALTER TABLE "Penalty" ADD CONSTRAINT "Penalty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penalty" ADD CONSTRAINT "Penalty_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
