// src/i18n/server.ts
import "server-only";
import arTranslation from "@/locales/ar/translation.json";
import enTranslation from "@/locales/en/translation.json";
import { defaultLocale } from "@/constants/routes";

const translations: Record<string, Record<string, any>> = {
  ar: arTranslation,
  en: enTranslation,
};

export function getTranslation(locale: string) {
  const dict = translations[locale] || translations[defaultLocale];
  
  return (key: string) => {
    return key.split('.').reduce((obj, k) => obj?.[k], dict) || key;
  };
}
