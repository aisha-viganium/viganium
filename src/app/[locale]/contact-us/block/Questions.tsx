import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";

import Image from "next/image";

export default function Questions() {
  return (
    <section className="p-6 sm:p-8 lg:p-12 min-h-[628px] bg-[#F3F3F3] my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center p-4 sm:p-6 lg:p-8 mx-auto min-h-[500px] sm:min-h-[600px] lg:min-h-[664px] bg-[#FDFFFC] rounded-[16px]">

        <AnimatedSection variants={slideFromRightBounce} className="flex flex-col gap-4 sm:gap-6">

          <h3 className="font-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[50px] lg:leading-[69px] text-right text-[#1A1A1A]">
            لمعرفة المزيد من أخبارنا
          </h3>
          <p className="font-semibold my-5 text-[16px] sm:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[28px] lg:leading-[34px] text-right text-[#1A1A1A]">
            لوريم إيبسومLorem Ipsum هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
          </p>

          <form>
            <label className="font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[26px] lg:leading-[29px] text-[#414141]">
              بريدك الإلكتروني
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center mt-3 w-full">

              <input
                type="text"
                placeholder="اكتب بريدك الإلكتروني هنا"
                className="w-full sm:flex-1 p-3 sm:p-4 gap-2 h-[50px] sm:h-[57px] bg-[#1A1A1A] border border-[#C2C2C2] rounded-r-[8px] rounded-l-none font-semibold text-[16px] sm:text-[20px] leading-[22px] sm:leading-[29px] text-white placeholder:text-white"
              />

              <button className="flex justify-center items-center p-3 sm:p-4 w-full sm:w-16 h-[50px] sm:h-[57px] bg-[#BD171D] rounded-l-lg">
                <Image src="/assets/icons/arrow-left-white.svg" alt="" width={18} height={18} />
              </button>
            </div>
          </form>
        </AnimatedSection>

        <AnimatedSection variants={slideFromLeftBounce} delay={0.2} className="flex flex-col gap-4 sm:gap-6">
          <Image
            src="/assets/images/news.png"
            alt=""
            width={880}
            height={455}
            className="w-full max-w-[100%] sm:max-w-[880px] h-auto object-contain"
          />
        </AnimatedSection>

      </div>
    </section>
  );
}
