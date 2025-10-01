"use client";
import React from "react";
import HeroSection from "./block/HeroSection";
import Details from "./block/Details";
import Questions from "@/components/Questions/Questions";
import { getTranslation } from "@/i18n/server"; 


export default async function Page({ params }: { params: { locale: string } }) {
  const locale = params?.locale || "ar";
  const t = getTranslation(locale);
  return (
    <>
      <HeroSection locale={locale} t={t}/>
      <Details locale={locale} t={t}/>
      <Questions locale={locale} t={t}/>
    </>
  );
}
