"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import AnimatedSection, { deckShuffle, slideFromTopBounce } from "@/animation/AnimatedSection";

const slides = [
    { id: 1, icon: "/assets/icons/html.svg", text: "HTML" },
    { id: 2, icon: "/assets/icons/html.svg", text: "HTML" },
    { id: 3, icon: "/assets/icons/html.svg", text: "HTML" },
    { id: 4, icon: "/assets/icons/html.svg", text: "HTML" },
    { id: 5, icon: "/assets/icons/html.svg", text: "HTML" },
    { id: 6, icon: "/assets/icons/html.svg", text: "HTML" },
];

export default function Tools() {
    return (
        <section className="py-12 md:py-16 px-2 md:px-16">

            <AnimatedSection variants={slideFromTopBounce} className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center px-2 md:px-16">
                <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-secondry">
                    الأدوات المستخدمة
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
                        1024: { slidesPerView:3},
                        1440: { slidesPerView:4},

                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="flex flex-row justify-between w-100 items-center px-4 md:px-6 py-4 gap-2 md:gap-2.5 max-w-full 2xl:max-w-[454px] h-[80px] md:h-[96px] bg-[#EFEFEF] rounded-[12px] md:rounded-[16px]">
                                  <p className="font-aileron text-secondry font-medium text-sm md:text-base lg:text-[16px] leading-5 md:leading-[26px] text-right flex-1">
                                    {slide.text}
                                </p>
                                <Image
                                    src={slide.icon}
                                    alt={`icon-${slide.id}`}
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
