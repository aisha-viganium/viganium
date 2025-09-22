"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chat from "@/components/Chat";
import Image from "next/image";
export default function HeroSection() {
    const [open, setOpen] = useState(false);
    return (
        <>
               <Image
                src="/assets/icons/scroll-shape-container.svg"
                alt="Hero"
                width={120}
                height={120}
                className="absolute z-2 right-[2%] bottom-[6%] w-[120px] spin-slow sm:right-[3%] sm:bottom-[7%] sm:w-[170px]"
            />
            <div
                className="
                        fixed z-[100] 
                        w-[100px] h-[100px] right-[-4%] bottom-[5%] 
                        sm:w-[150px] sm:h-[150px] md:right-[1.5%] md:bottom-[4%]  

                    "
                                                      onClick={() => setOpen(true)}

            >
                <div
                    className="
                                relative top-[-10%] left-[-50%] w-[80px] h-[80px] group 
                                sm:w-[100px] sm:h-[100px]
                                cursor-pointer
                                "

                >
                    <div
                        className="
                                    absolute right-[0%] top-[-60%] flex items-center justify-center 
                                    px-2 py-1 gap-2 w-[70px] h-[28px] rounded-full bg-[#1A1A1A] 
                                    sm:px-[12.7px] sm:py-[7.9px] sm:w-[90.4px] sm:h-[33.87px] sm:rounded-[24px]
                                    transition-opacity duration-300 group-hover:opacity-0
                                "
                    >
                        <span className="font-[600] text-[10px] leading-[14px] text-[#F3F3F3] sm:text-[12.7px] sm:leading-[18px]">
                            تحدث معي
                        </span>
                    </div>

                    <div
                        className="
                                    absolute w-[45px] h-[45px] left-[20%] top-[30px] rounded-full shadow-[0_0_90px_#FF0000] 
                                    sm:w-[60px] sm:h-[60px] sm:shadow-[0_0_130px_#FF0000]
                                "
                    ></div>

                    <Image
                        src="/assets/icons/sleepRobot.png"
                        alt="Hero"
                        width={80}
                        height={80}
                        className="cursor-pointer absolute top-0 right-[-5%] w-[75px] h-[75px] object-contain transition-opacity duration-300 group-hover:opacity-0 sm:w-[95px] sm:h-[95px]"
                    />
                    <Image
                        src="/assets/icons/head.png"
                        alt="Hero Hover"
                        width={80}
                        height={80}
                        className="cursor-pointer absolute top-0 right-[-5%] w-[75px] h-[75px] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:w-[95px] sm:h-[95px]  pointer-events-auto"
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