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
        <section className="py-12 sm:py-16 container mx-auto px-4">
            <AnimatedSection variants={slideFromTopBounce} className="border-r-[10px] sm:border-r-[20px] border-r-[#F9C751] pr-2 sm:pr-4">

                <p className="font-bold text-2xl sm:text-4xl lg:text-[48px] leading-snug sm:leading-[50px] lg:leading-[69px] text-right text-[#414141]">
                    الأدوات المستخدمة
                </p>
            </AnimatedSection>

                <AnimatedSection variants={deckShuffle} className="mt-8 sm:mt-10">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="flex flex-row justify-between items-center px-4 sm:px-6 py-4 gap-2 sm:gap-2.5 max-w-full sm:max-w-[454px] h-[80px] sm:h-[96px] bg-[#EFEFEF] rounded-[12px] sm:rounded-[16px] mx-auto">
                                    <Image
                                        src={slide.icon}
                                        alt={`icon-${slide.id}`}
                                        width={40}
                                        height={40}
                                        className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[48px] lg:h-[48px]"
                                    />
                                    <p className="text-[#1A1A1A] font-medium text-sm sm:text-base lg:text-[16px] leading-5 sm:leading-[26px] text-right flex-1">
                                        {slide.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </AnimatedSection>
        </section>
    );
}
