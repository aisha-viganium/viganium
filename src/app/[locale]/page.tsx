import React from "react";
import StorySection from "./block/StorySection";
import HowWork from "./block/HowWork/HowWork";
import Services from "./block/Services";
import ReviewSection from "./block/ReviewSection/ReviewSection";
import HelpSection from "@/components/HelpSection";
import HeroSection from "./block/HeroSection";
import RobotChatWrapper from "./block/RobotChatWrapper"; 
import { getTranslation } from "@/i18n/server";

export default async function Page({ params }: { params: { locale: string } }) {
  const locale = params?.locale || "ar";
  const t = getTranslation(locale);
  return (
    <>
      <RobotChatWrapper />
      <HeroSection locale={locale} t={t} />
      <StorySection locale={locale} t={t}/>
      <HowWork locale={locale} t={t}/>
      <Services locale={locale} t={t} />
      <ReviewSection locale={locale} t={t}/>
      <HelpSection />
    </>
  );
}
