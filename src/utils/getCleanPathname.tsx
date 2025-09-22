import { headers } from "next/headers";
import { locales } from "@/constants/routes"; // ['en', 'ar']

export async function getCleanPathname() {
  const h = await headers(); // Wait for the promise to resolve
  const rawPathname = h.get("x-pathname") || ""; // Now you can call the get method

  // Remove locale prefix if exists
  const cleanPath = rawPathname
    .split("/")
    .filter((part: string) => part && !locales.includes(part)) // remove locale
    .join("/");

  return "/" + cleanPath;
}
