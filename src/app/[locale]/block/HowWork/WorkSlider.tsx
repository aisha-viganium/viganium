"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CardSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
const [stopped, setStopped] = useState(false);

    const cards = t("howWork.cards", { returnObjects: true }) as {
        id: number;
        title: string;
        description: string;
        image: string;
    }[];

    const basePositions = isArabic
        ? [
            { rotate: 0, x: 10},
            { rotate: 10, x: 10},
            { rotate: 15, x: 10},
            { rotate: 20, x: 10},
            { rotate: 25, x: 10},
        ]
        : [
            { rotate: 0, x: 10},
            { rotate: 10, x: 10},
            { rotate: 15, x: 10},
            { rotate: 20, x: 10},
            { rotate: 25, x: 10},
        ];
    const nextCard = () => {
        if (index < cards.length - 1) {
            setDirection("next");
            setIndex(index + 1);
        }
    };

    const prevCard = () => {
        if (index > 0) {
            setDirection("prev");
            setIndex(index - 1);
        }
    };

    const cardVariants = {
        enterNext: { y: 600, opacity: 0 },
        center: { y: 10, x: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 10 },
        exitNext: { y: -600, opacity: 1, rotate: 0, transition: { duration: 0.5 } },
    };
useEffect(() => {
  if (stopped) return; // لو المستخدم وقف، نخرج فورًا

  let count = 0;
  let interval: NodeJS.Timeout | null = null;
  let hasStopped = false;

  interval = setInterval(() => {
    if (count < 5 && !hasStopped) {
      if (isArabic) nextCard();
      else nextCard();
      count++;
    } else {
      if (interval) clearInterval(interval);
    }
  }, 0);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        hasStopped = true;
        if (interval) clearInterval(interval);
      }
    },
    { threshold: 0.2 }
  );

  const section = document.querySelector("#how-work-section");
  if (section) observer.observe(section);

  return () => {
    if (interval) clearInterval(interval);
    observer.disconnect();
  };
}, [isArabic,index, stopped]);


    return (
        <div
            dir={isArabic ? "rtl" : "ltr"}
            className="flex flex-col items-center md:items-end justify-start h-[220px] md:justify-center md:h-[700px] 2xl:h-[571px] overflow-hidden px-5"
        >
            <div className="flex gap-4 md:gap-12 mt-2 items-center">
                <button
                     onClick={() => {
    setStopped(true); 
    isArabic ? prevCard() : nextCard();
  }}
                    disabled={isArabic ? index === 0 : index === cards.length - 1}
                    className={`cursor-pointer flex justify-center items-center w-[20px] h-[20px] md:w-[48px] md:h-[48px] bg-[#FDFFFC] rounded-[3px] md:rounded-[10px] transition-all ${(isArabic ? index === 0 : index === cards.length - 1)
                        ? "cursor-not-allowed bg-[#FDFFFC] opacity-30"
                        : "bg-white"
                        }`}
                >
                    <Image
                        src={isArabic ? "/assets/icons/left-arrow.svg" : "/assets/icons/right-arrow.svg"}
                        alt="arrow"
                        width={20}
                        height={20}
                        className="w-[8px] h-[8px] md:w-[20px] md:h-[20px]"
                    />
                </button>
                <div className="relative w-[130px] h-[171px] md:w-[325px] min-h-[200px] md:h-[470.18px] flex justify-center">
                    <AnimatePresence initial={false} mode="wait">
                        {cards.reverse().map((card, i) => {
                            const pos = (i - index + cards.length) % cards.length;
                            const isActive = pos === 0;
                            const base = basePositions[pos] || basePositions[basePositions.length - 1];

                            return (
                                <motion.div
                                    key={card.id}
                                    initial={direction === "next" ? cardVariants.enterNext : ""}
                                    animate={
                                        isActive
                                            ? cardVariants.center
                                            : {
                                                zIndex: cards.length - pos,
                                                scale: 0.9,
                                                rotate: base.rotate,
                                                x: base.x,
                                                opacity: 1,
                                            }
                                    }
                                    exit={direction === "next" ? cardVariants.exitNext : ""}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute w-[130px]  md:w-[356px]  flex flex-col items-center p-[6px] md:p-[17.53px] max-w-[356px] min-h-[171px] md:min-h-[470.18px] bg-[#F3F3F3] shadow-[4.38px_4.38px_4.38px_0px_#00000040] rounded-[6.53px] md:rounded-[17.53px]"
                                >
                                    <div>
                                        <div className="flex flex-row justify-between items-center gap-[17.53px] w-full h-fit md:h-[56px]">
                                            <h5 className="max-w-[127px] text-center text-[14.36px] leading-[21px] font-semibold font-brando-semibold text-secondry md:text-[39.43px] md:leading-[56px]">
                                                {card.title}
                                            </h5>
                                            <div className="flex flex-col justify-center items-center p-[3.99px] gap-[3.99px] w-[19.15px] h-[19.15px] rounded-[11.97px] bg-[#1A1A1A] md:p-[10.95px] md:gap-[10.95px] md:w-[52.58px] md:h-[52.58px] md:rounded-[32.86px]">
                                                <span className="w-[10px] h-[14px] text-center font-[600] text-[9.57px] leading-[14px] text-[#F3F3F3] md:w-[27px] md:h-[38px] md:text-[26.29px] md:leading-[38px] md:font-semibold">
                                                    {card.id.toString().padStart(2, "0")}
                                                </span>
                                            </div>
                                        </div>
                                        <Image
                                            src={card.image}
                                            alt=""
                                            width={239}
                                            height={200}
                                            className="w-[117px] h-[79px]  rounded-[6.38px] my-[6px] md:my-4 md:h-[219px] md:w-[320px] md:rounded-[17.53px] object-cover"
                                        />
                                        <p className="text-[6.38px] leading-[9px] font-medium md:max-w-[320.95px] text-center md:font-medium md:text-[17.53px] md:leading-[25px] text-secondry">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
             <button
                   onClick={() => {
    setStopped(true);
    isArabic ? nextCard() : prevCard();
  }}
                    disabled={isArabic ? index === cards.length - 1 : index === 0}
                    className={`cursor-pointer flex justify-center items-center w-[20px] h-[20px] md:w-[48px] md:h-[48px] bg-[#FDFFFC] rounded-[3px] md:rounded-[10px] transition-all ${(isArabic ? index === cards.length - 1 : index === 0)
                        ? "cursor-not-allowed bg-[#FDFFFC] opacity-30"
                        : "bg-white"
                        }`}
                >
                    <Image
                        src={isArabic ? "/assets/icons/right-arrow.svg" : "/assets/icons/left-arrow.svg"}
                        alt="arrow"
                        width={20}
                        height={20}
                        className="w-[8px] h-[8px] md:w-[20px] md:h-[20px]"
                    />
                </button>
            </div>
        </div>
    );
}
