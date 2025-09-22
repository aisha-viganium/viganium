import Image from "next/image";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";

export default function CustomSection() {
  return (
    <section className="container mx-auto py-16 px-2 md:px-5 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        <AnimatedSection variants={slideFromRightBounce}>
          <div className="flex flex-col gap-6">
            <div className="border-r-[20px] border-r-[#F9C751] pr-4">
              <span className="font-semibold text-[24px] leading-[34px] text-right text-[#F9C751] flex items-center gap-2">
                <span> قصة حياتنا</span>
                <Image
                  src="/assets/icons/arrow-yellow.svg"
                  alt="line"
                  width={15}
                  height={10}
                  className="w-[15px] h-auto"
                />
              </span>
              <p className="max-w-[796px] font-bold text-[24px] md:text-[36px] leading-[42px] md:leading-[51px] text-right text-[#1A1A1A]">
                في Viganium، نحن أكثر من مجرد شركة تقنية — نحن شغف يتحوّل إلى حلول، وابتكار يُترجم إلى قيمة.
              </p>
            </div>
            <Image
              src="/assets/images/story-img.png"
              alt=""
              width={526}
              height={300}
              className="h-[320px] md:h-[526px] rounded-[16px] w-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection variants={slideFromLeftBounce} delay={0.2}>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/assets/images/viganium-story.png"
                alt="1"
                width={350}
                height={200}
                className="object-cover w-full h-[250px] md:h-[350px] rounded-[16px]"
              />
              <Image
                src="/assets/images/robot-story.png"
                alt="2"
                width={350}
                height={200}
                className="object-cover w-full h-[250px] md:h-[350px] rounded-[16px]"
              />
            </div>

            <p className="max-w-[864px] font-semibold text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-right text-[#414141]">
              نؤمن بأن الابتكار هو القوة الدافعة لكل تطوّر، لذا نسعى دائماً لتجاوز المألوف وتقديم حلول غير تقليدية تصنع الفرق.
              <br />
              نلتزم بأعلى معايير الجودة والدقة في كل مرحلة من مراحل العمل، ونحرص على تسليم مشاريعنا بموثوقية واستدامة.
              <br />
              نمارس عملنا بكل وضوح ومصداقية، ونبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة المتبادلة.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex">
                <Image
                  src="/assets/images/person1.jpg"
                  alt="1"
                  width={92}
                  height={92}
                  className="w-[70px] md:w-[91.84px] h-[70px] md:h-[91.84px] border border-[#FDFFFC] rounded-full ml-[-45px]"
                />
                <Image
                  src="/assets/images/person2.jpg"
                  alt="2"
                  width={92}
                  height={92}
                  className="w-[70px] md:w-[91.84px] h-[70px] md:h-[91.84px] border border-[#FDFFFC] rounded-full ml-[-45px]"
                />
                <Image
                  src="/assets/images/person3.jpg"
                  alt="3"
                  width={92}
                  height={92}
                  className="w-[70px] md:w-[91.84px] h-[70px] md:h-[91.84px] border border-[#FDFFFC] rounded-full "
                />
              </div>

              <button className="w-[70px] md:w-[91.84px] h-[70px] md:h-[91.84px] border border-[#FDFFFC] rounded-full">
                <Image
                  src="/assets/icons/video-palyer.svg"
                  alt="3"
                  width={92}
                  height={92}
                  className="w-[70px] md:w-[91.84px] h-[70px] md:h-[91.84px]"
                />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
