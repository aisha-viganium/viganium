import React from "react";
import Image from "next/image";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";

export default function StorySection({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";

  return (
    <section className="mx-auto py-5 md:py-8 px-2 md:px-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-16">

        <AnimatedSection variants={slideFromRightBounce}>
          <div className="flex flex-col gap-6">
            <div className={` ${isArabic ? "border-r-[#F9C751] pr-4 border-r-[13px] md:border-r-[20px]" : " border-l-[#F9C751] pl-4 border-l-[13px] md:border-l-[20px]"}`}>
              <span className="font-semibold font-brando-semibold text-[14px] md:text-[24px] leading-[100%] md:leading-[34px] text-right text-[#F9C751] flex items-end gap-2">
                <span>{t("story.title")}</span>
                <Image
                  src={isArabic ? "/assets/icons/arrow-yellow.svg" : "/assets/icons/arrow-yellow-en.svg"}
                  alt="line"
                  width={19}
                  height={19}
                  className="w-[10px] h-[12px] md:w-[19px] md:h-[19px]"
                />
              </span>

              <p className={`max-w-[864px] font-normal md:font-bold text-[12px] md:text-[24px] lg:text-[36px] leading-auto md:leading-[42px] lg:leading-[51px] ${isArabic ? "text-right" : "text-left"} text-secondry mt-3`}>
                {t("story.description")}
              </p>
            </div>

            <Image
              src="/assets/images/story-img.png"
              alt="story"
              width={526}
              height={300}
              className="h-[228px] md:h-auto rounded-[4px] md:rounded-[16px] w-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection variants={slideFromLeftBounce} delay={0.2}>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="relative">
                <Image
                  src="/assets/images/viganium-story.png"
                  alt="1"
                  width={350}
                  height={200}
                  className="object-cover w-full h-[128px] md:h-auto rounded-[4px] md:rounded-[16px]"
                />
                <div className="absolute inset-0 rounded-[4px] md:rounded-[16px] bg-[linear-gradient(183deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_97.51%)]"></div>
              </div>

              <div className="relative">
                <Image
                  src="/assets/images/robot-story.png"
                  alt="2"
                  width={350}
                  height={200}
                  className="object-cover w-full h-[128px] md:h-auto rounded-[4px] md:rounded-[16px]"
                />
                <div className="absolute inset-0 rounded-[4px] md:rounded-[16px] bg-[linear-gradient(183deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_97.51%)]"></div>
              </div>
            </div>

            <p className={`max-w-[864px] font-normal md:font-semibold text-[14px] md:text-[18px] lg:text-[24px] leading-[18px] md:leading-[34px] ${isArabic ? "text-right" : "text-left"} text-secondry-200`}>
              {t("story.details")}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex">
                <Image src="/assets/images/person1.jpg" alt="1" width={50} height={50} className={`w-[45px] md:w-[50px] h-[45px] object-cover md:h-[50px] outline-[1.37px] outline-[#FDFFFC] rounded-full shadow-[0_4px_4px_0_#00000040]  ${isArabic ? "ml-[-24px]" : "mr-[-24px]"}`} />
                <Image src="/assets/images/person2.jpg" alt="2" width={50} height={50} className={`w-[45px] md:w-[50px] h-[45px] object-cover md:h-[50px] outline-[1.37px] outline-[#FDFFFC] rounded-full  shadow-[0_4px_4px_0_#00000040] ${isArabic ? "ml-[-24px]" : "mr-[-24px]"}`} />
                <Image src="/assets/images/person1.jpg" alt="3" width={50} height={50} className={`w-[45px] md:w-[50px] h-[45px] object-cover md:h-[50px] outline-[1.37px] outline-[#FDFFFC] rounded-full shadow-[0_4px_4px_0_#00000040]  ${isArabic ? "ml-[-24px]" : "mr-[-24px]"}`} />
                <Image src="/assets/images/person2.jpg" alt="4" width={50} height={50} className={`w-[45px] md:w-[50px] h-[45px] object-cover md:h-[50px] outline-[1.37px] outline-[#FDFFFC] rounded-full  shadow-[0_4px_4px_0_#00000040] ${isArabic ? "ml-[-24px]" : "mr-[-24px]"}`} />
                <Image src="/assets/images/person1.jpg" alt="5" width={50} height={50} className={`w-[45px] md:w-[50px] h-[45px] object-cover md:h-[50px] outline-[1.37px] border-[#FDFFFC] rounded-full shadow-[0_4px_4px_0_#00000040]`} />
              </div>

              <button className="cursor-pointer flex items-center gap-1 md:gap-4">
                <div className="w-[45px] md:w-[50px] h-[45px] md:h-[50px] bg-[#C83E43] border-2 border-[#414141] rounded-full flex items-center justify-center">
                  <Image
                    src="/assets/icons/arrow-white.svg"
                    alt="arrow"
                    width={17}
                    height={13}
                    className={`w-[17px] md:w-[17px] h-auto ${isArabic ? "rotate-180" : ""}`}
                  />
                </div>
                <span className="font-[600] text-[12px] md:text-[20px] leading-[29px] text-right text-black">
                  {t("story.watchIntro")}
                </span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
