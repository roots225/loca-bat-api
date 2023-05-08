-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_owners" (
    "user_id" INTEGER NOT NULL,
    "agency_id" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "owners_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "owners_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_owners" ("agency_id", "user_id") SELECT "agency_id", "user_id" FROM "owners";
DROP TABLE "owners";
ALTER TABLE "new_owners" RENAME TO "owners";
CREATE UNIQUE INDEX "owners_user_id_key" ON "owners"("user_id");
CREATE TABLE "new_tenants" (
    "user_id" INTEGER NOT NULL,
    "agency_id" INTEGER NOT NULL,
    CONSTRAINT "tenants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tenants_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_tenants" ("agency_id", "user_id") SELECT "agency_id", "user_id" FROM "tenants";
DROP TABLE "tenants";
ALTER TABLE "new_tenants" RENAME TO "tenants";
CREATE UNIQUE INDEX "tenants_user_id_key" ON "tenants"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
