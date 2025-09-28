'use client';
import { useState } from "react";
import axios from "axios";

export const useQuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!question.trim()) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "من فضلك اكتب سؤالك",
      });
      return;
    }

    setStatus({ isSubmitting: true, isSuccess: false, isError: false, message: "" });

    try {
      const htmlbody = `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>سؤال جديد من الموقع</h2>
          <p><strong>السؤال:</strong></p>
          <p style="background:#f9f9f9; padding:10px; border-radius:6px; border:1px solid #ddd;">
            ${question}
          </p>
        </div>
      `;

      const encodedHtmlBody = encodeURIComponent(htmlbody);

      const res = await axios.post(
        `https://viganium.com/mail_sender_v2.php?data=${encodedHtmlBody}`,
        {},
        { headers: { Accept: "application/json" } }
      );

      if (res.status === 200) {
        setStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: "تم إرسال سؤالك بنجاح ",
        });
        setQuestion("");
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "حصل خطأ، حاول تاني.",
      });
    }
  };

  return { question, setQuestion, status, handleSubmit };
};
