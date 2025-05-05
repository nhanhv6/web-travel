import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "data", "db.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const parsed = JSON.parse(fileData);
  return NextResponse.json(parsed.tours || []);
}
