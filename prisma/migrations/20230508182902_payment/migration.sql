-- AlterTable
ALTER TABLE "properties" ADD COLUMN "day_of_rent" TEXT;

-- CreateTable
CREATE TABLE "owner_properties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "owner_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "tenant_properties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tenant_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "enter_date" DATETIME NOT NULL,
    "leave_date" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "payments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" DECIMAL NOT NULL,
    "status" TEXT NOT NULL,
    "tenant_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "start_period" DATETIME NOT NULL,
    "end_period" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "owner_withdraw" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" DECIMAL NOT NULL,
    "status" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "start_period" DATETIME NOT NULL,
    "end_period" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" DECIMAL NOT NULL,
    "status" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "property_id" INTEGER NOT NULL,
    "start_period" DATETIME NOT NULL,
    "end_period" DATETIME NOT NULL,
    "payment_method" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_owners" (
    "user_id" INTEGER NOT NULL,
    "agency_id" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "owners_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_owners" ("agency_id", "user_id") SELECT "agency_id", "user_id" FROM "owners";
DROP TABLE "owners";
ALTER TABLE "new_owners" RENAME TO "owners";
CREATE UNIQUE INDEX "owners_user_id_key" ON "owners"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
