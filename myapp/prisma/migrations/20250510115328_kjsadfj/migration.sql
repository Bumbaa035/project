/*
  Warnings:

  - A unique constraint covering the columns `[register]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_register_key" ON "User"("register");
