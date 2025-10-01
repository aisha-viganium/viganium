import React from "react";
import HeroSection from "./block/HeroSection";
import Services from "./block/Services";
import { getTranslation } from "@/i18n/server";

export default async function Page({ params }: { params: { locale: string } }) {
  const locale = params?.locale || "ar";
  const t = getTranslation(locale);
  return (
    <>
      <HeroSection locale={locale} t={t} />
      <Services locale={locale} t={t} />
    </>
  );
}
