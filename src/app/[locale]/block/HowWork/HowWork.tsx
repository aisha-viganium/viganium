import PoPUpChat from "@/components/PoPUpChat";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";
import WorkSlider from "./WorkSlider";


export default function HowWork({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";

  return (
    <section
      className="bg-[#1A1A1A]  px-2 md:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <AnimatedSection
          variants={slideFromRightBounce}
          className={`lg:col-span-1 flex flex-col px-2 md:px-0`}
        >
          <div
            className={`${
              isArabic ? "border-r-[13px] md:border-r-[36px] pr-2 md:pr-4" : "border-l-[13px] md:border-l-[20px] pl-2 md:pl-4"
            } border-[#F9C751] min-h-[33px] flex items-center`}
          >
            <p
              className={`
                max-w-[796px] 
                ${isArabic ? "text-right" : "text-left"} 
                text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                font-bold 
                text-[#FDFFFC]
              `}
            >
              {t("howWork.title")}
            </p>
          </div>

          <h5
            className={`
              max-w-[260px] md:max-w-[876px]  
              ${isArabic ? "text-right " : "text-left "} 
              text-[16px] md:text-[40px] 2xl:text-[48px] 
              font-bold 
              text-[#FDFFFC] 
              my-2 2xl:mt-[45px]
            `}
          >
            {t("howWork.subtitle")}
          </h5>

          <p
            className={`
              my-3 md:mt-[32px] md:mb-[42px]
              max-w-[359px] md:max-w-[847px] 
              ${isArabic ? "text-right" : "text-left"} 
              text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] 
              leading-[17px] md:leading-[24px] lg:leading-[30px] xl:leading-[34px] 
              font-normal md:font-semibold 
              text-[#FDFFFC]
            `}
          >
            {t("howWork.description")}
          </p>

          <PoPUpChat bg="#FFF" color="#1A1A1A" border="#F6EDE0" />
        </AnimatedSection>

        <AnimatedSection
          variants={slideFromLeftBounce}
          delay={0.2}
          className="lg:col-span-1"
        >
          <WorkSlider />
        </AnimatedSection>
      </div>
    </section>
  );
}
