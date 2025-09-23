"use client";

import Image from "next/image";
import { useState } from "react";

const accordionData = [
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <div key={index} className="w-full mt-4 md:mt-5">
          <button
            onClick={() => toggle(index)}
            className="cursor-pointer flex justify-between w-full items-center p-3 md:p-4 min-h-[45px] border-r-[6px] md:border-r-[8px] border-[#F9C751] rounded-lg"
          >
            <span className="font-semibold text-[10px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[29px] text-right text-[#414141]">
              {item.question}
            </span>
            <span className="w-[27px] h-[27px] md:w-10 md:h-10 lg:w-11 lg:h-11 bg-[#F9C751] rounded-full flex justify-center items-center shrink-0">
              <Image
                src={openIndex === index ? "/assets/icons/minus.svg":"/assets/icons/plus-question.svg"}
                alt="plus"
                width={25}
                height={25}
                className="w-[15px] h-[15px] md:w-[25px] md:h-[25px]"
              />
            </span>
          </button>

          {openIndex === index && (
            <div className="font-light text-[10px] md:text-[15px] lg:text-[16px] mt-2 leading-[22px] md:leading-[23px] text-right text-[#414141] p-3 md:p-4 border-t border-[#414141]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
