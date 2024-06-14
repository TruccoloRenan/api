/*
  Warnings:

  - The primary key for the `KanbanBoard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `_id` column on the `KanbanBoard` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `board` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_board_fkey";

-- AlterTable
ALTER TABLE "KanbanBoard" DROP CONSTRAINT "KanbanBoard_pkey",
DROP COLUMN "_id",
ADD COLUMN     "_id" SERIAL NOT NULL,
ADD CONSTRAINT "KanbanBoard_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "board",
ADD COLUMN     "board" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_board_fkey" FOREIGN KEY ("board") REFERENCES "KanbanBoard"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
