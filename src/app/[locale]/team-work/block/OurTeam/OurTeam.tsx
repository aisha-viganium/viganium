import Image from "next/image";
import CardsDiv from "./CardsDiv";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce, slideFromTopBounce } from "@/animation/AnimatedSection";

export default function OurTeam({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";

  return (
    <section className="py-4 md:py-8 px-2 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center">
        <AnimatedSection
          className="col-span-1 pt-[16px] md:pt-[60px]"
          variants={slideFromRightBounce}
        >
          <div>
            <span className="font-semibold font-brando-semibold text-[14px] leading-[20px] md:text-[24px] md:leading-[34px] text-right text-[#F9C751] flex items-center gap-2">
              <span> {t("TeamWorkPage.OurTeamSection.subtitle")}</span>
              <Image
                src={isArabic ? "/assets/icons/arrow-yellow.svg" : "/assets/icons/arrow-yellow-en.svg"}
                alt="line"
                width={10}
                height={10}
                className="w-[15px] h-[12px] md:h-auto"
              />
            </span>

            <h3 className={`${isArabic ? "text-right" : "text-left"} font-bold font-brando-bold text-[20px] md:text-[36px] lg:text-[48px] leading-[29px] md:leading-[46px] lg:leading-[69px]  text-secondry`}>
              {t("TeamWorkPage.OurTeamSection.title")}
            </h3>

            <p className={`${isArabic ? "text-right" : "text-left"} font-normal text-[14px] leading-[20px] md:font-semibold font-brando-semibold md:text-[18px] md:leading-[28px] lg:text-[24px] lg:leading-[34px] text-secondry my-6 md:my-8`}>
              {t("TeamWorkPage.OurTeamSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-2 md:mt-10 gap-6">
            {[...Array(4)].map((_, i) => {
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
                  className="flex gap-1 md:gap-5 items-center text-right "
                >
                  <Image
                    src="/assets/images/ICON-BACKGROUND.png"
                    alt="Advantages"
                    width={100}
                    height={100}
                    className="w-[48px] md:w-[100px] h-[48px] md:h-[100px] rounded-tl-[8px]"
                  />

                  <h5 className="font-semibold font-brando-semibold w-fit text-[14px] md:text-xl lg:text-[24px] leading-tight lg:leading-[34px] text-secondry-200 pb-1 my-3">
                    {t("TeamWorkPage.OurTeamSection.items." + (i))}
                  </h5>


                </AnimatedSection>
              );
            })}


          </div>
        </AnimatedSection>
        <AnimatedSection
          className="col-span-1 mt-10 lg:mt-0"
          variants={slideFromLeftBounce}
        >
          <CardsDiv locale={locale} t={t} />
        </AnimatedSection>
      </div>
    </section>
  );
}
