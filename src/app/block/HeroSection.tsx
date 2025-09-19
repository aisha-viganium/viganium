import Image from "next/image";
import React from "react";
import AnimatedSection, { fadeInRight } from "@/animation/AnimatedSection";

export default function HeroSection() {
    return (
        <section className="relative bg-[url('/assets/images/cover.png')] bg-cover bg-center overflow-hidden">
    

            <div className="flex flex-col-reverse md:flex-col  lg:grid lg:grid-cols-3 items-center justify-around md:pr-15 mx-auto min-h-screen md:min-h-[100vh] overflow-hidden h-full px-4 md:px-8 py-8 pb-0 lg:py-0">
                <AnimatedSection
                    variants={fadeInRight}
                    transition={{ duration: 0.8 }}
                    className="col-span-2 h-full flex flex-col justify-center items-start text-white text-right pr-0 lg:pr-5 order-2 mt-[150px] md:mt-0"
                >

                    <span className="flex flex-row justify-center items-center px-4 md:px-[17.66px] mr-0 lg:mr-10 py-2 md:py-[8.83px] gap-2 md:gap-[11.04px] w-full md:w-auto min-w-[200px] md:min-w-[294px] min-h-[32px] text-center font-bold text-base md:text-[22.07px] leading-7 md:leading-[32px] text-[#BD171D] bg-[#F8E8E8] border border-[#E4A0A2] rounded-full md:rounded-[30.90px] flex-none order-0 grow-0"
                    >
                        افضل شركة تسويق في الوطن العربي
                    </span>
                    <h1 className="mt-6 md:mt-[45px] max-w-full lg:max-w-[1039.36px] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[70.63px] leading-tight md:leading-[60px] lg:leading-[101px] text-right text-[#FDFFFC] flex-none order-0 self-stretch grow-0"
                    >
                        نحن نصنع حضورًا رقميًا يتحدّث عنك!
                    </h1>
                    <p className="max-w-full lg:max-w-[763.7px] mt-4 md:mt-7 font-semibold text-lg md:text-xl lg:text-[26.49px] leading-6 md:leading-7 lg:leading-[38px] text-right text-[#FDFFFC] flex-none order-1 grow-0"
                    >
                        نحن لا نُجمّل، بل نُخطّط، نُحلّل، وننفّذ بناءً على رؤية واضحة وأرقام تقود القرار،
                        إذا كنت تبحث عن تأثير طويل المدى، فإن رحلتك تبدأ من هنا.
                    </p>

                    <Image
                        src="/assets/icons/star-white.svg"
                        alt="Hero"
                        width={90}
                        height={90}
                        className="absolute bottom-[25%] md:bottom-[10%] md:right-[25%] sm:right-unset left-[5%] md:left-unset "
                    />



                </AnimatedSection>

                <div
                    className="col-span-1 w-full h-full order-1 md:mb-6 lg:mb-0 lg:order-2 overflow-hidden"

                >
                    <div className="lg:hidden overflow-hidden h-[40vh] w-full flex justify-center">
                        <Image
                            src="/assets/images/robot.png"
                            alt="Hero"
                            width={1710}
                            height={150}
                            className="w-auto h-full object-cover object-center slide-up"
                            priority
                        />
                    </div>
                    <div className="hidden lg:block">
                        <Image
                            src="/assets/images/robot.png"
                            alt="Hero"
                            width={1710}
                            height={150}
                            className="absolute w-[85%] max-w-[1710px] h-auto left-[-405px] top-[-37px] bg-[url('/robot.png')] bg-no-repeat bg-cover slide-up"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
