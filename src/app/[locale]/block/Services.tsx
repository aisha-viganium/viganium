import Image from "next/image";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";
import Link from "next/link";

export default function Services({
  locale,
  t,
}: {
  locale: string;
  t: (key: string) => string;
}) {
  const isArabic = locale === "ar";

  const services = [
    {
      id: 1,
      title: t("Services.solutionTitle"),
      description: t("Services.solutionDescription"),
      image: "/assets/images/service1.png",
      tag: 1,
    },
    {
      id: 2,
      title: t("Services.itTitle"),
      description: t("Services.itDescription"),
      image: "/assets/images/service2.png",
      tag: 2,
    },
    {
      id: 3,
      title: t("Services.marketingTitle"),
      description: t("Services.marketingDescription"),
      image: "/assets/images/service3.png",
      tag: 3,
    },
  ];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="mx-auto py-5 md:py-16 px-2 md:px-16 bg-white"
    >
      <AnimatedSection
        variants={slideFromTopBounce}
        className={`mb-5 min-h-[33px] flex items-center 
          ${
            isArabic
              ? "border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4"
              : "border-l-[13px] md:border-l-[20px] border-l-[#F9C751] pl-2 md:pl-4"
          }`}
      >
        <p
          className={`max-w-[796px] ${
            isArabic ? "text-right" : "text-left"
          } text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
          leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
          font-bold text-secondry`}
        >
          {t("Services.title")}
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
                pathname: `/${locale}/services`,
                query: { filter: service.tag.toString() },
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
                <h5
                  className={`font-bold text-secondry my-3 md:my-5 
                    text-[16px] leading-[23px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[34px] 
                    ${isArabic ? "text-right" : "text-left"}`}
                >
                  {service.title}
                </h5>
                <p
                  className={`text-secondry font-[Brando Arabic] font-normal 
                    text-[14px] leading-[20px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[23px] 
                    ${isArabic ? "text-right" : "text-left"}`}
                >
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
