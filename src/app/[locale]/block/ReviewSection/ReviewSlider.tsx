"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import AnimatedSection, { fadeInUp } from "@/animation/AnimatedSection";
import QuoteUp from "@/assets/SVG/QuoteUp";
import QuoteDown from "@/assets/SVG/QuoteDown";

type Review = {
  id: number;
  name: string;
  email: string;
  review: string;
  rating: number;
  image: string;
  video: string;
  time: string;
};

export default function ReviewSlider({
  reviews,
  locale,
}: {
  reviews: Review[];
  locale: string;
}) {
  const isArabic = locale === "ar";

  return (
    <div
      className="relative h-[50vh] md:min-h-[125vh] 2xl:min-h-[105vh] mt-0 md:mt-[-150px] overflow-hidden px-2 md:px-0 "
    >
      <div className="absolute w-full h-[25vh]  md:min-h-[75vh] left-0 bottom-0 bg-no-repeat bg-[url('/assets/images/RectangleBackground.svg')] bg-cover bg-center overflow-hidden"></div>

      <AnimatedSection variants={fadeInUp} className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 5000 }}
          className="relative mt-5 md:mt-[100px]"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="min-h-[700px] md:min-h-[900px]">
              <div className="relative flex flex-col items-center px-0 md:px-4 ">
                <div className="relative w-full md:w-[1057px] h-[219px] md:h-[419px] overflow-hidden rounded-[20px] md:rounded-[34px] mt-0 md:mt-20 clipPath-video">
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover clipPath-video"
                    style={{ filter: "drop-shadow(0px 8px 20px rgba(0,0,0,0.4))" }}
                  >
                    <source src={review.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] clipPath-video" />
                  <div
                    className={`absolute left-1/2 top-[35%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}
                  >
                    <Image
                      src="/assets/icons/videoplayer.svg"
                      alt="Play"
                      height={100}
                      width={100}
                      className="md:w-[220px] md:h-[220px] rotate-y-180"
                    />
                  </div>
                </div>

                <div className="relative w-full md:w-[1057px] mt-[-300px] md:mt-[-200px]">
                  <Image
                    src="/assets/icons/rectangle-yellow.svg"
                    alt="yellow"
                    width={971}
                    height={217}
                    className={`absolute -z-1 md:z-1 w-[80%] md:w-[971px] h-[150px] md:h-[217px] bg-[#F9C751] rounded-[20px] md:rounded-[34px]
                      ${isArabic ? "right-[5%] top-[66%] md:right-[-5%] md:top-[45%]" : "left-[5%] top-[66%] md:left-[-5%] md:top-[45%]"}
                    `}
                    style={{
                      transform: isArabic
                        ? "matrix(-0.98, 0.21, 0.21, 0.98, 0, 0)"
                        : "matrix(0.98, 0.21, -0.21, 0.98, 0, 0)",
                    }}
                  />


                  <span className={`absolute top-[40%] md:top-10  flex gap-1 md:gap-4 z-50 [filter:drop-shadow(-8.53px_8.53px_23.41px_rgba(0,0,0,0.25))] ${isArabic ? "right-0" : "left-0 rotate-y-180"}`}>
                    
                    <QuoteUp className="w-auto h-[25px] md:h-[100px]"/>
                    
                    <QuoteUp className="w-auto h-[25px] md:h-[100px]"/>

                  </span>

                  <div
                    style={{ filter: "drop-shadow(0px 8px 20px rgba(0,0,0,0.4))" }}
                    className="relative z-10 min-h-[300px] md:min-h-[475px] py-6 px-4 md:py-8 md:px-6 bg-[#FDFFFC] shadow rounded-[20px] md:rounded-[34px] flex flex-col gap-4 md:gap-6 pt-[145px] md:pt-[150px] clipPath-review mt-[70px] md:mt-0"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={review.image}
                        alt="person"
                        width={60}
                        height={60}
                        className=" border-2 md:border-4  border-[#BD171D] rounded-full w-[30px] h-[30px] md:w-[80px] md:h-[80px] shadow-[1px_1px_4px_3px_#00000040]"
                      />
                      <div>
                        <p
                          className={`font-bold text-[10px] leading-[16px] ${isArabic ? "text-right" : "text-left"
                            } md:text-[20px] md:text-secondry`}
                        >
                          {review.name}
                        </p>
                        <p
                          className={`font-light text-[10px] leading-[16px] mt-2 ${isArabic ? "text-right" : "text-left"
                            } md:font-bold md:text-[18px] md:text-secondry`}
                        >
                          {review.email}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`max-w-[90%] font-normal text-[10px] leading-[15px] ${isArabic ? "text-right" : "text-left"
                        } md:font-medium md:text-[16px] md:leading-[24px]`}
                    >
                      {review.review}
                    </p>

                    <div className="flex justify-start items-center gap-2 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Image
                          key={i}
                          src="/assets/icons/star.svg"
                          width={10}
                          height={10}
                          className="md:w-[28px] md:h-[28px]"
                          alt="star"
                        />
                      ))}
                      <p className="font-normal text-[14px] md:text-[18px] text-secondry"> {review.time}</p>
                    </div>
                  </div>

                  <span className={`absolute -bottom-2 md:-bottom-10  rotate-180 flex gap-1 md:gap-4 z-50 [filter:drop-shadow(-8.53px_8.53px_23.41px_rgba(0,0,0,0.25))] ${isArabic ? "left-0" : "right-0 rotate-y-180"}`}>
                
                                                           <QuoteUp className="w-auto h-[25px] md:h-[100px] "/>

                                        <QuoteUp className="w-auto h-[25px] md:h-[100px] "/>

                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden md:flex custom-prev absolute left-[1%] 2xl:left-[10%] top-[95%] md:top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[120px] 2xl:h-[120px] bg-gradient-to-b from-[#BD171D] to-[#5B1517] rounded-full items-center justify-center z-50 cursor-pointer">
          <Image
            src="/assets/icons/arrow-white.svg"
            alt="prev"
            width={25}
            height={25}
            className="md:w-[48px] md:h-[48px] rotate-180"
          />
        </div>
        <div className="hidden md:flex custom-next absolute right-[1%] 2xl:right-[10%] top-[95%] md:top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[120px] 2xl:h-[120px] bg-gradient-to-b from-[#BD171D] to-[#5B1517] rounded-full items-center justify-center z-50 cursor-pointer">
          <Image
            src="/assets/icons/arrow-white.svg"
            alt="next"
            width={25}
            height={25}
            className="md:w-[48px] md:h-[48px]"
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
