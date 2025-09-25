import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";

import Image from "next/image";

export default function Questions() {
  return (
    <section className="py-5 md:py-16 px-2 md:px-16 min-h-[628px] bg-[#FFF] md:bg-[#F3F3F3] ">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center p-0 md:p-6 lg:p-8 mx-auto min-h-[500px] md:min-h-[600px] lg:min-h-[664px] bg-[#FDFFFC] rounded-[16px]">

  {/* النص */}
  <AnimatedSection
    variants={slideFromRightBounce}
    className="flex flex-col gap-4 md:gap-6 order-2 lg:order-1"
  >
    <h3 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[50px] lg:leading-[69px] text-right text-[#1A1A1A]">
      لمعرفة المزيد من أخبارنا
    </h3>
    <p className="font-normal text-[14px] leading-[20px] md:font-semibold md:text-[16px] md:leading-[22px] lg:text-[24px] lg:leading-[34px] text-right text-[#1A1A1A] my-5">
      لوريم إيبسومLorem Ipsum هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل
      وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
      ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
      مجهولة برص مجموعة من الأحرف
    </p>

    <form className="flex flex-col gap-3 md:max-w-[80%]">
      <label className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-[#414141]">
        بريدك الإلكتروني
      </label>
      <div className="flex md:flex-row items-stretch md:items-center w-full">
        <input
          type="text"
          placeholder="بريدك الإلكتروني"
          className="flex-1 p-4 h-[57px] w-[85%] bg-[#1A1A1A] border border-[#C2C2C2] rounded-lg md:rounded-r-[8px] rounded-l-none font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] text-white placeholder:text-white"
        />
        <button className="flex justify-center w-[15%] md:w-[10%] items-center p-4  h-[57px] bg-[#BD171D] rounded-lg md:rounded-l-lg rounded-r-none">
          <Image
            src="/assets/icons/arrow-left-white.svg"
            alt=""
            width={18}
            height={18}
          />
        </button>
      </div>
    </form>
  </AnimatedSection>

  {/* الصورة */}
  <AnimatedSection
    variants={slideFromLeftBounce}
    delay={0.2}
    className="flex flex-col gap-4 md:gap-6 order-1 lg:order-2"
  >
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
