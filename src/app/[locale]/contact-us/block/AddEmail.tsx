'use client'
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:max-w-[100%]">
        <label className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-secondry-200">
          {t("ContactUsPage.QuestionsSection.Questions.emailLabel")}
        </label>

        <div className="flex md:flex-row items-stretch md:items-center w-full">
          <input
            type="text"
            id="question"
            placeholder={t("ContactUsPage.QuestionsSection.Questions.emailPlaceholder")}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={`${isArabic ? "md:rounded-r-[8px] rounded-l-none" : "md:rounded-l-[8px] rounded-r-none"} outline-none flex-1 p-4 h-[57px] bg-[#1A1A1A] border border-[#C2C2C2] rounded-lg  font-semibold font-brando-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] text-white placeholder:text-white`}
          />
          <button
            type="submit"
            disabled={status.isSubmitting}
            className={`cursor-pointer flex justify-center w-[15%] md:w-[64px] h-[57px] bg-[#BD171D] rounded-lg  ${isArabic ? "md:rounded-l-lg rounded-r-none" : "md:rounded-r-lg rounded-l-none"}`}
          >
            <Image
              src="/assets/icons/arrow-left-white.svg"
              alt="arrow"
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
          image="/assets/images/news.png"
          title={t("ContactUsPage.QuestionsSection.Questions.popupTitle")}
          paragraph={t("ContactUsPage.QuestionsSection.Questions.popupParagraph")}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
