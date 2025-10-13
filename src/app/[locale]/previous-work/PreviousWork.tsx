"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import AnimatedSection, { deckShuffle } from "@/animation/AnimatedSection";
import { useTranslation } from "react-i18next";
import previousWork from "@/data/previousWork";
import { motion, AnimatePresence } from "framer-motion";

export default function PreviousWork() {
  const {  i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const previousWorkData = previousWork[isArabic ? "ar" : "en"];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-4 md:pt-[150px] bg-[#1A1A1A]">
      <AnimatedSection className="col-span-1" variants={deckShuffle}>
        <div className="mx-auto flex flex-col items-center">
          <div className="relative w-full mb-6">
   <Swiper
  modules={[Navigation, Pagination]}
  slidesPerView={1}
  loop={true}
  centeredSlides={true}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  pagination={{
    clickable: true,
  }}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  className="w-full"
>
  {previousWorkData.map((work, idx) => (
    <SwiperSlide key={idx}>
      <div className="relative w-full flex justify-center">
        <Image
          src={work.image}
          alt={work.title}
          width={308}
          height={308}
          className="h-[308px] w-full object-contain"
        />
      </div>
    </SwiperSlide>
  ))}
            </Swiper>

            <div
              className={`flex flex-row items-baseline justify-between gap-4 relative z-40 mt-[-30px] px-4`}
            >
              <button className="cursor-pointer custom-prev flex justify-center items-center w-[32px] h-[24px] bg-white border-[#EEEEEE] border-4 shadow-[0_0_11.3px_rgba(1,17,59,0.05)] rounded-[4px] p-[3px]">
                <Image
                  src="/assets/icons/arrow-black.svg"
                  alt=""
                  width={24}
                  height={24}
                  className={`${isArabic ? "rotate-180" : ""}`}
                />
              </button>

  <div className="swiper-pagination !bottom-0 !relative mt-4"></div>

              <button className="cursor-pointer custom-next flex justify-center items-center w-[32px] h-[24px] bg-white border-[#EEEEEE] border-4 shadow-[0_0_11.3px_rgba(1,17,59,0.05)] rounded-[4px] p-[3px]">
                <Image
                  src="/assets/icons/arrow-black.svg"
                  alt=""
                  width={24}
                  height={24}
                  className={`${isArabic ? "" : "rotate-180"}`}
                />
              </button>
            </div>

            <style jsx global>{`
              .swiper-pagination-bullet {
                background: #CFCFCE;
                opacity: 1;
                border-radius: 150px;
                width: 12px;
                height: 12px;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                background: #BD171D;
                width: 21px;
                height: 12px;
              }
            `}</style>
          </div>

          <div className="relative w-full max-w-[400px] px-4 md:max-w-[unset] min-h-[350px] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <h3
                  className={`font-semibold text-[16px] leading-[23px] text-white mb-2 ${
                    isArabic
                      ? "text-right border-r-[21px] border-[#F9C751] pr-[16px]"
                      : "text-left border-l-[21px] border-[#F9C751] pl-[16px]"
                  }`}
                >
                  {previousWorkData[activeIndex].title}
                </h3>
                <p className={`max-w-[343px] md:max-w-[unset] mx-auto text-[14px] leading-[26px] font-normal text-white ${isArabic ? "text-right" : "text-left"}`}>
                  {previousWorkData[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
