"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cards = [
    { id: 1, title: "الإستماع", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/work/hear.png" },
    { id: 2, title: "البحث", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/work/search.png" },
    { id: 3, title: "التحليل", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/work/analysing.png" },
    { id: 4, title: "المناقشة", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/work/discussion.png" },
    { id: 5, title: "التنفيذ", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/work/working.png" },
    { id: 6, title: "الإختبار", description: " استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين", image: "/assets/images/work/test.png" },

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
        <div className="flex flex-col items-end justify-start h-[320] md:justify-center md:h-[700] overflow-hidden px-5">
            <div className="flex gap-1 md:gap-6 mt-2 items-center">

                <button
                    onClick={prevCard}
                    disabled={index === 0}
                    className={`cursor-pointer flex col justify-center items-center  w-[20px] h-[20px] md:w-[48px] md:h-[48px] bg-[#FDFFFC] rounded-[3px] md:rounded-[10px] transition-all ${index === 0
                        ? "cursor-not-allowed  bg-[#FDFFFC] opacity-30"
                        : "bg-white"
                        }`}
                >
                    <Image src="/assets/icons/left-arrow.svg" alt="arrow" width={20} height={20}  className="w-[8px] h-[8px] md:w-[20px] md:h-[20px]"  />
                </button>
                <div className="relative w-60 md:w-80 min-h-[200px] md:min-h-[470.18px] flex justify-center">
                    <AnimatePresence initial={false} mode="wait">
                        {cards.slice().map((card, i) => {
                            const pos = (i - index + cards.length) % cards.length;
                            const isActive = pos === 0;

                            return (
                                <motion.div
                                    key={card.id}
                                    initial={direction === "next" ? cardVariants.enterNext : ""}
                                    animate={
                                        isActive
                                            ? cardVariants.center
                                            : { scale: 0.9, rotate: 15, x: pos * 8, opacity: 1, zIndex: cards.length - pos }
                                    }
                                    exit={direction === "next" ? cardVariants.exitNext : ""}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`absolute w-40 md:w-80 flex flex-col items-center p-[17.53px] gap-[17.53px] max-w-[356px] min-h-[200px] md:min-h-[470.18px] bg-[#F3F3F3] shadow-[4.38px_4.38px_4.38px_rgba(0,0,0,0.25)] rounded-[6.53px] md:rounded-[17.53px]`}
                                >
                                    <div>
                                        <div className="flex flex-row justify-between items-center gap-[17.53px] w-full h-fit md:h-[56px]">
                                            <h5
                                                className="
                                                        max-w-[127px] text-center 
                                                        text-[14.36px] leading-[21px] font-semibold text-[#1A1A1A] 
                                                        md:text-[39.43px] md:leading-[56px]                       
                                                    "
                                            >
                                                {card.title}
                                            </h5>
                                            <div
                                                className="
                                                            flex flex-col justify-center items-center 
                                                            p-[3.99px] gap-[3.99px] 
                                                            w-[19.15px] h-[19.15px] rounded-[11.97px] 
                                                            bg-[#1A1A1A] 

                                                            md:p-[10.95px] md:gap-[10.95px] 
                                                            md:w-[52.58px] md:h-[52.58px] md:rounded-[32.86px]
                                                        "
                                            >
                                                <span
                                                    className="
                                                            w-[10px] h-[14px] 
                                                            text-center font-[600] text-[9.57px] leading-[14px] text-[#F3F3F3] 

                                                            md:w-[27px] md:h-[38px] 
                                                            md:text-[26.29px] md:leading-[38px] md:font-semibold
                                                            "
                                                >
                                                    {card?.id?.toString()?.padStart(2, '0')}

                                                </span>
                                            </div>
                                        </div>
                                        <Image
                                            src={card.image}
                                            alt=""
                                            width={320}
                                            height={219}
                                            className="
                                                        w-full h-[79px] rounded-[6.38px] my-5  
                                                        md:h-auto md:rounded-[17.53px]  
                                                    "
                                        />
                                        <p
                                            className="
                                                         text-[6.38px] leading-[9px] font-medium
                                                        md:max-w-[320.95px] text-center md:font-medium md:text-[17.53px] md:leading-[25px] text-[#1A1A1A]
                                                    "
                                        >   
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
                    className={`cursor-pointer flex col justify-center items-center w-[20px] h-[20px] md:w-[48px] md:h-[48px] bg-[#FDFFFC] rounded-[3px] md:rounded-[10px] transition-all ${index === cards.length - 1
                        ? "cursor-not-allowed  bg-[#FDFFFC] opacity-30"
                        : "bg-white"
                        }`}
                >
                    <Image src="/assets/icons/right-arrow.svg" alt="arrow" width={20} height={20}  className="w-[8px] h-[8px] md:w-[20px] md:h-[20px]" />

                </button>


            </div>
        </div>
    );
}
