import React from "react";
import AnimatedSection, { slideFromRightBounce } from "@/animation/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-fit   md:min-h-[678px]">
      <div
        className="absolute left-0 inset-0 bg-[url('/assets/images/blog.png')] bg-cover bg-center"
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 p-4 md:p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-around mx-auto min-h-[600px] lg:min-h-[948px] h-full gap-8">

          <div className="col-span-2 h-full flex flex-col justify-center items-start text-white text-right pr-0 lg:pr-8">

            <AnimatedSection
              variants={slideFromRightBounce}
              custom={1}
              className="mb-6"
            >
              <h1 className="max-w-full lg:max-w-[1087px] font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-[40px] md:leading-[70px] lg:leading-[131px] text-right text-white">
                            و ببساطة نص شكلي (بمعنى أن الغاية هي)

              </h1>
            </AnimatedSection>

            <AnimatedSection
              variants={slideFromRightBounce}
              custom={2}
            >
              <p className="max-w-full lg:max-w-[1027px] font-semibold text-[16px] md:text-[24px] lg:text-[32px] leading-[20px] md:leading-[36px] lg:leading-[46px] text-right text-white">
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
