import React from "react";
import HeroSection from "./block/HeroSection";
import Advantages from "./block/Advantages";
import Tools from "./block/Tools";
import WeHear from "@/components/WeHear";
import Questions from "@/components/Questions/Questions";
import services from "../../../../data/servicesData";
import { getTranslation } from "@/i18n/server";

export default async function ServiceDetailPage({ params }: { params: { id: string; locale: string } }) {
  const { id, locale } = params; 
  const t = getTranslation(locale);
  const isArabic = locale === "ar";

  const servicesData = services[isArabic ? "ar" : "en"];

  const service = servicesData.find((s) => s.id.toString() === id);

  if (!service) {
    return <div className="text-center text-primary p-10">الخدمة غير موجودة</div>;
  }

  return (
    <>
      <HeroSection service={service} locale={locale} />
      <Advantages locale={locale} t={t} service={service}/>
      <Tools service={service}/>
      <WeHear locale={locale} t={t} />
      <Questions locale={locale} t={t}/>
    </>
  );
}

