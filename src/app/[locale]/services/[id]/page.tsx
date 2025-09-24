"use client";
import React from "react";
import HeroSection from "./block/HeroSection";
import Advantages from "./block/Advantages";
import Tools from "./block/Tools";
import WeHear from "@/components/WeHear";
import Questions from "@/components/Questions/Questions";
import services from "../../../../data/servicesData";

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id.toString() === params.id);

  if (!service) {
    return <div className="text-center text-primary p-10">الخدمة غير موجودة</div>;
  }
  return (
    <>
      <HeroSection service={service} />
      <Advantages />
      <Tools />
      <WeHear />
      <Questions />
    </>
  );
}