-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "shortcode" TEXT NOT NULL,
    "targetUrl" TEXT NOT NULL,
    "totalClicks" INTEGER NOT NULL DEFAULT 0,
    "lastClicked" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_shortcode_key" ON "Link"("shortcode");
