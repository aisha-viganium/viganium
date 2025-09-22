import React from "react";
import HeroSection from "./block/HeroSection";
import HelpSection from "@/components/HelpSection";
import Questions from "./block/Questions";


export default async function page() {
  return (
    <>
      <HeroSection />
      <HelpSection />
      <Questions />
    </>
  );
}
