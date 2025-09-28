import PoPUpChat from "@/components/PoPUpChat";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";
import WorkSlider from "./WorkSlider";

export default function HowWork() {
  return (
    <section className=" bg-[#1A1A1A]  py-5 md:py-16 px-2 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <AnimatedSection variants={slideFromRightBounce} className="lg:col-span-1 flex flex-col px-2 md:px-0">
          <div className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center">
            <p
              className="
                        max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-[#FDFFFC]
                      "
            >
              كيف نعمل
            </p>
          </div>
          <h5
            className="
                      max-w-[260px] md:max-w-[876px]  
                      text-right 
                      text-[16px] md:text-[40px] 2xl:text-[48px] 
                      leading-[23px] md:leading-[32px] 2xl:leading-[45px] xl:leading-[69px] 
                      font-bold 
                      text-[#FDFFFC] 
                      my-2
                      2xl:my-5
                    "
          >            رحلتك تبدأ من صوتك , فلا تحرمنا من سماع اخبار مشروعك العظيم
          </h5>
          <p
            className="
                        my-3 md:my-10 
                        max-w-[359px] md:max-w-[847px] 
                        text-right 
                        text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] 
                        leading-[17px] md:leading-[24px] lg:leading-[30px] xl:leading-[34px] 
                        font-normal md:font-semibold 
                        text-[#FDFFFC]
                      "
          >            في Viganium، لا نقدّم حلولاً جاهزة — بل نبدأ كل رحلة من مكان واحد فقط: صوت العميل في Viganium، لا نقدّم حلولاً جاهزة — بل نبدأ كل رحلة من مكان واحد فقط: صوت العميل.
          </p>
          <PoPUpChat bg="#FFF" color="#1A1A1A" border="#F6EDE0" />
        </AnimatedSection>
        <AnimatedSection variants={slideFromLeftBounce} delay={0.2} className="lg:col-span-1">
          <WorkSlider />
        </AnimatedSection>
      </div>
    </section>
  );
}
