import React from "react";
import HeroSection from "./block/HeroSection";
import OurTeam from "./block/OurTeam/OurTeam";
import Team from "./block/Team";
import { getTranslation } from "@/i18n/server"; 

export default async function Page({ params }: { params: { locale: string } }) {
  const locale = params?.locale || "ar";
  const t = getTranslation(locale);
  return (
    <>
      <HeroSection locale={locale} t={t}/>
      <OurTeam locale={locale} t={t}/>
      <Team />
    </>
  );
}
