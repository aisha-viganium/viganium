"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chat from "@/components/Chat";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/i18n/client";

export default function HeroSection() {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <>
            <Image
                src={isArabic?"/assets/icons/scroll-shape-container.svg":"/assets/icons/scroll-shape-container-en.svg"}
                alt="Hero"
                width={120}
                height={120}
                className={`absolute z-2 ${isArabic ? "right-[2%]" : "left-[2%]"} bottom-[52%] 
                    w-[70px] h-[70px] spin-slow 
                    ${isArabic ? "md:right-[3%]" : "md:left-[3%]"} 
                    md:bottom-[7%] md:w-[170px] md:h-[170px]`}
            />
            <div
                className={`
                    fixed z-[100] 
                    w-[70px] h-[70px] ${isArabic ? "right-[-3%]" : "left-[4%]"} bottom-[50%] 
                    md:w-[150px] md:h-[150px] ${isArabic ? "md:right-[1.5%]" : "md:left-[8%]"} md:bottom-[4%]  
                `}
                onClick={() => setOpen(true)}
            >
                <div
                    className="
                        relative top-[-10%] left-[-50%] w-[80px] h-[80px] group 
                        md:w-[100px] md:h-[100px]
                        cursor-pointer
                    "
                >
                    <div
                        className={`
                            absolute ${isArabic ? "right-[-15%]" : "left-[45%]"} top-[-40%] 
                            ${isArabic ? "md:right-[-5%]" : "md:left-[10%]"}  
                            flex items-center justify-center 
                            px-2 py-1 gap-2 w-[60px] h-[18px] rounded-full bg-[#1A1A1A] 
                            md:px-[12.7px] md:py-[7.9px] md:w-[90.4px] md:h-[33.87px] md:rounded-[24px]
                            transition-opacity duration-300 group-hover:opacity-0
                        `}
                    >
                        <span className="font-[600] text-[8px] leading-[14px] text-[#F3F3F3] md:text-[12.7px] md:leading-[18px]">
                            {t("ChatSection.button")}
                        </span>
                    </div>

                    <div
                        className="
                            absolute w-[35px] h-[35px] left-[50%] md:left-[30%] top-[10px] md:top-[20px] rounded-full shadow-[0_0_90px_#FF0000] 
                            md:w-[60px] md:h-[60px] md:shadow-[0_0_130px_#FF0000]
                        "
                    ></div>

                    <Image
                        src="/assets/icons/sleepRobot.png"
                        alt="Hero"
                        width={80}
                        height={80}
                        className="cursor-pointer absolute top-0 right-[-5%] w-[45px] h-[45px] object-contain transition-opacity duration-300 group-hover:opacity-0 md:w-[95px] md:h-[95px]"
                        priority
                    />
                    <Image
                        src="/assets/icons/head.png"
                        alt="Hero Hover"
                        width={80}
                        height={80}
                        className="cursor-pointer absolute top-0 right-[-5%] w-[45px] h-[45px] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:w-[95px] md:h-[95px]  pointer-events-auto"
                        priority
                    />
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            initial={{ y: "-100vh" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100vh" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-[95%] max-w-[921px] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="cursor-pointer absolute top-10 right-10 z-50 text-white text-2xl"
                            >
                                ✕
                            </button>

                            <Chat />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
