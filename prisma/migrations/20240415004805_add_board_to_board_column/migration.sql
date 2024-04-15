/*
  Warnings:

  - You are about to drop the column `id_board_det` on the `board_column` table. All the data in the column will be lost.
  - Added the required column `id_board` to the `board_column` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "board_column" DROP COLUMN "id_board_det",
ADD COLUMN     "id_board" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "board_column" ADD CONSTRAINT "board_column_id_board_fkey" FOREIGN KEY ("id_board") REFERENCES "boards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
