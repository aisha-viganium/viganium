import Image from "next/image";
import CardsDiv from "./CardsDiv";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";

export default function OurTeam() {
  return (
    <section className="py-0 md:py-16 container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center mt-20">
        <AnimatedSection
          className="col-span-1"
          variants={slideFromRightBounce}
        >
          <div>
            <span className="font-semibold text-[24px] leading-[34px] text-right text-[#F9C751] flex items-center gap-2">
              <span>فريق عملنا</span>
              <Image
                src="/assets/icons/arrow-yellow.svg"
                alt="line"
                width={15}
                height={10}
                className="w-[15px] h-auto"
              />
            </span>

            <h3 className="font-bold text-[36px] sm:text-[48px] leading-[46px] sm:leading-[69px] text-right text-[#1A1A1A] mt-3">
              اهلا بك مع اعظم فريق عمل في الوطن العربي
            </h3>

            <p className="font-semibold text-[18px] sm:text-[24px] my-5 leading-[28px] sm:leading-[34px] text-right text-[#1A1A1A]">
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-5">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-row justify-start items-center gap-4">
                <Image
                  src="/assets/images/ICON-BACKGROUND.png"
                  alt="Advantages"
                  width={100}
                  height={100}
                  className="w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] rounded-[8px_0px_0px_0px]"
                />
                <p className="font-semibold text-[16px] sm:text-[24px] leading-[24px] sm:leading-[34px] text-center text-[#414141]">
                  ببساطة نص شكلي
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection
          className="col-span-1 mt-10 lg:mt-0"
          variants={slideFromLeftBounce}
        >
          <CardsDiv />
        </AnimatedSection>
      </div>
    </section>
  );
}
