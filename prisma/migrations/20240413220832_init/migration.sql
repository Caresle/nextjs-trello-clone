/*
  Warnings:

  - You are about to drop the `UserPrisma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserPrisma";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boards" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board_column" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "board_column_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board_det" (
    "id" SERIAL NOT NULL,
    "id_board" INTEGER NOT NULL,
    "id_board_column" INTEGER NOT NULL,

    CONSTRAINT "board_det_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "boards" ADD CONSTRAINT "boards_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_det" ADD CONSTRAINT "board_det_id_board_fkey" FOREIGN KEY ("id_board") REFERENCES "boards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_det" ADD CONSTRAINT "board_det_id_board_column_fkey" FOREIGN KEY ("id_board_column") REFERENCES "board_column"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
