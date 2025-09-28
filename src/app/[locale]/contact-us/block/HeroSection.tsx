import React from "react";
import AnimatedSection, { slideFromRightBounce } from "@/animation/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[30vh] md:min-h-[100vh] 2xl:min-h-[948px]">
      <div
        className="absolute left-0 inset-0 bg-[url('/assets/images/contact-hero.png')] bg-cover bg-center"
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 p-4 md:p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-around mx-auto h-[30vh] md:min-h-[100vh] 2xl:min-h-[948px] gap-8">

          <div className="col-span-1 h-full flex flex-col pt-[50px] md:pt-0 justify-start md:justify-center  items-start text-white text-right pr-0 lg:pr-8">

            <AnimatedSection
              variants={slideFromRightBounce}
              custom={1}
              className="mb-6"
            >
             <h1
                className="
                        mt-[30px] lg:mt-[50px] 
                        max-w-[1039.36px] 
                        font-bold 
                        text-right 
                        text-[14px] leading-[20px]
                        md:text-5xl md:leading-[40px] 2xl:leading-[120px] 
                        md:text-[40.63px] 2xl:text-[70.63px] lg:leading-[101px]
                        text-[#FDFFFC]
                      "
              >
                و ببساطة نص شكلي (بمعنى أن الغاية هي{" "}
                <span className="text-center px-2 md:px-8 gap-[10px] max-w-[44px] md:max-w-[181px] h-[86px] bg-[#BD171D]">
                  معنا
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection
              variants={slideFromRightBounce}
              custom={2}
            >
           <p
                className="
                        max-w-[763.7px] 
                        text-right 
                        text-[#FDFFFC] 
                        font-normal text-[12px] leading-[17px] my-0
                        md:my-[10px] md:text-xl md:leading-7 md:font-semibold
                        2xl:my-[15px] lg:text-[24px] lg:leading-[38px]
                      "
              >                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
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
