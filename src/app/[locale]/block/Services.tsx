import Image from "next/image";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";

export default function Services() {
  return (
    <section className="container mx-auto py-5 md:py-16 px-2 md:px-5 bg-white">
      <AnimatedSection variants={slideFromTopBounce} className="mb-5 border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center">
        <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-[#1A1A1A]">
          الخدمات
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start px-2 md:px-0">

        <AnimatedSection variants={slideFromTopBounce} delay={0.1} transition={{ duration: 0.1 }}
        >
          <div className="flex flex-col">
            <Image
              src="/assets/images/service1.png"
              alt="service"
              width={526}
              height={341}
              className="w-full h-[213px] md:h-[280px] lg:h-[341px] rounded-[8px] md:rounded-[16px] object-cover"
            />
            <h5
              className="
                        text-right font-bold text-[#1A1A1A] 
                        my-3 md:my-5
                        text-[16px] leading-[23px]         
                        md:text-[22px] md:leading-[32px]  
                        lg:text-[24px] lg:leading-[34px]   
                      "
            >              الحلول البرمجية
            </h5>
            <p
              className="
                        text-right text-[#1A1A1A] 
                        font-[Brando Arabic] font-normal 
                        text-[14px] leading-[20px]              
                        md:text-[15px] md:leading-[23px]     
                        lg:text-[16px] lg:leading-[23px]      
                      "
            >              باعتبارنا شركة برمجة تطبيقات في السعودية، نُدرك احتياجات السوق المحلي ونقدّم حلول برمجية مرنة ومخصصة، تدعم سير العمل والتحوّل الرقمي بكفاءة عالية.
              في Viganium، نؤمن أن الأنظمة البرمجية القوية تُبنى خصيصًا لتحقيق أهداف محددة بدقة.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variants={slideFromTopBounce} delay={0.3} transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col">
            <Image
              src="/assets/images/service2.png"
              alt="service"
              width={526}
              height={341}
              className="w-full h-[213px] md:h-[280px] lg:h-[341px] rounded-[8px] md:rounded-[16px] object-cover"
            />
            <h5 className="text-right text-[20px] md:text-[22px] lg:text-[24px] leading-[30px] md:leading-[32px] lg:leading-[34px] font-bold text-[#1A1A1A] my-3 md:my-5">
              خدمات IT
            </h5>
            <p className="text-right text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[23px] font-medium text-[#1A1A1A]">
              نحن شركة برمجة تطبيقات في السعودية متخصصة في تصميم تطبيقات موبايل احترافية، توفّر تجربة سلسة وفعالة على منصّات iOS وAndroid، وتدعم أهداف الأعمال بمختلف أنواعها.
              في Viganium، نقدّم حلول ذكية تجمع بين الأداء العالي والتصميم الجذّاب.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variants={slideFromTopBounce} delay={0.5} transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            <Image
              src="/assets/images/service3.png"
              alt="service"
              width={526}
              height={341}
              className="w-full h-[213px] md:h-[280px] lg:h-[341px] rounded-[8px] md:rounded-[16px] object-cover"
            />
            <h5 className="text-right text-[20px] md:text-[22px] lg:text-[24px] leading-[30px] md:leading-[32px] lg:leading-[34px] font-bold text-[#1A1A1A] my-3 md:my-5">
              التسويق
            </h5>
            <p className="text-right text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[23px] font-medium text-[#1A1A1A]">
              باعتبارنا شركة برمجة تطبيقات في السعودية، نُدرك احتياجات السوق المحلي ونقدّم حلول برمجية مرنة ومخصصة، تدعم سير العمل والتحوّل الرقمي بكفاءة عالية.
              في Viganium، نؤمن أن الأنظمة البرمجية القوية تُبنى خصيصًا لتحقيق أهداف محددة بدقة.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
