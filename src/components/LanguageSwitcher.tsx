"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); 

  const currentLocale = pathname.split("/")[1] || "en";

  const toggleLocale = () => {
    const newLocale = currentLocale === "ar" ? "en" : "ar";

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-3 py-1 rounded bg-blue-500 text-white"
    >
      {currentLocale === "ar" ? "English" : "العربية"}
    </button>
  );
}
