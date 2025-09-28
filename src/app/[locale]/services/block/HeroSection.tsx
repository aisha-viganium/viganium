import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedSection, { fadeInRight } from "@/animation/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative bg-[url('/assets/images/services-cover.jpg')] h-[50vh] md:h-auto bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white px-2 md:px-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2  items-center pt-[50px] justify-between md:justify-around mx-auto  md:min-h-[948px] h-[50vh] gap-8">

          <AnimatedSection
            variants={fadeInRight}
            transition={{ duration: 0.3 }}
            className="col-span-1 flex flex-col justify-center items-start text-right order-1 lg:order-1"
          >
            <h1
              className="
                        mt-[30px] lg:mt-[50px] 
                        max-w-[1039.36px] 
                        font-bold 
                        text-right 
                        text-[14px] leading-[20px]
                        md:text-5xl md:leading-[60px] 
                        lg:text-[70.63px] lg:leading-[101px]
                        text-[#FDFFFC]
                      "
            >              تطوير و نجاح فكرتك , حرفتنا
            </h1>

            <p
              className="
                        max-w-[763.7px] 
                        text-right 
                        text-[#FDFFFC] 
                        font-normal text-[12px] leading-[17px] my-6 
                        md:my-[40px] md:text-xl md:leading-7 md:font-semibold
                        lg:my-[65px] lg:text-[24px] lg:leading-[38px]
                      "
            >              إحنا مش بس بنصلّح، ونصمّم، ونهتم بالمواقع؛ إحنا بنبني شراكات عشان نضمن إن تواجدك على الإنترنت يشتغل بنفس قوة شغلك.
            </p>

            <Link href="/contact-us" className="w-full md:w-auto">
              <button
                className="
                            absolute flex flex-row justify-center items-center px-1 
                            py-[10.6px] gap-[6.24px] 
                            max-w-[72px] h-[32px] 
                            rounded-[4px] bg-[#FDFFFC] cursor-pointer
                            md:static md:w-[350px] md:h-[65px]  md:max-w-[unset]
                            2xl:w-[693px]
                          "
              >
                <span
                  className="
                              font-bold text-[10px] leading-[14px] text-center text-[#1A1A1A]
                              md:text-lg md:leading-[26px]
                              lg:text-[20px] lg:leading-[29px]
                            "
                >
                  تواصل معنا
                </span>
                <Image
                  src="/assets/icons/arrow-black.svg"
                  alt="Hero"
                  width={24}
                  height={24}
                  className="ms-[6px] w-[10px] h-[10px] md:w-[24px] md:h-[24px]"
                />
              </button>

            </Link>
          </AnimatedSection>
          <AnimatedSection
            className="col-span-1 w-full h-full flex justify-center items-end order-2 lg:order-2"
          >
            <div className="lg:hidden w-full flex justify-center">
              <Image
                src="/assets/images/saudi-man.png"
                alt="Hero"
                width={500}
                height={500}
                className="w-[188px] md:w-auto h-[188px] md:h-[50vh] object-contain"
                priority
              />
            </div>

            <div className="hidden lg:block relative w-full h-full">
              <Image
                src="/assets/images/saudi-man.png"
                alt="Hero"
                width={922}
                height={922}
                className="absolute w-[822px] h-[822px] 2xl:w-[922px] 2xl:h-[922px] left-[50px] md:left-[0px] 2xl:left-[50px] bottom-0 object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
