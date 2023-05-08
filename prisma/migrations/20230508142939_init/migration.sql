-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "avatar" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "agencies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "owners" (
    "user_id" INTEGER NOT NULL,
    "agency_id" INTEGER NOT NULL,
    CONSTRAINT "owners_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "employees" (
    "user_id" INTEGER NOT NULL,
    "agency_id" INTEGER NOT NULL,
    CONSTRAINT "employees_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tenants" (
    "user_id" INTEGER NOT NULL,
    "agency_id" INTEGER NOT NULL,
    CONSTRAINT "tenants_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "properties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner_id" INTEGER,
    "tenant_id" INTEGER,
    "monthly_cost" DECIMAL,
    "rent_deposit" INTEGER NOT NULL DEFAULT 3,
    "rent_advance" INTEGER NOT NULL DEFAULT 1,
    "address" TEXT,
    "photo" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "owners_user_id_key" ON "owners"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "employees_user_id_key" ON "employees"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_user_id_key" ON "tenants"("user_id");
