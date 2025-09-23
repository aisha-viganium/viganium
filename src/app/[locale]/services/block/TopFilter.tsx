"use client";

import React from "react";
export default function TopFilter() {
  const [path, setPath] = React.useState<string | undefined>(undefined);
  const navLinks = ["كل الخدمات", "التسويق الإلكتروني", "تطوير المواقع ", "تطوير الموبايل"];


  return (
    <div className="">
      <div className="">
        {navLinks.map((link) => (
          <button
            onClick={() => setPath(link)}
            key={link}
className="
    font-semibold 
    md:text-[20px] md:leading-[29px] md:text-right 
    text-[12px] leading-[normal] text-left
    relative text-[#FDFFFC] px-2 p-[16px] cursor-pointer
  "          >
            {link}
            {path === link && (
              <div className="absolute left-0 bottom-0 w-full h-[4px] bg-[#BD171D] rounded-sm "></div>
            )}
          </button>
        ))}

      </div>

    </div>
  );
}
