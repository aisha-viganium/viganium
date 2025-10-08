"use client";
import { useEffect, useState } from "react";
import Logo from "@/assets/SVG/Logo";
import { useTranslation } from "react-i18next";


export default function LoadingPage() {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("");
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const totalBlocks = 10;
    const filledBlocks = Math.floor((progress / 100) * totalBlocks);
    const sentences = {
        ar: [
            "لوريم ابسيوم شكلك فاهم يا نصصه",
            "لوريم ابسيوم شكلك فاهم يا نصصه",
            "لوريم ابسيوم شكلك فاهم يا نصصه"
        ],
        en: [
            "Lorem Ipsum, you seem to get it, buddy",
            "Lorem Ipsum, you seem to get it, buddy",
            "Lorem Ipsum, you seem to get it, buddy",

        ]
    };
    const sentencesData = sentences[isArabic ? "ar" : "en"];


    useEffect(() => {
        if (progress < 100) {
            const interval = setInterval(() => {
                setProgress((prev) => Math.min(prev + 5, 100));
            }, 300);
            return () => clearInterval(interval);
        }
    }, [progress]);

    useEffect(() => {
        const currentSentence = sentencesData[sentenceIndex];
        let typingSpeed = deleting ? 50 : 120;

        const timeout = setTimeout(() => {
            if (!deleting && charIndex < currentSentence.length) {
                setText((prev) => prev + currentSentence[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (deleting && charIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (!deleting && charIndex === currentSentence.length) {
                setDeleting(true);
                typingSpeed = 1500; // pause before deleting
            } else if (deleting && charIndex === 0) {
                setDeleting(false);
                setSentenceIndex((prev) => (prev + 1) % sentencesData.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, sentenceIndex]);

    return (
        <div className="relative flex flex-col items-center justify-center h-[100vh] text-white bg-[url('/assets/images/cover.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="relative z-10 flex flex-col items-center space-y-6">
                <Logo width={200} height={60} fillColor="#FFFFFF" />

                <div className="w-[300px] h-[14px] flex gap-1 bg-[#FFF] rounded-[10px] items-center px-2">
                    {Array.from({ length: totalBlocks }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-[7px] flex-1 transition-colors duration-300 ${i < filledBlocks ? "bg-primary" : ""
                                }`}
                        />
                    ))}
                </div>


                <div className="relative w-[318px] h-[59px] rounded-[8px] flex items-center justify-center mx-auto 
                                bg-gradient-to-t from-white/90 to-white/90 bg-primary 
                                not-italic font-medium text-[20px] leading-[29px] text-right text-secondry">

                    <span className="absolute top-[5px] left-[5px] w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl"></span>
                    <span className="absolute top-[5px] right-[5px] w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr"></span>
                    <span className="absolute bottom-[5px] left-[5px] w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl"></span>
                    <span className="absolute bottom-[5px] right-[5px] w-3 h-3 border-b-2 border-r-2 border-primary rounded-br"></span>

                    <span>{text}</span>
                    <span className="animate-pulse">|</span>
                </div>

            </div>
        </div>
    );
}
