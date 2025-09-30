type TranslationValue = string | number | { [key: string]: TranslationValue } | TranslationValue[];
type Translations = Record<string, TranslationValue>;

import arTranslation from "@/locales/ar/translation.json";
import enTranslation from "@/locales/en/translation.json";
import { defaultLocale } from "@/constants/routes";

const translations: Translations = {
  ar: arTranslation,
  en: enTranslation,
};

export function getTranslation(locale: string) {
  const dict = translations[locale] || translations[defaultLocale];

  return (key: string): string => {
    const value = key.split('.').reduce<TranslationValue | undefined>(
      (obj, k) => (typeof obj === "object" && obj !== undefined ? (obj as { [key: string]: TranslationValue })[k] : undefined),
      dict as TranslationValue
    );
    return typeof value === "string" ? value : key;
  };
}
