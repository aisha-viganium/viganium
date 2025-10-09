'use client'
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n/client";
export default function ChatCard() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "ar";
  const isArabic = locale === "ar";

  const [view, setView] = useState<"card" | "chat">("card");
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: t("ChatCard.welcome") || "أهلاً! كيف أقدر أساعدك اليوم؟" },
  ]);
  const [input, setInput] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    t("ChatCard.customSoftware") || "تطوير البرمجيات المخصصة",
    t("ChatCard.mobileApps") || "برمجة تطبيقات الجوال",
    t("ChatCard.webDev") || "تطوير المواقع الإلكترونية",
    t("ChatCard.uiuxDesign") || "تصميم واجهات وتجربة المستخدم (UI/UX)",
    t("ChatCard.digitalMarketing") || "التسويق الرقمي الذكي",
    t("ChatCard.aiVideo") || "إنتاج الفيديو بالذكاء الاصطناعي",
    t("ChatCard.graphicDesign") || "تصميم الجرافيك والهوية البصرية",
    t("ChatCard.AIAgent") || "وكيل الذكاء الاصطناعي",
    t("ChatCard.AIOperations") || "التشغيل الذكي بالذكاء الاصطناعي",
    t("ChatCard.blockchainStorage") || "تخزين البيانات بتقنية البلوك تشين",
    t("ChatCard.ITServices") || "خدمات تكنولوجيا المعلومات (IT Services)",
    t("ChatCard.cyberConsult") || "استشارات الأمن السيبراني",
    t("ChatCard.techConsult") || "استشارات البرمجيات والتقنية",
    t("ChatCard.projectManagement") || "إدارة المشاريع التقنية",
  ];

  function openChat() {
    setView("chat");
  }

  function sendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), from: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          from: "bot",
          text: `${t("ChatCard.autoReply") || "رد تلقائي على:"} “${userMsg.text}”`,
        },
      ]);
    }, 700);
  }

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className={`px-1 py-4 md:p-0 flex justify-center ${isArabic ? "text-right" : "text-left"}`}>
      {view === "card" && (
        <div className="relative flex flex-col justify-between w-full max-w-[921px] h-[469px] md:h-[727px] rounded-[30px] md:rounded-[50px] bg-black p-6 md:p-10">
          <Image
            src="/assets/images/frame.png"
            alt={t("ChatCard.frameAlt") || "chat"}
            height={921}
            width={727}
            className="absolute top-[-10%] left-[-7%] w-[114%] h-[120%] max-w-[unset]"
          />

          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/assets/icons/viganium-logo.svg"
              alt={t("ChatCard.logoAlt") || "chat"}
              height={72}
              width={72}
              className="w-[45px] h-[45px] md:w-[72px] md:h-[72px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />

            <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
              <p className="font-bold text-[14px] md:text-[20px] leading-[24px] md:leading-[29px] text-center text-[#E8E8E8]">
                {t("ChatCard.introText") || "اهلا بيك في الشات الألي المدعوم باذكاء الإصطناعي"}
              </p>
              <Image
                src="/assets/icons/hand.svg"
                alt="hand"
                height={18}
                width={18}
                className="w-[18px] h-[18px] md:w-[34px] md:h-[34px]"
              />
            </div>

            <h3 className="font-semibold text-[20px] md:text-[40px] leading-[34px] md:leading-[57px] text-center text-[#FDFFFC]">
              {t("ChatCard.helpTitle") || "كيف يمكنني مساعدتك ؟"}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 max-w-[710px] justify-center mx-auto mt-6 z-50">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => openChat()}
                className={`${isArabic ? "md:text-[16px]" : "md:text-[12px]"} cursor-pointer flex justify-center items-center py-1 px-3 md:px-4 gap-[6px] md:gap-[10px] w-[140px] md:w-[228px] h-[34px] bg-white rounded-[20px] font-medium text-[10px]  leading-[20px] md:leading-[23px] text-secondry`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-6 md:mt-4 cursor-pointer border-t border-[#FEFEFE] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-4 md:p-[33px]">
            <button
              onClick={() => setView("chat")}
              className="flex flex-row items-center gap-2"
            >
              <Image
                src="/assets/icons/pin.svg"
                alt="chat"
                height={24}
                width={24}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              <span className={`font-semibold text-[16px] md:text-[24px] leading-[26px] md:leading-[34px] text-white ${isArabic ? "text-right placeholder:text-right" : "text-left placeholder:text-left"}`}>
                {t("ChatCard.askQuestion") || "اسألني اي سؤال تريده ؟"}
              </span>
            </button>
          </div>
        </div>
      )}

      {view === "chat" && (
        <div className="relative flex flex-col justify-between  w-full max-w-[921px] h-[469px] md:h-[727px] rounded-[30px] md:rounded-[50px] bg-black p-6 md:p-10">
          <Image
            src="/assets/images/frame.png"
            alt={t("ChatCard.frameAlt") || "chat"}
            height={921}
            width={727}
            className="absolute top-[-10%] left-[-7%] w-[114%] h-[120%] max-w-[unset]"
          />
          <div
            ref={messagesContainerRef}
            className="p-0 pt-10 md:p-10 flex-1 overflow-y-auto overscroll-contain space-y-3 z-40"
          >
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className="p-3 md:p-4 w-fit max-w-[80%] bg-white border border-[#E8E8E8] rounded-[12px] md:rounded-[30px]">
                  <p className={`font-medium text-[14px] md:text-[20px] ${m.from === "user" ? "text-right" : "text-left"} text-secondry-200`}>
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage}>
            <div className="border-t border-[#FEFEFE] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-4 md:p-[33px]">
              <div className="flex items-center gap-2">
                <Image src="/assets/icons/pin.svg" alt="chat" height={24} width={24} />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={`flex-1 bg-transparent font-semibold text-[16px] md:text-[24px] ${isArabic ? "text-right placeholder:text-right" : "text-left placeholder:text-left"} text-white placeholder:text-white outline-none`}
                  placeholder={t("ChatCard.askQuestion") || "اسألني اي سؤال تريده ؟"}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
