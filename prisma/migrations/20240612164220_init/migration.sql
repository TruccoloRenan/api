/*
  Warnings:

  - Added the required column `board` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "board" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'A FAZER';

-- CreateTable
CREATE TABLE "KanbanBoard" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KanbanBoard_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_board_fkey" FOREIGN KEY ("board") REFERENCES "KanbanBoard"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
