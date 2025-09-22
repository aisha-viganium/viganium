import ChatPopup from "@/components/PoPUpChat";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";
import WorkSlider from "./WorkSlider";

export default function HowWork() {
  return (
    <section className="py-16 bg-[#1A1A1A] px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center container mx-auto">
        
        <AnimatedSection variants={slideFromRightBounce} className="lg:col-span-2 flex flex-col px-2 md:px-0">
          <div className="border-r-[20px] border-r-[#F9C751] pr-4">
            <p className="max-w-[796px] text-right text-[28px] md:text-[36px] lg:text-[48px] leading-[42px] md:leading-[52px] lg:leading-[69px] font-bold text-[#FDFFFC]">
              كيف نعمل
            </p>
          </div>

          <h5 className="max-w-[876px]  text-right text-[22px] md:text-[32px] lg:text-[48px] leading-[32px] md:leading-[45px] lg:leading-[69px] font-bold text-[#FDFFFC] my-5">
            رحلتك تبدأ من صوتك , فلا تحرمنا من سماع اخبار مشروعك العظيم
          </h5>

          <p className="my-10 max-w-[847px] text-right text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[34px] font-semibold text-[#FDFFFC]">
            في Viganium، لا نقدّم حلولاً جاهزة — بل نبدأ كل رحلة من مكان واحد فقط: صوت العميل في Viganium، لا نقدّم حلولاً جاهزة — بل نبدأ كل رحلة من مكان واحد فقط: صوت العميل.
          </p>

    
          <ChatPopup />
        </AnimatedSection>

        <AnimatedSection variants={slideFromLeftBounce} delay={0.2} className="lg:col-span-1">
          <WorkSlider />
        </AnimatedSection>
      </div>
    </section>
  );
}
