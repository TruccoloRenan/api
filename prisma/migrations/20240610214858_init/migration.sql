/*
  Warnings:

  - You are about to drop the column `clireated_by` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `create_at` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `Task` table. All the data in the column will be lost.
  - Added the required column `created_by` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "clireated_by",
DROP COLUMN "create_at",
DROP COLUMN "description",
DROP COLUMN "update_at",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'todo',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
