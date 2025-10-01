
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";
import services from "@/data/servicesData";
import ServicesFilter from "./ServicesFilter";
import WeHear from "@/components/WeHear";

export default function Services({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";
  const servicesData = services[isArabic ? "ar" : "en"];

  return (
    <>
      <section className="py-5 md:py-16 px-2 md:px-16 bg-[#1A1A1A]">
        <div>
          <AnimatedSection variants={slideFromTopBounce} className={` ${isArabic?"border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4":"border-l-[13px] md:border-l-[20px] border-l-[#F9C751] pl-2 md:pl-4"}  min-h-[33px]`}>
            <p className={`
              max-w-[796px] 
               
              text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
              leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
              font-bold 
              text-white
              ${isArabic?"text-right":"text-left"}`}>
              {t("ServicesPage.ServicesSection.title")}
            </p>
          </AnimatedSection>

          <ServicesFilter services={servicesData} locale={locale} />
        </div>
      </section>
      <WeHear locale={locale} t={t}/>

    </>
  );
}
