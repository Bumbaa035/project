/*
  Warnings:

  - You are about to drop the column `location` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `destination` on the `Transport` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "location";

-- AlterTable
ALTER TABLE "Transport" DROP COLUMN "destination";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "location";
