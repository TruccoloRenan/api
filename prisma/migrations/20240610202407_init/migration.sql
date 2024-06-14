-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "clireated_by" TEXT NOT NULL,
    "atribuited_to" TEXT NOT NULL,
    "create_at" TEXT NOT NULL,
    "update_at" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
