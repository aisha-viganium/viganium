"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const accordionData = [
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)" },
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)" },
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)" },
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)" },
  { question: "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟", answer: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)" },

];

export default function Accordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

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
              className="cursor-pointer flex justify-between w-full items-center p-3 md:p-4 min-h-[45px] border-r-[6px] md:border-r-[8px] border-[#F9C751] rounded-lg transition-colors duration-300"
            >
              <span className="font-semibold text-[10px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[29px] text-right text-[#414141]">
                {item.question}
              </span>
              <span className="w-[27px] h-[27px] md:w-10 md:h-10 lg:w-11 lg:h-11 bg-[#F9C751] rounded-full flex justify-center items-center shrink-0 transition-transform duration-300">
                <Image
                  src={
                    isOpen
                      ? "/assets/icons/minus.svg"
                      : "/assets/icons/plus-question.svg"
                  }
                  alt="plus"
                  width={25}
                  height={25}
                  className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] transition-transform duration-300"
                />
              </span>
            </button>

            {/* Animated Answer */}
            <div
              ref={(el) => { contentRefs.current[index] = el; }}
              style={{
                maxHeight: isOpen
                  ? contentRefs.current[index]?.scrollHeight + "px"
                  : "0px",
              }}
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out "
            >
              <div className="
              mt-2
              border-t-1 border-t-[#A5A5A5]
              font-medium 
              text-[8px]
              md:text-[16px] 
              md:leading-[23px] 
              text-right 
              text-[#787878] 
              pt-3
            ">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
