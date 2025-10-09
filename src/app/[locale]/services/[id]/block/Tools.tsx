"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import AnimatedSection, { deckShuffle, slideFromTopBounce } from "@/animation/AnimatedSection";
import { useTranslation } from "react-i18next";
export interface Service {
    id: number;
    tools: {
        title: string;
        image: string;
    }[];
}


export default function Tools({ service }: { service: Service; }) {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    return (
        <section className="pb-12 md:pb-16 px-2 md:px-16">

            <AnimatedSection variants={slideFromTopBounce}        className={`
          ${isArabic ? " border-r-[13px] md:border-r-[36px] border-r-[#F9C751] pr-2 md:pr-8 text-right" : "border-l-[13px] md:border-l-[20px] border-l-[#F9C751] pl-2 md:pl-8 text-left"} 
          min-h-[33px] md:minh-[69px] flex items-center px-2 md:px-16
        `}>
                <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold text-[#414141] font-brando-bold
                       ">
                    {t("ServiceDetailPage.Tools.title")}
                </p>
            </AnimatedSection>
            <AnimatedSection variants={deckShuffle} className="mt-8 md:mt-10">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={5}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 4 },

                    }}
                >
                    {service.tools.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex flex-row justify-between w-100 items-center px-4 md:px-6 py-4 gap-2 md:gap-2.5 max-w-full 2xl:max-w-[454px] h-[80px] md:h-[96px] bg-[#EFEFEF] rounded-[12px] md:rounded-[16px]">
                                <p className={`font-aileron text-secondry font-medium text-sm md:text-base lg:text-[16px] leading-5 md:leading-[26px] ${isArabic ? "text-right" : ""} flex-1`}>
                                    {slide.title}
                                </p>
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    width={40}
                                    height={40}
                                    className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]"
                                />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </AnimatedSection>
        </section>
    );
}
