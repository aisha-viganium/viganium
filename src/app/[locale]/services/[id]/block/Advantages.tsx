import Image from "next/image";
import AnimatedSection, { slideFromRightBounce, slideFromTopBounce } from "@/animation/AnimatedSection";

export default function Advantages() {
  return (
    <section className="py-5 md:py-16 px-2 md:px-16">

      <AnimatedSection variants={slideFromTopBounce} className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center px-2 md:px-16">
        <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-secondry">
          مميزات الخدمة
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-3 md:mt-16">
        <AnimatedSection variants={slideFromRightBounce} className="col-span-1">

          <h3 className="flex flex-wrap gap-3 md:gap-5 items-center font-bold text-[16px] md:text-2xl lg:text-[32px] leading-tight lg:leading-[46px] text-center text-secondry">
            لدينا ميزات تكنولوجية رائعة
            <span className="font-bold text-center text-[#F8E8E8] px-3 flex justify-center items-center h-[30px] md:h-[46px] bg-[#BD171D]">
              لدينا
            </span>
          </h3>

          <h5 className="font-bold 
               text-[20px] md:text-[24px] lg:text-[40px] 
               leading-[33px] md:leading-[40px] lg:leading-[63px] 
               text-right text-secondry 
               my-6 md:my-8 lg:my-10">
            لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي بمعنى أن الغاية هي
            الشكل وليس المحتوى
          </h5>

          <p className="font-medium 
               text-[14px] md:text-[16px] 
               leading-[26px] 
               text-right text-secondry">
            لوريم إيبسومLorem Ipsum هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل
            وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
            ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
            مجهولة برص مجموعة من الأحرفلوريم إيبسومLorem Ipsum هو ببساطة نص
            شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات
            المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ
            القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => {
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
                className="flex flex-col items-start text-right"
              >
                <Image
                  src="/assets/images/ICON-BACKGROUND.png"
                  alt="Advantages"
                  width={58}
                  height={58}
                  className="w-[48px] md:w-[58px] h-[48px] md:h-[58px] rounded-tl-[8px]"
                />

                <h5 className="font-semibold w-fit text-lg md:text-xl lg:text-[24px] leading-tight lg:leading-[34px] text-secondry-200 py-2 md:py-3 my-3 md:my-5 border-b-4 border-b-[#C83E43]">
                  لوريم ابسيوم
                </h5>

                <p className="font-medium text-sm md:text-[12px] lg:text-[16px] leading-relaxed md:leading-[23px] text-secondry-200">
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى
                </p>
              </AnimatedSection>
            );
          })}


        </div>
      </div>
    </section>
  );
}
