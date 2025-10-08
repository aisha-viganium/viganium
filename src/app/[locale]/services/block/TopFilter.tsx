"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

interface TopFilterProps {
  onFilterChange: (filter: string) => void;
}

export default function TopFilter({ onFilterChange }: TopFilterProps) {
  const searchParams = useSearchParams();
  const filterFromUrl = searchParams.get("filter") || "0";
  const [activeFilter, setActiveFilter] = React.useState<string>(filterFromUrl);
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  React.useEffect(() => {
    setActiveFilter(filterFromUrl);
    onFilterChange(filterFromUrl);
  }, [filterFromUrl]);

  const navLinks = [
    { label_ar: "كل الخدمات", label_en: "All Services", value: "0" },
    { label_ar: "التطوير التقني", label_en: "Technical Development", value: "1" },
    { label_ar: "الابتكار الرقمي", label_en: "Digital Innovation", value: "2" },
    { label_ar: "التسويق الذكي", label_en: "Smart Marketing", value: "3" },
    { label_ar: "الأمان والتشغيل الذكي", label_en: "Security & Smart Operations", value: "4" },
  ];

  const handleClick = (value: string) => {
    setActiveFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {navLinks.map((link) => (
        <button
          onClick={() => handleClick(link.value)}
          key={link.value}
          className={`font-semibold 
            md:text-[20px] md:leading-[29px] md:text-right 
            text-[12px] leading-[normal] text-left
            relative text-[#FDFFFC] px-2 p-[16px] cursor-pointer
            ${activeFilter === link.value ? "font-bold" : ""}
          `}
        >
          {isArabic ? link.label_ar : link.label_en}
          {activeFilter === link.value && (
            <div className="absolute left-0 bottom-0 w-full h-[4px] bg-[#BD171D] rounded-sm"></div>
          )}
        </button>
      ))}
    </div>
  );
}
