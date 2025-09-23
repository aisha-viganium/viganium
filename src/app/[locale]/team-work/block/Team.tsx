"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import AnimatedSection, { deckShuffle } from "@/animation/AnimatedSection";

export default function Team() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            id: 1,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },
        {
            id: 2,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },
        {
            id: 3,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },
        {
            id: 4,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },
        {
            id: 5,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },
        {
            id: 6,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },

        {
            id: 7,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },

        {
            id: 8,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },

        {
            id: 9,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },
        {
            id: 10,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },
        {
            id: 11,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },

        {
            id:12,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },

        {
            id: 13,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        },

        {
            id: 14,
            name: "م/الأسم ثلاثي الأسم",
            image: "/assets/images/members/member.png",
            nameImage: "/assets/images/members/member-name.svg",
            job: "الوظيفة",
            age: "T8 سنوات",
        }
    ];

    return (
        <section className="py-5 md:py-16 px-2 md:px-5 bg-[#F8F8F8]">
            <AnimatedSection
                className="col-span-1"
                variants={deckShuffle}
            >
                <div className="mx-auto">

                    <div className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center">
                        <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-[#1A1A1A]">
                            فريق العمل
                        </p>
                    </div>
                    <div className="relative w-full mt-5">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={7}
                            spaceBetween={5}
                            initialSlide={7}
                            loop={true}
                            centeredSlides={true}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            pagination={{
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return `<span class="${className}"></span>`;
                                },
                            }}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView:3,
                                    centeredSlides: true,
                                    spaceBetween: 2,
                                },
                                640: {
                                    slidesPerView: 3,
                                    centeredSlides: true,
                                    spaceBetween: 2,
                                },
                                1024: {
                                    slidesPerView: 7,
                                    spaceBetween: 2,
                                },
                            }}
                            className="w-full !pt-5 !pb-15 md:!py-20 my-5"
                        >
                            {slides.map((slide, idx) => (
                                <SwiperSlide key={slide.id}>
                                    <div
                                        className={`bg-[#EBEBEB] border border-white rounded-[16.2px] flex flex-col items-center text-center transition-all duration-500
                                            ${activeIndex === idx ? "scale-110 shadow-lg z-10" : "scale-90"}
                                            `}
                                    >
                                        <div className="relative w-full  min-h-[160px] md:min-h-[306px] xl:min-h-[346px]">
                                            <Image
                                                src={slide.nameImage}
                                                alt={slide.name}
                                                width={200}
                                                height={200}
                                                className="absolute h-[308.2px] left-0 -translate-x-[1.64px] top-[-108.14px] md:top-[-18.14px] w-[110%] max-w-[unset]"
                                            />
                                            <Image
                                                src="/assets/images/members/member-frame.png"
                                                alt="vector"
                                                width={270}
                                                height={270}
                                                className="absolute left-0 -translate-x-[1.64px] top-[-18.14px] w-[100%] max-w-[unset]"
                                            />
                                        </div>
                                        <h3 className="font-bold text-[8px]  md:text-[18px] leading-[14px] text-[#110000]">
                                            {slide.name}
                                        </h3>
                                        <p className="font-medium text-[6px] md:text-[16px] leading-[13px] text-[#110000] my-2 md:my-3">
                                            {slide.job} . {slide.age}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                        {/* Navigation */}
                        <div className="flex items-center justify-around gap-4 mt-[-50px] relative mb-6 z-40">


                            <button className="custom-next flex justify-center items-center w-[54px] h-[42px] bg-white  border-[#EEEEEE] border-4 shadow-[0_0_11.3px_rgba(1,17,59,0.05)] rounded-[11px] p-[3px]">
                                <Image src="/assets/icons/arrow-black.svg" alt="" width={24} height={24} className="rotate-180" />

                            </button>
                            <div className="swiper-pagination !static flex items-center gap-2"></div>

                            <button className="custom-prev flex justify-center items-center w-[54px] h-[42px] bg-white  border-[#EEEEEE] border-4 shadow-[0_0_11.3px_rgba(1,17,59,0.05)] rounded-[11px] p-[3px]">
                                <Image src="/assets/icons/arrow-black.svg" alt="" width={24} height={24} />
                            </button>

                        </div>
                        {/* Pagination styling */}
                        <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cfcfce;
          opacity: 1;
          border-radius: 150px;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
          bottom: 0px !important;
        }
        .swiper-pagination-bullet-active {
          background: #110000;
          width: 21px;
          height: 12px;
        }
        .swiper-pagination-bullet-prev,
        .swiper-pagination-bullet-next {
          transform: scale(0.8);
        }
      `}</style>

                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}
