import React from "react";

export default function WeHear() {
    return (
        <section className=" py-4 my-5 container mx-auto bg-white">

            <div className="flex justify-between items-center p-6 w-full ">
                <div className="flex flex-col text-left">

                    <p className="font-bold text-[24px] leading-[34px] text-right text-[#1A1A1A]">
                        إحنا بنحب نسمع, خلينا نشوف فكرتك
                    </p>
                    <h2 className="font-bold text-[32px] leading-[46px] text-right text-[#987931] max-w-[783px]">
                        بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية
                    </h2>
                </div>

                <button className="font-bold text-[20px] leading-[29px] text-center text-[#FDFFFC] flex justify-center items-center px-0 py-[17px] gap-2.5 w-[274px] bg-[#1A1A1A] border border-[#F6EDE0] rounded-[16px] box-border">
                    كلّمنا وخلنا نبدأ
                </button>
            </div>

        </section>
    );
}
