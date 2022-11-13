-- CreateTable
CREATE TABLE "brennus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "bookId" INTEGER NOT NULL,
    CONSTRAINT "brennus_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "brennus_bookId_key" ON "brennus"("bookId");
