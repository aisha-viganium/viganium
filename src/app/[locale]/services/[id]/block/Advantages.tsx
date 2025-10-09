import Image from "next/image";
import AnimatedSection, { slideFromRightBounce, slideFromTopBounce } from "@/animation/AnimatedSection";
export interface Service {
  id: number;
  serviceDescriptionTitle: string;
  serviceDescriptionParagraph: string;
  list: {
    title: string;
    description: string;
  }[];
}
export default function Advantages({ service, locale, t }: { service: Service; locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="py-5 md:py-16 px-2 md:px-16"
    >
      <AnimatedSection
        variants={slideFromTopBounce}
        className={`
          ${isArabic ? "font-bold text-[#414141] font-brando-bold border-r-[13px] md:border-r-[36px] border-r-[#F9C751] pr-2 md:pr-8 text-right" : "border-l-[13px] md:border-l-[20px] border-l-[#F9C751] pl-2 md:pl-8 text-left"} 
          min-h-[33px] md:minh-[69px] flex items-center px-2 md:px-16
        `}
      >
        <p
          className="
            max-w-[796px] 
            text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
            leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
            font-bold text-[#414141] font-brando-bold
          "
        >
          {t("ServiceDetailPage.Advantages.title")}
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-3 md:mt-16">
        <AnimatedSection variants={slideFromRightBounce} className="col-span-1">

          <h3
            className={`
              flex flex-wrap gap-3 md:gap-5 items-center font-bold  font-brando-bold
              text-[16px] md:text-2xl lg:text-[32px] 
              leading-tight lg:leading-[46px] text-secondry
              justify-start
              ${isArabic ? "text-right " : "text-left"}
            `}
          >
            {t("ServiceDetailPage.Advantages.subTitle")}
            <span className="font-bold text-center text-[#F8E8E8] px-3 flex justify-center items-center h-[30px] md:h-[46px] bg-[#BD171D]">
              {t("ServiceDetailPage.Advantages.highlight")}
            </span>
          </h3>

          <h5
            className={`
              font-bold font-brando-bold
              text-[20px] md:text-[24px] lg:text-[40px] 
              leading-[33px] md:leading-[40px] lg:leading-[63px] 
              text-secondry my-6 md:my-8 lg:my-10
              max-w-[906px]
              ${isArabic ? "text-right" : "text-left"}
            `}
          >
            {service.serviceDescriptionTitle}

          </h5>

          <p
            className={`
              font-medium 
              text-[14px] md:text-[16px] 
              leading-[26px] 
              text-secondry
              max-w-[864px]
              ${isArabic ? "text-right" : "text-left"}
            `}
          >
            {service.serviceDescriptionParagraph}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.list.map((item, i) => {
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
                className={`flex flex-col items-start ${isArabic ? "text-right" : "text-left"}`}
              >
                <Image
                  src="/assets/images/ICON-BACKGROUND.png"
                  alt="Advantages"
                  width={58}
                  height={58}
                  className="w-[48px] md:w-[58px] h-[48px] md:h-[58px] rounded-tl-[8px]"
                />

                <h5
                  className="
                    font-semibold font-brando-semibold w-fit text-lg md:text-xl lg:text-[24px] 
                    leading-tight lg:leading-[34px] text-secondry-200 
                    pb-2 md:pb-4 mt-2 md:mt-4 
                    border-b-4 border-b-[#C83E43]
                  "
                >
                  {item.title}
                </h5>

                <p className="font-medium text-sm md:text-[12px] lg:text-[16px] mt-4 leading-relaxed md:leading-[23px] text-secondry-200">
                  {item.description}

                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
