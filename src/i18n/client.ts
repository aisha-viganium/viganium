// src/i18n/i18n-client.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { getOptions } from "./config";

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...getOptions(),
      debug: true, // خليها true للمساعدة في معرفة الأخطاء
      detection: {
        order: ["cookie", "htmlTag"],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    });
}

export default i18n;
