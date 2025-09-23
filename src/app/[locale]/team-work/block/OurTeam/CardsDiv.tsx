import Image from "next/image";

export default function CardsDiv() {
  const cards = [
    { id: 1, img: "/assets/icons/card.svg", title: "المرونة وحل المشكلات" },
    { id: 2, img: "/assets/icons/card.svg", title: "التواصل الفعال" },
    { id: 3, img: "/assets/icons/card.svg", title: "التعاون و روح الفريق" },
    { id: 4, img: "/assets/icons/card.svg", title: "الإلتزام وتحمل السمسؤلية" },
  ];

  const positions = [
    { card: "top-[20%] left-[10%] md:top-6 md:left-20 w-[154px] h-[190px] md:w-[254px] md:h-[290px]", title: "right-4 top-[60px] md:top-[100px] text-[18px] md:text-[32px]" },
    { card: "top-[25%] right-[10%] md:top-20 md:right-20 w-[113px] h-[142px] md:w-[213px] md:h-[242px]", title: "top-[45px] md:top-[85px] right-[15px] text-[15px] md:text-[26px] " },
    { card: "bottom-[25%] left-[10%] md:bottom-20 md:left-20 w-[113px] h-[142px] md:w-[213px] md:h-[242px]", title: "top-[55px] md:top-[105px] right-[7px] text-[14px] md:text-[22px]" },
    { card: "bottom-[20%] md:bottom-0 right-10 w-[154px] h-[190px] md:w-[254px] md:h-[290px]", title: "right-0 top-[50px] md:top-[90px] text-[16px] md:text-[25px]" }
  ];

  return (
    <div className="relative w-full max-w-[1100px] h-[680px] mx-auto mt-[-150px] md:mt-0">
      <div className="z-50 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[172px] h-[172px]  md:w-[272px] md:h-[272px] flex items-center justify-center">
        <div className="z-20 w-[130px] h-[130px] md:w-[230px] md:h-[230px]  border-[12px] border-[#F9C751] rounded-full bg-white flex items-center justify-center">
          <span className="font-semibold text-[12px] md:text-[20px] leading-[34px] text-center text-black">لوريم ابسيوم</span>
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
              alt={c.title}
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
              priority={false}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

            <h3
              className={`
          absolute 
          font-extrabold leading-[43px] text-white 
          text-right
          [text-shadow:-4.58px_4.58px_4.58px_rgba(255,255,255,0.2)]
          -rotate-[41deg]
          ${positions[i].title}
        `}
            >
              {c.title}
            </h3>
          </div>
        </div>
      ))}



    </div>
  );
}
