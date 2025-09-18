"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chat from "./Chat";

export default function ChatPopup({bg="white",color="#1A1A1A"}) {
    const [open, setOpen] = useState(false);

    return (
        <>

            <button
                onClick={() => setOpen(true)}
                className={`
    cursor-pointer flex my-5 flex-row justify-center items-center 
    py-[4px] md:py-[17px] gap-[10px] 
    w-[100px] md:w-[188px] h-[45px] md:h-[63px] 
    bg-${bg} border border-${bg} rounded-[16px] 
    text-center font-bold text-[12px] md:text-[20px] leading-[26px] md:leading-[29px] 
    text-[${color}]
    transition-all duration-300 ease-in-out
    hover:outline hover:outline-[3px] hover:outline-${bg} hover:outline-offset-4
  `}
            >
                كلّمنا وخلنا نبدأ
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
