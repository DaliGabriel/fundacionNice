-- CreateTable
CREATE TABLE "Numbers" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Numbers_pkey" PRIMARY KEY ("id")
);
