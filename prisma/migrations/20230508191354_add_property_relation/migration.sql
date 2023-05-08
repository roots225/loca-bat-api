-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tenant_properties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tenant_id" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "enter_date" DATETIME NOT NULL,
    "leave_date" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "tenant_properties_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_tenant_properties" ("created_at", "enter_date", "id", "leave_date", "property_id", "tenant_id", "updated_at") SELECT "created_at", "enter_date", "id", "leave_date", "property_id", "tenant_id", "updated_at" FROM "tenant_properties";
DROP TABLE "tenant_properties";
ALTER TABLE "new_tenant_properties" RENAME TO "tenant_properties";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
