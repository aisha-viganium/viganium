"use client"
import Image from "next/image";
import React from "react";
import AnimatedSection, { fadeInRight } from "@/animation/AnimatedSection";
// import { useTranslation } from "react-i18next";
import "@/i18n/client";
export default function HeroSection() {

    //   const { t } = useTranslation();
    return (
        <section className="relative bg-[url('/assets/images/cover.png')] bg-cover bg-center overflow-hidden">
            {/* <h1>
                {t(`HomePage.title`)}
            </h1> */}
            <div className="flex flex-col-reverse md:flex-col  lg:grid lg:grid-cols-3 items-center justify-around md:pr-15 mx-auto h-[50vh] md:min-h-[100vh] overflow-hidden px-2 md:px-8 py-8 pb-0 lg:py-0">
                <AnimatedSection
                    variants={fadeInRight}
                    transition={{ duration: 0.8 }}
                    className="col-span-2 h-full flex flex-col justify-center items-start text-white text-right pr-0 lg:pr-5 order-2 mt-[50px] md:mt-0"
                >

                    <span
                        className="
                                    flex flex-row justify-center items-center 
                                    px-[10px] md:px-[17.66px] 
                                    py-[5px] md:py-[9px] 
                                    gap-[6.26px] md:gap-[11.04px] 
                                    w-full md:w-auto 
                                    max-w-[50%] md:min-w-[342px] 
                                    h-[27px] md:min-h-[50px] 
                                    text-center 
                                    font-bold text-[10px] md:text-[26.07px] 
                                    leading-[100%] md:leading-[32px] 
                                    text-[#BD171D] 
                                    bg-[#F8E8E8] 
                                    border border-[#E4A0A2] 
                                    rounded-[17.5px] md:rounded-[30.90px] md:mb-2 2xl:mb-10
                                "
                    >
                        افضل شركة تسويق في الوطن العربي
                    </span>


                    <h1
                        className="
                                    mt-6 md:mt-[25px] 2xl:mt-[45px]
                                    max-w-[323px] lg:max-w-[1039.36px] 
                                    font-bold 
                                    text-[14px] md:text-[45px]
                                     2xl:text-[75px] 
                                    leading-[20px] md:leading-[60px] lg:leading-[45px] xl:leading-[55px] 
                                    text-right text-[#FDFFFC] 
                                    flex-none order-0 self-stretch grow-0
                                
                                "
                    >
                        نحن نصنع حضورًا رقميًا يتحدّث عنك!
                    </h1>

                    <p
                        className="
                                    max-w-[90%] 2xl:max-w-[763.7px] 
                                    mt-4 md:mt-4 2xl:mt-10
                                    !font-normal md:font-semibold 
                                    text-[12px] md:text-xl md:text-[16px]  2xl:text-[24px] 
                                    leading-[normal] md:leading-7 lg:leading-[38px] 
                                    text-right text-[#FDFFFC] 
                                    flex-none order-1 grow-0
                                "
                    >
                        نحن لا نُجمّل، بل نُخطّط، نُحلّل، وننفّذ بناءً على رؤية واضحة وأرقام تقود القرار،
                        إذا كنت تبحث عن تأثير طويل المدى، فإن رحلتك تبدأ من هنا.
                    </p>


                    <Image
                        src="/assets/icons/star-white.svg"
                        alt="Hero"
                        width={90}
                        height={90}
                        className="
                                    absolute 
                                    w-[31px] h-[31px] 
                                    md:w-[90px] md:h-[90px] 
                                    left-[80px] top-[35%] 
                                    md:bottom-[10%] md:right-[25%] 
                                    md:left-auto md:top-auto
                                "
                    />


                </AnimatedSection>

                <div
                    className="col-span-1 w-full h-full order-1 md:mb-6 lg:mb-0 lg:order-2 overflow-hidden"

                >
                    <div className="lg:hidden overflow-hidden h-[30vh] w-full flex justify-center">
                        <Image
                            src="/assets/images/robot.png"
                            alt="Hero"
                            width={1710}
                            height={150}
                            className="w-auto h-full object-cover object-top slide-up"
                            priority
                        />
                    </div>
                    <div className="hidden lg:block">
                        <Image
                            src="/assets/images/robot.png"
                            alt="Hero"
                            width={1710}
                            height={150}
                            className="absolute w-[99%] max-w-[1710px] h-auto left-[-405px] top-[-37px] bg-[url('/robot.png')] bg-no-repeat bg-cover slide-up"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
