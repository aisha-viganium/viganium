import Image from "next/image";
import Accordion from "./Accordion";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";
import AddQuestion from "./AddQuestion";

export default function Questions({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="py-5 md:py-16 px-2 md:px-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <AnimatedSection
          variants={slideFromRightBounce}
          className="flex flex-col gap-6"
        >
          <div
            className={`
              
               min-h-[33px] flex items-center px-2 md:px-16
              ${isArabic ? "text-right border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4" : "text-left border-l-[13px] md:border-l-[20px] border-l-[#F9C751] pl-2 md:pl-4"}
            `}
          >
            <p
              className="
                max-w-[796px] 
                text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                font-bold text-secondry
              "
            >
              {t("ServiceDetailPage.Questions.title")}
            </p>
          </div>

          <Image
            src="/assets/images/Q&A.png"
            alt="Q&A"
            width={547}
            height={286}
            className="h-[147px] md:h-auto w-full max-w-[547px] object-contain mx-auto"
          />

          <AddQuestion />
        </AnimatedSection>

        <AnimatedSection
          variants={slideFromLeftBounce}
          className="flex flex-col gap-6"
        >
          <Accordion />
        </AnimatedSection>
      </div>
    </section>
  );
}
