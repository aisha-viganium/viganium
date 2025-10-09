"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import questions from "@/data/questionsData";
export default function Accordion() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const accordionData = questions[isArabic ? "ar" : "en"];

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className="w-full mt-4 md:mt-5">
            <button
              onClick={() => toggle(index)}
              className="cursor-pointer  flex justify-between w-full items-center p-3 md:p-4 h-[45px] border-r-[6px] md:border-r-[8px] border-[#F9C751] rounded-lg transition-colors duration-300"
            >
              <span className="font-semibold text-[10px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[29px] text-right text-secondry-200">
                {item.question}
              </span>
              <span className="w-[27px] h-[27px] md:w-10 md:h-10 lg:w-11 lg:h-11 bg-[#F9C751] rounded-full flex justify-center items-center shrink-0 transition-transform duration-300">
                <Image
                  src={isOpen ? "/assets/icons/minus.svg" : "/assets/icons/plus-question.svg"}
                  alt="toggle"
                  width={25}
                  height={25}
                  className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] transition-transform duration-300"
                />
              </span>
            </button>

            <div
              ref={(el) => { contentRefs.current[index] = el; }}
              style={{
                maxHeight: isOpen
                  ? contentRefs.current[index]?.scrollHeight + "px"
                  : "0px",
              }}
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out border-t-1 border-t-[#A5A5A5] mt-4"
            >
              <div className=
                {`${isArabic ? "text-right " : "text-left "}
                mt-2
                font-medium 
                text-[8px]
                md:text-[16px] 
                md:leading-[23px] 
                text-[#787878] 
                pt-3
              `}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
