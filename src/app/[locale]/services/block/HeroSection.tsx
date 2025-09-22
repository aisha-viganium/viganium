import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedSection, { fadeInUp, fadeInRight } from "@/animation/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative bg-[url('/assets/images/services-cover.jpg')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white px-4 md:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 items-center pt-[180px] justify-between md:justify-around mx-auto min-h-screen md:min-h-[948px] h-full gap-8">
          
          <AnimatedSection
            variants={fadeInRight}
            className="col-span-2 flex flex-col justify-center items-start text-right order-1 lg:order-1"
          >
            <h1 className="mt-[30px] lg:mt-[50px] max-w-[1039.36px] font-bold text-3xl md:text-5xl lg:text-[70.63px] leading-tight md:leading-[60px] lg:leading-[101px] text-[#FDFFFC]">
              تطوير و نجاح فكرتك , حرفتنا
            </h1>

            <p className="max-w-[763.7px] my-6 md:my-[40px] lg:my-[65px] font-semibold text-base md:text-xl lg:text-[26.49px] leading-6 md:leading-7 lg:leading-[38px] text-[#FDFFFC]">
              إحنا مش بس بنصلّح، ونصمّم، ونهتم بالمواقع؛ إحنا بنبني شراكات عشان نضمن إن تواجدك على الإنترنت يشتغل بنفس قوة شغلك.
            </p>

            <Link href="/contact-us" className="w-full md:w-auto">
              <button className="cursor-pointer w-full md:w-[350px] lg:w-[693px] h-[50px] md:h-[65px] bg-[#FDFFFC] rounded-[16px] flex items-center justify-center">
                <span className="font-bold text-sm md:text-lg lg:text-[20px] text-center text-[#1A1A1A]">
                  تواصل معنا
                </span>
                <Image
                  src="/assets/icons/arrow-black.svg"
                  alt="Hero"
                  width={24}
                  height={24}
                  className="ms-2 md:ms-3"
                />
              </button>
            </Link>
          </AnimatedSection>
          <AnimatedSection
            variants={fadeInUp}
            className="col-span-1 w-full h-full flex justify-center items-end order-2 lg:order-2"
          >
            <div className="lg:hidden w-full flex justify-center">
              <Image
                src="/assets/images/saudi-man.png"
                alt="Hero"
                width={500}
                height={500}
                className="w-auto h-[50vh] object-contain mb-[-60px]"
                priority
              />
            </div>

            <div className="hidden lg:block relative w-full h-full">
              <Image
                src="/assets/images/saudi-man.png"
                alt="Hero"
                width={922}
                height={922}
                className="absolute w-[922px] h-[922px] left-[50px] bottom-0 object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
