"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cards = [
    { id: 1, title: "الإستماع", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/item-how-we-work-image.png" },
    { id: 2, title: "الإستماع", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/item-how-we-work-image.png" },
    { id: 3, title: "الإستماع", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/item-how-we-work-image.png" },
];

export default function CardSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");

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
        // enterPrev: { y: -600, opacity: 0, rotate: -15 },
        center: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 10 },
        exitNext: { y: -600, opacity: 0, rotate: 0, transition: { duration: 0.5 } },
        // exitPrev: { y: 0, opacity: 1, rotate: 10, transition: { duration: 0.5 } },
    };

    return (
        <div className="flex flex-col items-center justify-start h-[570] md:justify-center md:h-[700] overflow-hidden px-5">
            <div className="flex gap-1 md:gap-6 mt-2 items-center">

                <button
                    onClick={prevCard}
                    disabled={index === 0}
                    className={`flex col justify-center  w-[48px] h-[48px] bg-[#FDFFFC] rounded-[10px] transition-all ${index === 0
                        ? "cursor-not-allowed  bg-[#FDFFFC] opacity-30"
                        : "bg-white"
                        }`}
                >
                    <Image src="/assets/icons/left-arrow.svg" alt="arrow" width={20} height={20} />
                </button>
                <div className="relative w-80 min-h-[470.18px]">
                    <AnimatePresence initial={false} mode="wait">
                        {cards.map((card, i) => {
                            const pos = (i - index + cards.length) % cards.length;
                            const isActive = pos === 0;

                            return (
                                <motion.div
                                    key={card.id}
                                    initial={direction === "next" ? cardVariants.enterNext : ""}
                                    animate={
                                        isActive
                                            ? cardVariants.center
                                            : { scale: 0.9, rotate: 10, x: pos * 25, opacity: 1, zIndex: cards.length - pos }
                                    }
                                    exit={direction === "next" ? cardVariants.exitNext : ""}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`absolute w-80  flex flex-col items-center p-[17.53px] gap-[17.53px] max-w-[356px] min-h-[470.18px] bg-[#F3F3F3] shadow-[4.38px_4.38px_4.38px_rgba(0,0,0,0.25)] rounded-[17.53px]`}
                                >
                                    <div>
                                        <div className="flex flex-row justify-between items-center gap-[17.53px] w-full h-[56px]">
                                            <h5 className=" max-w-[127px] text-[39.43px] leading-[56px] font-semibold text-[#1A1A1A]">
                                                {card.title}
                                            </h5>

                                            <div className="flex flex-col justify-center items-center p-[10.95px] gap-[10.95px] w-[52.58px] h-[52.58px] bg-[#1A1A1A] rounded-[32.86px] flex-none order-0 grow-0">
                                                <span className="w-[27px] h-[38px] text-center text-[26.29px] leading-[38px]  font-semibold text-[#F3F3F3] flex-none order-0 grow-0">
                                                    {card?.id?.toString()?.padStart(2, '0')}

                                                </span>
                                            </div>
                                        </div>
                                        <Image src={card.image} alt="" width={320} height={219} className="w-[320.95px] my-5 h-[219.08px] rounded-[17.53px]" />
                                        <p className="max-w-[320.95px] text-center text-[17.53px] leading-[25px]  font-medium text-[#1A1A1A]">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
                <button
                    onClick={nextCard}
                    disabled={index === cards.length - 1}
                    className={`flex col justify-center w-[48px] h-[48px] bg-[#FDFFFC] rounded-[10px] transition-all ${index === cards.length - 1
                        ? "cursor-not-allowed  bg-[#FDFFFC] opacity-30"
                        : "bg-white"
                        }`}
                >
                    <Image src="/assets/icons/right-arrow.svg" alt="arrow" width={20} height={20} />

                </button>


            </div>
        </div>
    );
}
