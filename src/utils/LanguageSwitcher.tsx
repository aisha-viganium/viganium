"use client";

import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
// import i18n from "@/i18n/client"; // تأكد إن دا client فقط

export default function LanguageSwitcher() {
  const { i18n: i18nextClient } = useTranslation();
  const router = useRouter();
  const pathname = usePathname(); // e.g. /en/booking
  const [lang, setLang] = useState(i18nextClient.language || "en");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    i18nextClient.changeLanguage(newLang);

    // Update URL locale (assuming /[locale]/... routing)
    const segments = pathname.split("/");
    segments[1] = newLang; // Replace locale in path
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex cursor-pointer  border-s  border-[#9EA1A3] ps-2 h-auto m-0 items-center gap-1 border-gray-300  bg-white text-sm"
    >
      <span className="text-h6 font-normal">
        {lang === "en" ? "Ar" : "Eng"}
      </span>

    </button>
  );
}
