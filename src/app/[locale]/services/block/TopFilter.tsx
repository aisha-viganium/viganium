"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

interface TopFilterProps {
  onFilterChange: (filter: string) => void;
}

export default function TopFilter({ onFilterChange }: TopFilterProps) {
  const searchParams = useSearchParams();
  const filterFromUrl = searchParams.get("filter") || "كل الخدمات";
  const [path, setPath] = React.useState<string>(filterFromUrl);

  React.useEffect(() => {
    setPath(filterFromUrl);
  }, [filterFromUrl]);

  const navLinks = ["كل الخدمات", "التسويق الإلكتروني", "تطوير مواقع", "تطوير الموبايل"];

  const handleClick = (link: string) => {
    setPath(link);
    onFilterChange(link);
  };

  return (
    <div>
      <div>
        {navLinks.map((link) => (
          <button
            onClick={() => handleClick(link)}
            key={link}
            className={`
              font-semibold 
              md:text-[20px] md:leading-[29px] md:text-right 
              text-[12px] leading-[normal] text-left
              relative text-[#FDFFFC] px-2 p-[16px] cursor-pointer
            `}
          >
            {link}
            {path === link && (
              <div className="absolute left-0 bottom-0 w-full h-[4px] bg-[#BD171D] rounded-sm"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
