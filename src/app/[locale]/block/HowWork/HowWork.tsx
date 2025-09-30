import PoPUpChat from "@/components/PoPUpChat";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";
import WorkSlider from "./WorkSlider";


export default function HowWork({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";
  const cards =  [
      {
        "id": 1,
        "title": "الإستماع",
        "description": "نستمع باهتمام لفهم احتياجات عملائنا قبل أي خطوة.",
        "image": "/assets/images/work/hear.png"
      },
      {
        "id": 2,
        "title": "البحث",
        "description": "نقوم بالبحث والتحليل لاكتشاف أفضل الحلول الممكنة.",
        "image": "/assets/images/work/search.png"
      },
      {
        "id": 3,
        "title": "التحليل",
        "description": "نحلل البيانات والمعطيات للوصول إلى قرارات دقيقة.",
        "image": "/assets/images/work/analysing.png"
      },
      {
        "id": 4,
        "title": "المناقشة",
        "description": "نشارك الأفكار ونتبادل وجهات النظر مع فريقنا وعملائنا.",
        "image": "/assets/images/work/discussion.png"
      },
      {
        "id": 5,
        "title": "التنفيذ",
        "description": "نحوّل الخطط إلى واقع عملي بخطوات مدروسة.",
        "image": "/assets/images/work/working.png"
      },
      {
        "id": 6,
        "title": "الإختبار",
        "description": "نختبر النتائج لضمان الجودة وتحقيق النجاح.",
        "image": "/assets/images/work/test.png"
      }
    ]
  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#1A1A1A] py-5 md:py-16 px-2 md:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <AnimatedSection
          variants={slideFromRightBounce}
          className={`lg:col-span-1 flex flex-col px-2 md:px-0`}
        >
          <div
            className={`${isArabic ? "border-r-[13px] md:border-r-[20px] pr-2 md:pr-4" : "border-l-[13px] md:border-l-[20px] pl-2 md:pl-4"
              } border-[#F9C751] min-h-[33px] flex items-center`}
          >
            <p
              className={`
                max-w-[796px] 
                ${isArabic ? "text-right" : "text-left"} 
                text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                font-bold 
                text-[#FDFFFC]
              `}
            >
              {t("howWork.title")}
            </p>
          </div>

          <h5
            className={`
              max-w-[260px] md:max-w-[876px]  
              ${isArabic ? "text-right xl:leading-[69px] " : "text-left xl:leading-[109px] "} 
              text-[16px] md:text-[40px] 2xl:text-[48px] 
              leading-[23px] md:leading-[32px] 2xl:leading-[45px] 
              font-bold 
              text-[#FDFFFC] 
              my-2 2xl:my-5
            `}
          >
            {t("howWork.subtitle")}
          </h5>

          <p
            className={`
              my-3 md:my-10 
              max-w-[359px] md:max-w-[847px] 
              ${isArabic ? "text-right" : "text-left"} 
              text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] 
              leading-[17px] md:leading-[24px] lg:leading-[30px] xl:leading-[34px] 
              font-normal md:font-semibold 
              text-[#FDFFFC]
            `}
          >
            {t("howWork.description")}
          </p>

          <PoPUpChat bg="#FFF" color="#1A1A1A" border="#F6EDE0" />
        </AnimatedSection>

        <AnimatedSection
          variants={slideFromLeftBounce}
          delay={0.2}
          className="lg:col-span-1"
        >
          <WorkSlider locale={locale} cards={cards} />
        </AnimatedSection>
      </div>
    </section>
  );
}
