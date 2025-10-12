import Image from "next/image";
import React from "react";
import AnimatedSection, { fadeInRight } from "@/animation/AnimatedSection";

export default function HeroSection({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";

    return (
        <section
            className="relative bg-[url('/assets/images/cover.png')] bg-cover bg-center overflow-hidden"
        >
            <div className={`flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-3 items-center justify-around ${isArabic?"md:pr-12":"md:pl-12"}  mx-auto h-[50vh] md:min-h-[100vh] overflow-hidden px-2 md:px-0 py-8 pb-0 lg:py-0`}>

                <AnimatedSection
                    variants={fadeInRight}
                    transition={{ duration: 0.8 }}
                    className={`col-span-2 h-full flex flex-col justify-center 
                        ${isArabic ? "items-start text-right" : "items-start text-left"} 
                        text-white pr-0 lg:pr-5 order-2 mt-[50px] md:mt-0`}
                >
                    <span
                        className={`
                            flex flex-row justify-center items-center 
                            px-[10px] md:px-[17.66px] 
                            py-[5px] md:py-[9px] 
                            gap-[6.26px] md:gap-[11.04px] 
                            w-full md:w-auto 
                            max-w-[50%] md:max-w-unset md:min-w-[342px] 2xl:w-[354px]
                            h-[27px] md:min-h-[50px] 
                            text-center 
                            font-bold text-[10px] md:text-[16.07px] ${isArabic ?"2xl:text-[24px]":"2xl:text-[14px]"} 
                            leading-[100%] md:leading-[32px] 
                            text-[#BD171D] 
                            bg-[#F8E8E8] 
                            border border-[#E4A0A2] 
                            rounded-[17.5px] md:rounded-[30.90px] md:mb-2 
                            
                        `}
                    >
                        {t("HomePage.bestCompany")}
                    </span>

                    <h1
                        className={`
                            mt-6 md:mt-[25px] 
                            max-w-[323px] lg:max-w-[1039.36px] 
                            font-bold md:leading-[60px]
                            text-[14px] md:text-[45px] 2xl:text-[70px] 
                            leading-[20px]  lg:leading-[45px] xl:leading-auto
                            ${isArabic ? "text-right xl:leading-[55px] 2xl:mt-[79px]" : "text-left xl:leading-[75px] 2xl:mt-[5px]"} text-[#FDFFFC]
                        `}
                    >
                        {t("HomePage.title")}
                    </h1>

                    <p
                        className={`
                            max-w-[90%] 2xl:max-w-[763.7px] 
                            mt-4 md:mt-4 2xl:mt-[36px]
                            !font-normal md:font-semibold md:font-brando-semibold 
                            text-[12px] md:text-[16px]  2xl:text-[24px] 
                            leading-[normal] md:leading-7 lg:leading-[38px] 
                            ${isArabic ? "text-right" : "text-left"} text-[#FDFFFC]
                        `}
                    >
                        {t("HomePage.description")}
                    </p>

                    <Image
                        src="/assets/icons/star-white.svg"
                        alt="Hero"
                        width={90}
                        height={90}
                        className={`
                            absolute 
                            w-[31px] h-[31px] 
                            md:w-[90px] md:h-[90px] 
                            ] top-[35%] 
                            md:bottom-[10%] ${isArabic ? "left-[80px] md:right-[25%]" : "right-[30px] md:left-[45%]"} 
                            md:top-auto
                        `}
                    />
                </AnimatedSection>

                <div className="col-span-1 w-full h-full order-1 md:mb-6 lg:mb-0 lg:order-2 overflow-hidden">
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
                            className={`absolute w-[38%] max-w-[1710px] h-auto 
                                ${isArabic ? "left-[55px]" : "right-[15px]"} 
                                top-[37px] slide-up`}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
