-- CreateTable
CREATE TABLE "UserPrisma" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserPrisma_pkey" PRIMARY KEY ("id")
);
