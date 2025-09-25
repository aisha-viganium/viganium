import Image from "next/image";
import Accordion from "./Accordion";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";

export default function Questions() {
  return (
    <section className="py-5 md:py-16 px-2 md:px-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <AnimatedSection
          variants={slideFromRightBounce}
          className="flex flex-col gap-6"
        >

          <div className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center px-2 md:px-16">
            <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-[#1A1A1A]">
              الأسئلة الشائعة
            </p>
          </div>
          <Image
            src="/assets/images/Q&A.png"
            alt=""
            width={547}
            height={286}
            className="h-[147px] md:h-auto w-full max-w-[547px] object-contain mx-auto"
          />

          <form className="flex flex-col gap-3 md:max-w-[80%]">
            <label
              className="font-bold text-[20px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[40px] lg:leading-[51px] text-right text-[#414141]"
              htmlFor="question"
            >
              اي السؤال الي عاوز تساله
            </label>
            <div className="flex md:flex-row items-stretch md:items-center w-full">
              <input
                type="text"
                placeholder="أكتب سؤالك هنا"
                className="flex-1 p-4 h-[57px] w-[85%] bg-[#1A1A1A] border border-[#C2C2C2] rounded-lg md:rounded-r-[8px] rounded-l-none font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] text-white placeholder:text-white"
              />
              <button className="flex justify-center w-[15%] md:w-[10%] h-[57px] bg-[#BD171D] rounded-lg md:rounded-l-lg rounded-r-none">
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

        <AnimatedSection
          variants={slideFromLeftBounce}
          className="flex flex-col gap-6"
        >
          <Accordion />
        </AnimatedSection>
      </div>
    </section>
  );
}
