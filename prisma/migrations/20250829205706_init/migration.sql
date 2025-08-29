/*
  Warnings:

  - Added the required column `logo` to the `schools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slogan` to the `schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."schools" ADD COLUMN     "logo" VARCHAR(150) NOT NULL,
ADD COLUMN     "slogan" VARCHAR(200) NOT NULL;
