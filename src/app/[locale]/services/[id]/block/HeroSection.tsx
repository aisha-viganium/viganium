import AnimatedSection, { slideFromLeftBounce, slideFromRightBounce } from "@/animation/AnimatedSection";
import Image from "next/image";
import React from "react";
export interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
}
export default function HeroSection({ service, locale }: { service: Service; locale: string;}) {
    const isArabic = locale === "ar";

  return (
    <>
      <section className="lg:hidden relative bg-[url('/assets/images/service-detail-cover.png')] bg-cover bg-center overflow-hidden  h-[50vh] md:min-h-screen">
        <div className="absolute inset-0 bg-[#1A1A1A66]"></div>
        <div className="relative z-10  p-4 text-white h-full flex items-center mt-[100px] md:mt-0">
          <div className="flex flex-col items-center justify-end w-full gap-2 md:gap-8 pt-16">

            <AnimatedSection variants={slideFromRightBounce} className="text-right w-full">

              <h1
                className={`
                        mt-[30px] lg:mt-[50px] 
                        font-bold 
                        ${isArabic ? "text-right" : "text-left"} 
                        text-[14px] 
                        md:text-5xl 
                        lg:text-[70.63px] 
                        text-[#FDFFFC]
                      `}>
                {service.name}
              </h1>
              <p
                className={`
                      
                        ${isArabic ? "text-right" : "text-left"} 
                        text-[#FDFFFC] 
                        font-normal text-[12px] leading-[17px] my-6 
                        md:my-[40px] md:text-xl md:leading-7 md:font-semibold md:font-brando-semibold
                        lg:my-[32px] lg:text-[24px] lg:leading-[38px]
                      `}
              >
              </p>
            </AnimatedSection>

            <AnimatedSection variants={slideFromLeftBounce} className="relative w-full h-96 flex justify-end mt-8">

              <div className="relative w-100 ">
                <div className="absolute w-12 h-16 left-[25%] top-0">
                  <Image
                    src="/assets/icons/shapes-group.svg"
                    alt="Shapes"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute w-36 h-24 right-16 top-8">
                  <Image
                    src="/assets/icons/polygon-red.svg"
                    alt="Red Polygon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute w-[150px] h-[105px] left-[30%] top-3">
                  <Image
                    src={service.image}
                    alt="Service"
                    fill
                    className="object-cover rounded-[2px] md:rounded-[8px]"
                  />
                </div>
                <div className="absolute w-14 h-14 left-[25%] top-[18%]">
                  <Image
                    src="/assets/icons/polygon.svg"
                    alt="Polygon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>


          </div>
        </div>
      </section>

      <section className="hidden lg:block relative bg-[url('/assets/images/service-detail-cover.png')] bg-cover bg-center overflow-hidden min-h-screen 2xl:min-h-[948px]">
        <div className="absolute inset-0 bg-[#1A1A1A66]"></div>
        <div className="relative z-10 p-8 text-white">
          <div className="grid grid-cols-2 items-center justify-around mx-auto min-h-[948px] overflow-hidden h-full">
            <AnimatedSection variants={slideFromRightBounce} className="col-span-1 h-full flex flex-col justify-center items-start text-white text-right pr-2">

              <h1 className={`${isArabic ? "text-right" : "text-left"} mt-[50px] max-w-[1039.36px] font-bold font-brando-bold text-[70.6311px] text-[#FDFFFC]`}>
                {service.name}
              </h1>
              <p className={`${isArabic ? "text-right" : "text-left"} max-w-[563.7px] 2xl:max-w-[763.7px] my-[32px] font-semibold font-brando-semibold  text-[26.4867px] leading-[38px] text-[#FDFFFC]`}>
                {service.description}
              </p>
            </AnimatedSection>
            <AnimatedSection variants={slideFromLeftBounce} className="col-span-1 w-full h-full relative mt-20">

              <Image
                src="/assets/icons/shapes-group.svg"
                alt="Hero"
                width={226}
                height={268}
                className="absolute w-[226px] h-[268px] left-0 top-[98.46px] 2xl:top-[58.46px]"
              />
              <Image
                src="/assets/icons/polygon-red.svg"
                alt="Hero"
                width={821}
                height={730}
                className="absolute w-[620.97px] h-[530.35px] 2xl:w-[820.97px] 2xl:h-[730.35px] left-[112px] 2xl:left-[212px] top-[100px]"
              />
              <Image
                src={service.image}
                alt="Hero"
                width={842}
                height={619}
                className="absolute w-[642px] h-[419px] 2xl:w-[842px] 2xl:h-[619px] left-[28px] 2xl:left-[68px] top-[162.46px] rounded-[8px]"
              />
              <Image
                src="/assets/icons/polygon.svg"
                alt="Hero"
                width={246}
                height={250}
                className="absolute w-[146px] h-[250px] 2xl:w-[246px] 2xl:h-[250px] left-0 2xl:left-0 top-[401.46px] 2xl:top-[451.46px]"
              />
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}