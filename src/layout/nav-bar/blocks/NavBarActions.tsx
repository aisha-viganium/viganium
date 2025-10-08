"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
// import { useState } from "react";
import PoPUpChat from "@/components/PoPUpChat";
import { useTranslation } from "react-i18next";

export default function NavBarActions() {
  // const { i18n } = useTranslation();
  // const [lang, setLang] = useState(i18n.language || "ar");

  // const changeLang = (lng: "ar" | "en") => {
  //   setLang(lng);
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className="flex items-center gap-[16PX] max-w-[130px]">
      <LanguageSwitcher />

      <div className="flex items-center gap-2 pe-3">
        <PoPUpChat bg="#FFF" color="#1A1A1A" border="#F6EDE0" />
      </div>


    </div>
  );
}
