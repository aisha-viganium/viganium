import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";

import Image from "next/image";

export default function Questions() {
  return (
    <section className="p-6 md:p-8 lg:p-12 min-h-[628px] bg-[#F3F3F3] my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center p-4 md:p-6 lg:p-8 mx-auto min-h-[500px] md:min-h-[600px] lg:min-h-[664px] bg-[#FDFFFC] rounded-[16px]">

        <AnimatedSection variants={slideFromRightBounce} className="flex flex-col gap-4 md:gap-6">

          <h3 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[50px] lg:leading-[69px] text-right text-[#1A1A1A]">
            لمعرفة المزيد من أخبارنا
          </h3>
          <p className="font-semibold my-5 text-[16px] md:text-[20px] lg:text-[24px] leading-[22px] md:leading-[28px] lg:leading-[34px] text-right text-[#1A1A1A]">
            لوريم إيبسومLorem Ipsum هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
          </p>

          <form>
            <label className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-[#414141]">
              بريدك الإلكتروني
            </label>
            <div className="flex flex-col md:flex-row items-stretch md:items-center mt-3 w-full">

              <input
                type="text"
                placeholder="اكتب بريدك الإلكتروني هنا"
                className="w-full md:flex-1 p-3 md:p-4 gap-2 h-[50px] md:h-[57px] bg-[#1A1A1A] border border-[#C2C2C2] rounded-r-[8px] rounded-l-none font-semibold text-[16px] md:text-[20px] leading-[22px] md:leading-[29px] text-white placeholder:text-white"
              />

              <button className="flex justify-center items-center p-3 md:p-4 w-full md:w-16 h-[50px] md:h-[57px] bg-[#BD171D] rounded-l-lg">
                <Image src="/assets/icons/arrow-left-white.svg" alt="" width={18} height={18} />
              </button>
            </div>
          </form>
        </AnimatedSection>

        <AnimatedSection variants={slideFromLeftBounce} delay={0.2} className="flex flex-col gap-4 md:gap-6">
          <Image
            src="/assets/images/news.png"
            alt=""
            width={880}
            height={455}
            className="w-full max-w-[100%] md:max-w-[880px] h-auto object-contain"
          />
        </AnimatedSection>

      </div>
    </section>
  );
}
