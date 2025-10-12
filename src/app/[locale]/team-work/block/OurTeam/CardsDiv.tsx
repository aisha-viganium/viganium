import Image from "next/image";

export default function CardsDiv({ locale, t }: { locale: string; t: (key: string) => string }) {
  const cards = [
    {
      id: 1,
      img: "/assets/images/team/environment.png",
      title_ar: "البيئه",
      title_en: "environment"
    },
    {
      id: 2,
      img: "/assets/images/team/thoughts.png",
      title_ar: " الافكار",
      title_en: "thoughts"
    },
    {
      id: 3,
      img: "/assets/images/team/collebration.png",
      title_ar: "التعاون وروح الفريق",
      title_en: "collebration"
    },
    {
      id: 4,
      img: "/assets/images/team/developing.png",
      title_ar: "التطوير",
      title_en: "developing"
    },
  ];
  const isArabic = locale === "ar";


  const positions = [
    { card: "top-[20%] left-[10%] md:top-6 md:left-10 2xl:left-40 w-[154px] h-[190px] md:w-[254px] md:h-[290px]" },
    { card: "top-[25%] right-[10%] md:top-20 md:right-1 2xl:right-50 w-[113px] h-[142px] md:w-[213px] md:h-[242px]" },
    { card: "bottom-[25%] left-[10%] md:bottom-5 2xl:bottom-20 md:left-10 2xl:left-45 w-[113px] h-[142px] md:w-[213px] md:h-[242px]" },
    { card: "bottom-[20%] md:bottom-0 right-10 md:right-1 2xl:right-50 w-[154px] h-[190px] md:w-[254px] md:h-[290px]" }
  ];

  return (
    <div className="relative w-full max-w-[1100px] h-[680px] mx-auto mt-[-150px] md:mt-0">
      <div className="shadow-[0px_4px_4px_0px_#00000040] z-50 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[172px] h-[172px]  md:w-[272px] md:h-[272px] flex items-center justify-center">
        <div className="z-20 w-[130px] h-[130px] md:w-[230px] md:h-[230px]  border-[12px] border-[#F9C751] rounded-full bg-white flex items-center justify-center">
          <span className="font-semibold font-brando-semibold text-[12px] md:text-[20px] leading-[34px] text-center text-black">{t("TeamWorkPage.OurTeamSection.centerTitle")} </span>
        </div>
      </div>

      {cards.map((c, i) => (
        <div
          key={c.id}
          className={`absolute z-10 ${positions[i].card} drop-shadow-lg transition-transform duration-300 hover:scale-[1.03]`}
        >
          <div className="w-full h-full rounded-[12px] overflow-hidden relative">
            <Image
              src={c.img}
              alt={isArabic ? c.title_ar : c.title_en}
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />


          </div>
        </div>
      ))}



    </div>
  );
}
