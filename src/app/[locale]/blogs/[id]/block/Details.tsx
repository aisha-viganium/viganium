import WeHear from "@/components/WeHear";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";

export default function Details() {
  return (
    <section className="py-12 md:py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-2 md:px-5">

        <AnimatedSection className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center">
          <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-[#1A1A1A]">
            المقالات
          </p>

        </AnimatedSection>
        <AnimatedSection
          className="container mx-auto px-2 md:px-5"
          variants={slideFromTopBounce}
        >
          <h5 className="font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] lg:leading-[63px] text-right text-[#1A1A1A] my-6 md:my-8 lg:my-10">
            عنوان البلوج عنوان البلوج
          </h5>
          <p className="font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-right text-[#1A1A1A]">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
            التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
            برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
            إفتراضي كنموذج عن النص...
          </p>
        </AnimatedSection>
      </div>
        <div
          className="container mx-auto px-2 md:px-5"
        >
      <WeHear />
        </div>

      <AnimatedSection
        className="container mx-auto px-2 md:px-5"
        variants={slideFromTopBounce}
      >
        <h5 className="font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] lg:leading-[63px] text-right text-[#1A1A1A] my-6 md:my-8 lg:my-10">
          عنوان البلوج عنوان البلوج
        </h5>
        <p className="font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-right text-[#1A1A1A]">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          إفتراضي كنموذج عن النص...
        </p>
      </AnimatedSection>
        <div
          className="container mx-auto px-2 md:px-5"
        >
      <WeHear />
      </div>
    </section>
  );
}
