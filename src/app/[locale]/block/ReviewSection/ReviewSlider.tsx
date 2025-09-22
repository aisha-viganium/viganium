"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import AnimatedSection, { fadeInUp } from "@/animation/AnimatedSection";
type Review = {
  id: number;
  name: string,
  email: string,
  review: string,
  rating: number,
  image: string,
  video: string
};
export default function ReviewSlider({ reviews }: { reviews: Review[] }) {
  return (
    <div className="relative min-h-[100vh] overflow-hidden px-2 md:px-0 ">
      <div className="absolute w-full min-h-[620px] left-0 bottom-0 bg-[url('/assets/images/RectangleBackground.svg')] bg-cover bg-center overflow-hidden"></div>

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
          className="relative mt-[60px] sm:mt-[100px]"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="min-h-[700px] sm:min-h-[900px]">
              <div className="relative flex flex-col items-center px-4">
                <div className="relative w-full sm:w-[1057px] h-[240px] sm:h-[419px] overflow-hidden rounded-[20px] sm:rounded-[34px] mt-0  md:mt-10 sm:mt-20">
                  <video autoPlay muted loop className="w-full h-full object-cover clipPath-video" style={{ filter: "drop-shadow(0px 8px 20px rgba(0,0,0,0.4))" }}
                  >
                    <source src={review.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] clipPath-video" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <Image src="/assets/icons/videoplayer.svg" alt="Play" height={100} width={100} className="sm:w-[220px] sm:h-[220px]" />
                  </div>
                </div>

                <div className="relative w-full sm:w-[1057px] mt-[-50px] sm:mt-[-200px]">
                  <Image
                    src="/assets/icons/rectangle-yellow.svg"
                    alt="yellow"
                    width={971}
                    height={217}
                    className="absolute right-[-5%] top-[45%] w-[80%] sm:w-[971px] h-[150px] sm:h-[217px] bg-[#F9C751] rounded-[20px] sm:rounded-[34px]"
                    style={{
                      transform: "matrix(-0.98, 0.21, 0.21, 0.98, 0, 0)",
                    }}
                  />

                  <span className="absolute top-4 sm:top-10 right-0 flex gap-2 z-50">
                    <Image
                      src="/assets/icons/quote.svg"
                      alt="quote"
                      width={100}
                      height={100}
                      className="w-auto h-[50px] md:h-[100px] [filter:drop-shadow(-8.53px_8.53px_23.41px_rgba(0,0,0,0.25))]" />

                    <Image src="/assets/icons/quote.svg" alt="quote" width={100} height={100} className="w-auto h-[50px] md:h-[100px] [filter:drop-shadow(-8.53px_8.53px_23.41px_rgba(0,0,0,0.25))]" />
                  </span>

                  <div style={{ filter: "drop-shadow(0px 8px 20px rgba(0,0,0,0.4))" }}
                    className="relative z-10  min-h-[300px] sm:min-h-[475px] py-6 px-4 sm:py-8 sm:px-6 bg-[#FDFFFC] shadow rounded-[20px] sm:rounded-[34px] flex flex-col gap-6 pt-[60px] md:pt-[150px] clipPath-review mt-[70px] md:mt-0">
                    <div className="flex items-center gap-4">
                      <Image src={review.image} alt="person" width={60} height={60} className="border-2 sm:border-4 border-[#BD171D] rounded-full shadow w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]" />
                      <div>
                        <p className="font-bold text-[18px] sm:text-[20px] text-[#1A1A1A]">{review.name}</p>
                        <p className="font-bold text-[16px] sm:text-[18px] text-[#1A1A1A]">{review.email}</p>
                      </div>
                    </div>

                    <p className="font-medium text-[16px] sm:text-[20px] leading-[24px] sm:leading-[29px] text-[#7A7A7A]">
                      {review.review}
                    </p>

                    <div className="flex justify-start items-center gap-2 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Image key={i} src="/assets/icons/star.svg" width={20} height={20} className="sm:w-[28px] sm:h-[28px]" alt="star" />
                      ))}
                      <p className="font-normal text-[14px] sm:text-[18px] text-[#1A1A1A]">منذ 1 يوم</p>
                    </div>
                  </div>

                  <span className="absolute -bottom-6 sm:-bottom-10 left-0 rotate-180 flex gap-2 z-50">
                    <Image src="/assets/icons/quote.svg" alt="quote" width={100} height={100} className="w-auto h-[50px] md:h-[100px] [filter:drop-shadow(-8.53px_8.53px_23.41px_rgba(0,0,0,0.25))]" />
                    <Image src="/assets/icons/quote.svg" alt="quote" width={100} height={100} className="w-auto h-[50px] md:h-[100px] [filter:drop-shadow(-8.53px_8.53px_23.41px_rgba(0,0,0,0.25))]" />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
              <div className="custom-prev absolute left-[3%] sm:left-[3%] top-[95%] md:top-1/2 -translate-y-1/2 w-[50px] h-[50px] sm:w-[120px] sm:h-[120px] bg-gradient-to-b from-[#BD171D] to-[#5B1517] rounded-full flex items-center justify-center z-50 cursor-pointer">
        <Image src="/assets/icons/arrow-white.svg" alt="prev" width={25} height={25} className="sm:w-[48px] sm:h-[48px] rotate-180" />
      </div>
      <div className="custom-next absolute right-[3%] sm:right-[3%] top-[95%] md:top-1/2 -translate-y-1/2 w-[50px] h-[50px] sm:w-[120px] sm:h-[120px] bg-gradient-to-b from-[#BD171D] to-[#5B1517] rounded-full flex items-center justify-center z-50 cursor-pointer">
        <Image src="/assets/icons/arrow-white.svg" alt="next" width={25} height={25} className="sm:w-[48px] sm:h-[48px]" />
      </div>
      </AnimatedSection>

    </div>

  );
}
