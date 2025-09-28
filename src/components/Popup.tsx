"use client";
import Image from "next/image";

interface PopupProps {
    image: string;
    title: string;
    paragraph: string;
    onClose: () => void;
}

export default function Popup({ image, title, paragraph, onClose }: PopupProps) {
    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-[8px] p-6 relative w-[90%] md:max-w-[633px] md:min-h-[387px] max-w-md "
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 cursor-pointer right-3 z-40 w-[50px] h-[50px] bg-[#C83E43] rounded-[6.25px] text-[#F8E8E8] font-bold text-[24px] leading-[34px] flex items-center justify-center hover:bg-[#a83236] transition-colors"
                    onClick={onClose}
                >
                    ✕
                </button>

                <div className="w-full h-40 md:h-[160px] md:w-[309px] relative mb-4 text-center mx-auto">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-fit rounded-lg"
                    />
                </div>

                <h2 className="
                my-3
                    font-bold 
                    text-[36px] 
                    leading-[51px] 
                    text-center 
                    text-[#1A1A1A] ">{title}</h2>

                <p className="font-normal 
                            text-[24px] 
                            leading-[34px] 
                            text-center 
                            text-[#1A1A1A]">{paragraph}</p>
            </div>
        </div>
    );
}
