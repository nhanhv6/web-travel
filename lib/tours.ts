import path from "path";
import fs from "fs/promises";
import { Tour } from "@/types";

export const getTours = async (): Promise<Tour[]> => {
  const filePath = path.join(process.cwd(), "public", "data", "db.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const parsed = JSON.parse(fileData);
  return parsed.tours || [];
};
