import ReviewSlider from "./ReviewSlider";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";

export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "محمد القحطاني",
      email: "co-founder@rentalgate",
      review: "نص لوريم إيبسوم لدينا أكثر من مجرد ملء فراغ؛ إنه أداة للمصممين لتشكيل أفكارهم وتصوّر المنتج النهائي. من خلال توفير بنية أساسية محايدة، يمكّن المصممين من تجربة تخطيطات مختلفة مع الحفاظ على التركيز على الطباعة والتباعد والترتيب.ء كنت تصمم موقعًا إلكترونيًا، أو كتيبًا، أو واجهة تطبيق، يوفر النص البديل لوحة فارغة يمكن أن تزدهر فيها الإبداع. يتيح لك تصور كيفية تفاعل ",
      rating: 4,
      image: "/assets/images/person1.jpg",
      video: "/assets/images/video.mp4",
    },
    {
      id: 2,
      name: "محمد القحطاني",
      email: "co-founder@rentalgate",
      review: "نص لوريم إيبسوم لدينا أكثر من مجرد ملء فراغ؛ إنه أداة للمصممين لتشكيل أفكارهم وتصوّر المنتج النهائي. من خلال توفير بنية أساسية محايدة، يمكّن المصممين من تجربة تخطيطات مختلفة مع الحفاظ على التركيز على الطباعة والتباعد والترتيب.ء كنت تصمم موقعًا إلكترونيًا، أو كتيبًا، أو واجهة تطبيق، يوفر النص البديل لوحة فارغة يمكن أن تزدهر فيها الإبداع. يتيح لك تصور كيفية تفاعل ",

      rating: 4,
      image: "/assets/images/person1.jpg",
      video: "/assets/images/video.mp4",
    },
    {
      id: 3,
      name: "محمد القحطاني",
      email: "co-founder@rentalgate",
      review: "نص لوريم إيبسوم لدينا أكثر من مجرد ملء فراغ؛ إنه أداة للمصممين لتشكيل أفكارهم وتصوّر المنتج النهائي. من خلال توفير بنية أساسية محايدة، يمكّن المصممين من تجربة تخطيطات مختلفة مع الحفاظ على التركيز على الطباعة والتباعد والترتيب.ء كنت تصمم موقعًا إلكترونيًا، أو كتيبًا، أو واجهة تطبيق، يوفر النص البديل لوحة فارغة يمكن أن تزدهر فيها الإبداع. يتيح لك تصور كيفية تفاعل ",
      rating: 4,
      image: "/assets/images/person1.jpg",
      video: "/assets/images/video.mp4",
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center  container mx-auto px-2 md:px-0">
        <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-[#1A1A1A]">
          شركاء النجاح
        </p>
      </div>

      <ReviewSlider reviews={reviews} />
    </section>
  );
}
