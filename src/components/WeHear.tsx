
import React from "react";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";
import PoPUpChat from "@/components/PoPUpChat";
import Image from "next/image";

export default function WeHear({ locale, t ,bg="white"}: { locale: string; t: (key: string) => string; bg: string }) {

  return (
    <section className={`py-2 md:py-16 px-2 md:px-16 bg-[${bg}] rounded-none md:rounded-2xl relative overflow-hidden ml-16`}>
      <Image
        src="/assets/icons/shapes-group.svg"
        alt="We Hear"
        width={150}
        height={150}
        className="absolute top-[-42px] left-[-55px] md:top-[-40px] md:left-[-85px] -translate-y-1/2 w-[100px] md:w-[150px] h-auto"
      />
      <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-6 w-full">
        <AnimatedSection
          variants={slideFromRightBounce}
          className={`flex flex-col ${locale === "ar" ? "text-right md:items-start" : "text-left md:items-start"}`}
        >
          <p className="font-bold text-[14px] md:text-[24px] leading-[30px] md:leading-[34px] text-secondry">
            {t("common.WeHear.subtitle")}
          </p>
          <h2 className="font-bold text-[16px] md:text-[32px] leading-[32px] md:leading-[46px] text-[#987931] max-w-[783px] mt-4">
            {t("common.WeHear.title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection variants={slideFromLeftBounce} className="pt-0 md:pt-5">
          <PoPUpChat bg="#1A1A1A" color="#FDFFFC" border="#1A1A1A" />
        </AnimatedSection>
      </div>
    </section>
  );
}
