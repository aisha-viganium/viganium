import WeHear from "@/components/WeHear";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";

export default function Details() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <AnimatedSection
          className="border-r-[12px] sm:border-r-[20px] border-r-[#F9C751] pr-3 sm:pr-4"
          variants={slideFromTopBounce}
        >
          <p className="font-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-[40px] sm:leading-[55px] lg:leading-[69px] text-right text-[#414141]">
            مميزات الخدمة
          </p>
        </AnimatedSection>
        <AnimatedSection
          className="container mx-auto px-4"
          variants={slideFromTopBounce}
        >
          <h5 className="font-bold text-[24px] sm:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[48px] lg:leading-[63px] text-right text-[#1A1A1A] my-6 sm:my-8 lg:my-10">
            عنوان البلوج عنوان البلوج
          </h5>
          <p className="font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] lg:leading-[26px] text-right text-[#1A1A1A]">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
            التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
            برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
            إفتراضي كنموذج عن النص...
          </p>
        </AnimatedSection>
      </div>

      <WeHear />

        <AnimatedSection
          className="container mx-auto px-4"
          variants={slideFromTopBounce}
        >
          <h5 className="font-bold text-[24px] sm:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[48px] lg:leading-[63px] text-right text-[#1A1A1A] my-6 sm:my-8 lg:my-10">
            عنوان البلوج عنوان البلوج
          </h5>
          <p className="font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] lg:leading-[26px] text-right text-[#1A1A1A]">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
            التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
            إفتراضي كنموذج عن النص...
          </p>
        </AnimatedSection>

      <WeHear />
    </section>
  );
}
