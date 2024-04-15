/*
  Warnings:

  - Added the required column `id_board_det` to the `board_column` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "board_column" ADD COLUMN     "id_board_det" INTEGER NOT NULL;
