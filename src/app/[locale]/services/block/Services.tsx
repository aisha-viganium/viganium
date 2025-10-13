
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


          <ServicesFilter services={servicesData} locale={locale} />
        </div>
      </section>
      <WeHear locale={locale} t={t} bg="#FFF"/>

    </>
  );
}
