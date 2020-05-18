# Migration `20200518162306-init`

This migration has been generated by Danex2 at 5/18/2020, 4:23:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."_ProjectToTag" (
"A" text  NOT NULL ,"B" integer  NOT NULL )

CREATE UNIQUE INDEX "_ProjectToTag_AB_unique" ON "public"."_ProjectToTag"("A","B")

CREATE  INDEX "_ProjectToTag_B_index" ON "public"."_ProjectToTag"("B")

ALTER TABLE "public"."_ProjectToTag" ADD FOREIGN KEY ("A")REFERENCES "public"."Project"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."_ProjectToTag" ADD FOREIGN KEY ("B")REFERENCES "public"."Tag"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200518161644-init..20200518162306-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,9 +13,11 @@
   name        String
   language    String
   repo        String
   description String
+  tags        Tag[]  @relation(references: [id])
 }
 model Tag {
-  id Int @default(autoincrement()) @id
+  id       Int       @default(autoincrement()) @id
+  projects Project[] @relation(references: [id])
 }
```

