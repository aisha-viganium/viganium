import React from "react";
import AnimatedSection, { slideFromRightBounce } from "@/animation/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-fit sm:min-h-[900px] lg:min-h-[948px]">
      <div
        className="absolute left-0 inset-0 bg-[url('/assets/images/contact-hero.png')] bg-cover bg-center"
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 p-4 sm:p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-around mx-auto min-h-[600px] lg:min-h-[948px] h-full gap-8">

          <div className="col-span-1 h-full flex flex-col justify-center items-start text-white text-right pr-0 lg:pr-8">

            <AnimatedSection
              variants={slideFromRightBounce}
              custom={1}
              className="mb-6"
            >
              <h1 className="max-w-full lg:max-w-[787px] font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-[40px] sm:leading-[70px] lg:leading-[131px] text-right text-white">
                و ببساطة نص شكلي (بمعنى أن الغاية هي{" "}
                <span className="text-center px-8 gap-[10px] max-w-[181px] h-[86px] bg-[#BD171D]">
                  معنا
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection
              variants={slideFromRightBounce}
              custom={2}
            >
              <p className="max-w-full lg:max-w-[1027px] font-semibold text-[16px] sm:text-[24px] lg:text-[32px] leading-[20px] sm:leading-[36px] lg:leading-[46px] text-right text-white">
                هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
                هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
              </p>
            </AnimatedSection>

          </div>

          <div className="hidden lg:block col-span-1"></div>

        </div>
      </div>
    </section>
  );
}


