import WeHear from "@/components/WeHear";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";

export default function Details({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";

  return (
    <section className="py-12 md:py-16 bg-[#F8F8F8]">
      <div className="mx-auto px-2 md:px-16">

        <AnimatedSection className={` ${isArabic ? "border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 text-right" : "border-l-[13px] md:border-l-[20px] border-l-[#F9C751] pl-2 md:pl-4 text-left"}  min-h-[33px] flex items-center`}>
          <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-secondry">
            {t("BlogDetailPage.title")}
          </p>

        </AnimatedSection>
        <AnimatedSection
          className="mx-auto px-2 md:px-16"
          variants={slideFromTopBounce}
        >
          <h5 className={` ${isArabic ? "text-right":"text-left" } font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] lg:leading-[63px]  text-secondry my-6 md:my-8 lg:my-10`}>
            {t("BlogDetailPage.BlogsSection.title")}
          </h5>
          <p className={` ${isArabic ? "text-right":"text-left" } font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-secondry`}>
            {t("BlogDetailPage.BlogsSection.description")}
          </p>
        </AnimatedSection>
                <AnimatedSection
          className="mx-auto px-2 md:px-16"
          variants={slideFromTopBounce}
        >
          <h5 className={` ${isArabic ? "text-right":"text-left" } font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] lg:leading-[63px]  text-secondry my-6 md:my-8 lg:my-10`}>
            {t("BlogDetailPage.BlogsSection.title")}
          </h5>
          <p className={` ${isArabic ? "text-right":"text-left" } font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-secondry`}>
            {t("BlogDetailPage.BlogsSection.description")}
          </p>
        </AnimatedSection>
                <AnimatedSection
          className="mx-auto px-2 md:px-16"
          variants={slideFromTopBounce}
        >
          <h5 className={` ${isArabic ? "text-right":"text-left" } font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] lg:leading-[63px]  text-secondry my-6 md:my-8 lg:my-10`}>
            {t("BlogDetailPage.BlogsSection.title")}
          </h5>
          <p className={` ${isArabic ? "text-right":"text-left" } font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-secondry`}>
            {t("BlogDetailPage.BlogsSection.description")}
          </p>
        </AnimatedSection>
      </div>



      <div
        className=" px-2 md:px-16 py-5"
      >
        <WeHear locale={locale} t={t} />
      </div>
    </section>
  );
}
