"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); 

  const currentLocale = pathname.split("/")[1] || "en";

  const toggleLocale = () => {
    const newLocale = currentLocale === "ar" ? "en" : "ar";

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <>

      <div  style={{
                    backgroundColor: "#FFF",
                    border: `2px solid #FFF`,

                    outline: `2px solid #FFF`,

                }}
                className="
                cursor-pointer flex flex-row justify-center items-center my-5
                px-0 py-[2px] gap-[6.24px] rounded-[4px] font-bold text-[10px] leading-[14px]
                md:py-[17px] md:gap-[10px] md:w-[188px] md:h-[63px] 
                md:rounded-[16px] md:text-[20px] md:leading-[29px]
                w-[80px] h-[30px] 
                text-center 
                transition-all duration-300 ease-in-out
                hover:outline-offset-4
            ">
        <button
          onClick={() => toggleLocale()}
          className={` cursor-pointer w-[75px] h-[50px] flex items-center justify-center rounded-lg font-semibold text-[16px] ${
            currentLocale === "ar"
              ? "bg-[#BD171D] text-white"
              : "bg-transparent text-[#414141]"
          }`}
        >
          عربي
        </button>
        <button
          onClick={() => toggleLocale()}
          className={`font-aileron cursor-pointer w-[75px] h-[50px] flex items-center justify-center rounded-lg font-semibold text-[16px] ${
            currentLocale === "en"
              ? "bg-[#BD171D] text-white"
              : "bg-transparent text-[#414141]"
          }`}
        >
          English
        </button>
      </div>
      </>
  );
}
