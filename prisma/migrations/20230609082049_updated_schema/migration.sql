-- AlterTable
ALTER TABLE "pvtOrg" ADD COLUMN     "CompanyName" TEXT,
ADD COLUMN     "positionInCompany" TEXT;

-- AlterTable
ALTER TABLE "serviceProvider" ADD COLUMN     "BusinessName" TEXT,
ADD COLUMN     "PositionInBusiness" TEXT;
