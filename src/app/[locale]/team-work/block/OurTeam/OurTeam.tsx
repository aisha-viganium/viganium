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

            <h3 className="font-bold text-[36px] md:text-[48px] leading-[46px] md:leading-[69px] text-right text-[#1A1A1A] mt-3">
              اهلا بك مع اعظم فريق عمل في الوطن العربي
            </h3>

            <p className="font-semibold text-[18px] md:text-[24px] my-5 leading-[28px] md:leading-[34px] text-right text-[#1A1A1A]">
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-5">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-row justify-start items-center gap-4">
                <Image
                  src="/assets/images/ICON-BACKGROUND.png"
                  alt="Advantages"
                  width={100}
                  height={100}
                  className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-[8px_0px_0px_0px]"
                />
                <p className="font-semibold text-[16px] md:text-[24px] leading-[24px] md:leading-[34px] text-center text-[#414141]">
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
