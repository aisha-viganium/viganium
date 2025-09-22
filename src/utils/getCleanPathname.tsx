import { headers } from "next/headers";
import { locales } from "@/constants/routes"; 

export async function getCleanPathname() {
  const h = await headers(); 
  const rawPathname = h.get("x-pathname") || ""; 

  const cleanPath = rawPathname
    .split("/")
    .filter((part: string) => part && !locales.includes(part)) // remove locale
    .join("/");

  return "/" + cleanPath;
}
