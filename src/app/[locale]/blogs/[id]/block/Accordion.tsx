"use client";

import Image from "next/image";
import { useState } from "react";

const accordionData = [
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول " },
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول " },
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول " },
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول " },
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول " },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <div key={index} className="w-full mt-5 ">
          <button
            onClick={() => toggle(index)}
            className="cursor-pointer flex flex-row justify-between w-full p-4 items-center  min-h-[45px]  border-r-[8px] border-[#F9C751] rounded-lg"
          >
            <span className="font-semibold text-[20px] leading-[29px] text-[#414141]">{item.question}</span>
            <span className="w-11 h-11  bg-[#F9C751] rounded-[31px] flex justify-center align-center"><Image src="/assets/icons/plus-question.svg" alt="plus" width={25} height={25} /> </span>
          </button>
          {openIndex === index && (
            <div className="font-light text-[16px] mt-2 leading-[23px] text-right text-[#414141] p-4 border-t-[1px] border-[#414141]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
