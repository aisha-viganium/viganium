'use client'
import { useQuestionForm } from "@/hooks/useQuestionForm";
import Image from "next/image";

export default function AddQuestion() {
  const { question, setQuestion, status, handleSubmit } = useQuestionForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:max-w-[80%]">
      <label
        className="font-bold text-[20px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[40px] lg:leading-[51px] text-right text-[#414141]"
        htmlFor="question"
      >
        اي السؤال الي عاوز تساله
      </label>

      <div className="flex md:flex-row items-stretch md:items-center w-full">
        <input
          type="text"
          id="question"
          placeholder="أكتب سؤالك هنا"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1 p-4 h-[57px] bg-[#1A1A1A] border border-[#C2C2C2] rounded-lg md:rounded-r-[8px] rounded-l-none font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] text-white placeholder:text-white"
        />
        <button
          type="submit"
          disabled={status.isSubmitting}
          className="flex justify-center w-[15%] md:w-[10%] h-[57px] bg-[#BD171D] rounded-lg md:rounded-l-lg rounded-r-none"
        >
          <Image
            src="/assets/icons/arrow-left-white.svg"
            alt=""
            width={18}
            height={18}
          />
        </button>
      </div>

      {status.message && (
        <p className={`text-sm ${status.isError ? "text-red-600" : "text-green-600"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
