import Image from "next/image";
import CardsDiv from "./CardsDiv";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce, slideFromTopBounce } from "@/animation/AnimatedSection";

export default function OurTeam() {
  return (
    <section className="py-5 md:py-16 px-2 md:px-5 container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center mt-0 md:mt-20">
        <AnimatedSection
          className="col-span-1"
          variants={slideFromRightBounce}
        >
          <div>
            <span className="font-semibold text-[14px] leading-[20px] md:text-[24px] md:leading-[34px] text-right text-[#F9C751] flex items-center gap-2">
              <span>فريق عملنا</span>
              <Image
                src="/assets/icons/arrow-yellow.svg"
                alt="line"
                width={10}
                height={10}
                className="w-[15px] h-[12px] md:h-auto"
              />
            </span>

            <h3 className="font-bold text-[20px] md:text-[36px] lg:text-[48px] leading-[29px] md:leading-[46px] lg:leading-[69px] text-right text-[#1A1A1A] mt-3">
              اهلا بك مع اعظم فريق عمل في الوطن العربي
            </h3>

            <p className="font-normal text-[14px] leading-[20px] md:font-semibold md:text-[18px] md:leading-[28px] lg:text-[24px] lg:leading-[34px] text-right text-[#1A1A1A] my-5">
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
            </p>
          </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-2 md:mt-10 gap-6">
          {[...Array(4)].map((_, i) => {
            const columns = 3;
            const row = Math.floor(i / columns);
            const col = i % columns;
            const customMap = [1, 2, 3];
            const custom = customMap[col] ?? 1;

            return (
              <AnimatedSection
                key={i}
                variants={slideFromTopBounce}
                custom={custom + row * 3}
                className="flex flex-col items-start text-right"
              >
                <Image
                  src="/assets/images/ICON-BACKGROUND.png"
                  alt="Advantages"
                  width={58}
                  height={58}
                  className="w-[48px] md:w-[58px] h-[48px] md:h-[58px] rounded-tl-[8px]"
                />

                <h5 className="font-semibold w-fit text-lg md:text-xl lg:text-[24px] leading-tight lg:leading-[34px] text-[#414141] pb-1 my-3 border-b-4 border-b-[#C83E43]">
                  لوريم ابسيوم
                </h5>

                <p className="font-medium text-sm md:text-[12px] lg:text-[16px] leading-relaxed md:leading-[23px] text-[#414141]">
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى
                </p>
              </AnimatedSection>
            );
          })}


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
