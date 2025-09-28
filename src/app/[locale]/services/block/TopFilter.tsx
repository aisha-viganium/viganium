"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

interface TopFilterProps {
  onFilterChange: (filter: string) => void;
}

export default function TopFilter({ onFilterChange }: TopFilterProps) {
  const searchParams = useSearchParams();
  const filterFromUrl = searchParams.get("filter") || "AllServices";
  const [activeFilter, setActiveFilter] = React.useState<string>(filterFromUrl);

  React.useEffect(() => {
    setActiveFilter(filterFromUrl);
    onFilterChange(filterFromUrl);
  }, [filterFromUrl]);

  const navLinks = [
    { label: "كل الخدمات", value: "AllServices" },
    { label: "التسويق الإلكتروني", value: "DigitalMarketing" },
    { label: "تطوير مواقع", value: "WebDevelopment" },
    { label: "تطوير الموبايل", value: "MobileDevelopment" },
  ];

  const handleClick = (value: string) => {
    setActiveFilter(value);
    onFilterChange(value); // بيرجع بالإنجليزي بدون مسافات
  };

  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {navLinks.map((link) => (
        <button
          onClick={() => handleClick(link.value)}
          key={link.value}
          className={`
            font-semibold 
            md:text-[20px] md:leading-[29px] md:text-right 
            text-[12px] leading-[normal] text-left
            relative text-[#FDFFFC] px-2 p-[16px] cursor-pointer
          `}
        >
          {link.label}
          {activeFilter === link.value && (
            <div className="absolute left-0 bottom-0 w-full h-[4px] bg-[#BD171D] rounded-sm"></div>
          )}
        </button>
      ))}
    </div>
  );
}
