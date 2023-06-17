-- DropIndex
DROP INDEX "Users_accountNumber_key";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "accountNumber" SET DATA TYPE TEXT;
