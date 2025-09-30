import React from "react";
import HeroSection from "./block/HeroSection";
import HelpSection from "@/components/HelpSection";
import Questions from "./block/Questions";
import { getTranslation } from "@/i18n/server"; 


export default async function Page({ params }: { params: { locale: string } }) {
  const locale = params?.locale || "ar";
  const t = await getTranslation(locale);
  return(
    <>
      <HeroSection />
      <HelpSection locale={locale} t={t}/>
      <Questions />
    </>
  );
}
