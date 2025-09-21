"use client";
import React from "react";
import HeroSection from "./block/HeroSection";
import Advantages from "./block/Advantages";
import Tools from "./block/Tools";
import WeHear from "@/components/WeHear";
import Questions from "@/components/Questions/Questions";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Advantages />
      <Tools />
      <WeHear />
      <Questions />
    </>
  );
}
