"use client";

import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { i18n: i18nextClient } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState(i18nextClient.language || "en");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    // Ensure i18next actually switched language before navigating so
    // components reading `i18n.language` see the updated value.
    (async () => {
      try {
        await i18nextClient.changeLanguage(newLang);
      } catch (e) {
        // ignore
      }
      // update local state from the i18next instance (more reliable)
      setLang(i18nextClient.language || newLang);
      const segments = pathname.split("/");
      segments[1] = newLang;
      router.push(segments.join("/"));
    })();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex cursor-pointer  border-s  ps-2 h-auto m-0 items-center gap-1 border-gray-300  bg-white text-sm"
    >
      <span className="text-h6 font-normal">
        {lang === "en" ? "Ar" : "Eng"}
      </span>

    </button>
  );
}
