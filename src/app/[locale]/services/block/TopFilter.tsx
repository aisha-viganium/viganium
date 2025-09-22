"use client";

import React from "react";
export default function TopFilter() {
  const [path, setPath] = React.useState<string | undefined>(undefined);
  const navLinks = ["يومي", "إسبوعي", "15 يوم", "شهري", "سنوي"];


  return (
    <div className="">
      <div className="">
        {navLinks.map((link) => (
          <button
            onClick={() => setPath(link)}
            key={link}
            className="relative font-semibold text-[20px] leading-[29px] text-right text-[#FDFFFC] px-2 p-[16px] cursor:pointer"
          >
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
