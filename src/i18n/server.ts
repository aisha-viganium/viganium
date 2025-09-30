import "server-only";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import Backend from "i18next-fs-backend";
import path from "path";
import { defaultLocale, locales } from "@/constants/routes";

export async function getTranslation(locale: string) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(Backend)
    .init({
      fallbackLng: defaultLocale,
      lng: locale,
      supportedLngs: locales,
      backend: {
        loadPath: path.resolve("./public/locales/{{lng}}/{{ns}}.json"),
      },
      ns: ["translation"],
      defaultNS: "translation",
      interpolation: {
        escapeValue: false,
      },
    });

  return i18nInstance.getFixedT(locale); // ✅ function
}

