
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";
import services from "@/data/servicesData";
import ServicesFilter from "./ServicesFilter"; 
import WeHear from "@/components/WeHear";

export default function Services() {
  return (
    <>
    <section className="py-5 md:py-16 px-2 md:px-16 bg-[#1A1A1A]">
      <div>
        <AnimatedSection variants={slideFromTopBounce} className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px]">
          <p className=" max-w-[796px] 
              text-right 
              text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
              leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
              font-bold 
              text-white">
            الخدمات
          </p>
        </AnimatedSection>

        <ServicesFilter services={services} />
      </div>
    </section>
          <WeHear/>

    </>
  );
}
