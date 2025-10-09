import ReviewSlider from "./ReviewSlider";

export default function ReviewSection({
  locale,
  t,
}: {
  locale: string;
  t: (key: string) => string;
}) {
  const isArabic = locale === "ar";

  const reviews = [
    {
      id: 1,
      name: "محمد القحطاني",
      email: "co-founder@rentalgate",
      review: t("ReviewSection.review1"),
      rating: 4,
      image: "/assets/images/person1.jpg",
      video: "https://viganium.com/videos/1.mp4",
      time: t("ReviewSection.time1")
    },
    {
      id: 2,
      name: "محمد القحطاني",
      email: "co-founder@rentalgate",
      review: t("ReviewSection.review2"),
      rating: 4,
      image: "/assets/images/person1.jpg",
      video: "https://viganium.com/videos/1.mp4",
      time: t("ReviewSection.time2")

    },
    {
      id: 3,
      name: "محمد القحطاني",
      email: "co-founder@rentalgate",
      review: t("ReviewSection.review3"),
      rating: 4,
      image: "/assets/images/person1.jpg",
      video: "https://viganium.com/videos/1.mp4",
      time: t("ReviewSection.time3")

    },
  ];

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="overflow-hidden">
      <div className="py-5 md:py-16 px-2 md:px-16">
        <div
          className={` min-h-[33px] flex items-center px-2 md:px-0 ${isArabic ? "border-r-[13px] md:border-r-[36px] border-r-[#F9C751] pr-2 md:pr-4":"border-l-[13px] md:border-l-[20px] border-l-[#F9C751] pl-2 md:pl-4"}`}

        >
          <p
            className={`max-w-[796px] 
                        ${isArabic ? "text-right" : "text-left"} 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold text-secondry`}
          >
            {t("ReviewSection.title")}
          </p>
        </div>
      </div>

      <ReviewSlider reviews={reviews} locale={locale}  />
    </section>
  );
}
