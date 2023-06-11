-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'SUPERADMIN');

-- CreateEnum
CREATE TYPE "ServiceProviderTag" AS ENUM ('HOSPITALITY', 'HEALTHCARE', 'BUSINESS', 'PENSION', 'AGRICULTURE', 'HOUSEHOLD_UTILITIES', 'CHILDCARE', 'OTHER');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "firstName" TEXT,
    "recoveryEmail" TEXT,
    "lastName" TEXT,
    "walletPin" INTEGER,
    "bankName" TEXT,
    "bankAccountHolderName" TEXT,
    "accountNumber" INTEGER,
    "isBeneficiary" BOOLEAN NOT NULL DEFAULT false,
    "isPvtOrg" BOOLEAN DEFAULT false,
    "isServiceProvider" BOOLEAN DEFAULT false,
    "walletIdBeneficiary" TEXT,
    "walletIdPvtOrg" TEXT,
    "walletIdServiceProvider" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" DEFAULT 'USER',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beneficiary" (
    "beneficiaryId" TEXT NOT NULL,

    CONSTRAINT "beneficiary_pkey" PRIMARY KEY ("beneficiaryId")
);

-- CreateTable
CREATE TABLE "Voucher" (
    "voucherId" TEXT NOT NULL,
    "voucherAmount" INTEGER NOT NULL,
    "voucherCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "voucherRedeemed" BOOLEAN NOT NULL DEFAULT false,
    "voucherRedeemedDate" TIMESTAMP(3),
    "voucherSPId" TEXT NOT NULL,
    "voucherBeneficiaryId" TEXT NOT NULL,
    "PvtOrgById" TEXT NOT NULL,

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("voucherId")
);

-- CreateTable
CREATE TABLE "pvtOrg" (
    "privateOrgId" TEXT NOT NULL,
    "CompanyName" TEXT,
    "positionInCompany" TEXT,

    CONSTRAINT "pvtOrg_pkey" PRIMARY KEY ("privateOrgId")
);

-- CreateTable
CREATE TABLE "serviceProvider" (
    "serviceProviderId" TEXT NOT NULL,
    "BusinessName" TEXT,
    "PositionInBusiness" TEXT,
    "BusinessTag" "ServiceProviderTag",

    CONSTRAINT "serviceProvider_pkey" PRIMARY KEY ("serviceProviderId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_phoneNumber_key" ON "Users"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Users_recoveryEmail_key" ON "Users"("recoveryEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Users_accountNumber_key" ON "Users"("accountNumber");

-- AddForeignKey
ALTER TABLE "beneficiary" ADD CONSTRAINT "beneficiary_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voucher" ADD CONSTRAINT "Voucher_PvtOrgById_fkey" FOREIGN KEY ("PvtOrgById") REFERENCES "pvtOrg"("privateOrgId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voucher" ADD CONSTRAINT "Voucher_voucherBeneficiaryId_fkey" FOREIGN KEY ("voucherBeneficiaryId") REFERENCES "beneficiary"("beneficiaryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voucher" ADD CONSTRAINT "Voucher_voucherSPId_fkey" FOREIGN KEY ("voucherSPId") REFERENCES "serviceProvider"("serviceProviderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pvtOrg" ADD CONSTRAINT "pvtOrg_privateOrgId_fkey" FOREIGN KEY ("privateOrgId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceProvider" ADD CONSTRAINT "serviceProvider_serviceProviderId_fkey" FOREIGN KEY ("serviceProviderId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
