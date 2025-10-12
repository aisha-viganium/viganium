"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chat from "./Chat";
import { useTranslation } from "react-i18next";
import "@/i18n/client";
export default function PoPUpChat({ bg, color, border }: { bg: string; color: string; border: string }) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                style={{
                    backgroundColor: bg,
                    color: color,
                    border: `2px solid ${border}`,

                    outline: `2px solid ${bg}`,

                }}
                className="
                cursor-pointer flex flex-row justify-center items-center my-5
                px-0 py-[2px] gap-[6.24px] rounded-[4px] font-bold text-[10px] leading-[14px]
                md:py-[17px] md:gap-[10px] md:w-[188px] md:h-[63px] 
                md:rounded-[16px] md:text-[20px] md:leading-[29px]
                w-[50px] h-[30px] 
                text-center 
                transition-all duration-300 ease-in-out
                hover:outline-offset-4
            "
            >
                {t("common.lets_talk")}
            </button>


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
