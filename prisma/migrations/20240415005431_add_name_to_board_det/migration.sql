/*
  Warnings:

  - Added the required column `name` to the `board_det` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "board_det" ADD COLUMN     "name" TEXT NOT NULL;
