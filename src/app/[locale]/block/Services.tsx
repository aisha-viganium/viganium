import Image from "next/image";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "الحلول البرمجية",
      description:
        "باعتبارنا شركة برمجة تطبيقات في السعودية، نُدرك احتياجات السوق المحلي ونقدّم حلول برمجية مرنة ومخصصة، تدعم سير العمل والتحوّل الرقمي بكفاءة عالية. في Viganium، نؤمن أن الأنظمة البرمجية القوية تُبنى خصيصًا لتحقيق أهداف محددة بدقة.",
      image: "/assets/images/service1.png",
      tag: "MobileDevelopment", 
    },
    {
      id: 2,
      title: "خدمات IT",
      description:
        "نحن شركة برمجة تطبيقات في السعودية متخصصة في تصميم تطبيقات موبايل احترافية، توفّر تجربة سلسة وفعالة على منصّات iOS وAndroid، وتدعم أهداف الأعمال بمختلف أنواعها. في Viganium، نقدّم حلول ذكية تجمع بين الأداء العالي والتصميم الجذّاب.",
      image: "/assets/images/service2.png",
      tag: "WebDevelopment",
    },
    {
      id: 3,
      title: "التسويق",
      description:
        "باعتبارنا شركة برمجة تطبيقات في السعودية، نُدرك احتياجات السوق المحلي ونقدّم حلول برمجية مرنة ومخصصة، تدعم سير العمل والتحوّل الرقمي بكفاءة عالية.في Viganium، نؤمن أن الأنظمة البرمجية القوية تُبنى خصيصًا لتحقيق أهداف محددة بدقة.",
      image: "/assets/images/service3.png",
      tag: "DigitalMarketing",
    },
  ];

  return (
    <section className="mx-auto py-5 md:py-16 px-2 md:px-16 bg-white">
      <AnimatedSection
        variants={slideFromTopBounce}
        className="mb-5 border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center"
      >
        <p
          className="max-w-[796px] 
                      text-right 
                      text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                      leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                      font-bold 
                      text-[#1A1A1A]"
        >
          الخدمات
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start px-2 md:px-0">
        {services.map((service, index) => (
          <AnimatedSection
            key={service.id}
            variants={slideFromTopBounce}
            delay={0.1 * (index + 1)}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={{
                pathname: "/services",
                query: { filter: service.tag }, // هنا بالإنجليزي
              }}
            >
              <div className="flex flex-col cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={526}
                  height={341}
                  className="w-full h-[213px] md:h-[280px] lg:h-auto rounded-[8px] md:rounded-[16px] object-cover"
                />
                <h5 className="text-right font-bold text-[#1A1A1A] my-3 md:my-5 text-[16px] leading-[23px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[34px]">
                  {service.title}
                </h5>
                <p className="text-right text-[#1A1A1A] font-[Brando Arabic] font-normal text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[23px]">
                  {service.description}
                </p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
