-- AlterTable
ALTER TABLE "question" ALTER COLUMN "options" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "years" SET DEFAULT ARRAY[]::TEXT[];
