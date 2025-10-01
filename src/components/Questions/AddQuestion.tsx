"use client";
import { useQuestionForm } from "@/hooks/useQuestionForm";
import Image from "next/image";
import { useState, useEffect } from "react";
import Popup from "@/components/Popup";
import { useTranslation } from "react-i18next";

export default function AddQuestion() {
  const { question, setQuestion, status, handleSubmit } = useQuestionForm();
  const [showPopup, setShowPopup] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  useEffect(() => {
    if (status.isSuccess) {
      setShowPopup(true);
    }
  }, [status.isSuccess]);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:max-w-[80%]">
        <label
          className={`${isArabic ? "text-right" : "text-left"} font-bold text-[20px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[40px] lg:leading-[51px]  text-secondry-200`}
          htmlFor="question"
        >
          {t("ServiceDetailPage.AddQuestion.label")}
        </label>

        <div className="flex md:flex-row items-stretch md:items-center w-full">
          <input
            type="text"
            id="question"
            placeholder={t("ServiceDetailPage.AddQuestion.placeholder")}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={`${isArabic ? "md:rounded-r-[8px] rounded-l-none" : "md:rounded-l-[8px] rounded-r-none"} flex-1 p-4 h-[57px] bg-[#1A1A1A] border border-[#C2C2C2] rounded-lg  font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] text-white placeholder:text-white`}
          />
          <button
            type="submit"
            disabled={status.isSubmitting}
            className={`cursor-pointer flex justify-center w-[15%] md:w-[10%] h-[57px] bg-[#BD171D] rounded-lg  ${isArabic ? "md:rounded-l-lg rounded-r-none" : "md:rounded-r-lg rounded-l-none"}`}
          >
            <Image
              src="/assets/icons/arrow-left-white.svg"
              alt=""
              width={18}
              height={18}
              className={`${isArabic ? "" : "rotate-y-180"}`}

            />
          </button>
        </div>

        {status.message && (
          <p className={`text-sm ${status.isError ? "text-red-600" : "text-green-600"}`}>
            {status.message}
          </p>
        )}
      </form>

      {showPopup && (
        <Popup
          image="/assets/images/Q&A.png"
          title={t("ServiceDetailPage.AddQuestion.successTitle")}
          paragraph={t("ServiceDetailPage.AddQuestion.successParagraph")}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
