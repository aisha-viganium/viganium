// i18n/config.ts

export const defaultNS = "translation";
// خلي اللغة الافتراضية English أو Arabic حسب ما تحبى
export const fallbackLng = "en";  

export const languages = ["en", "ar"];

export const i18nOptions = {
  supportedLngs: languages,
  fallbackLng,
  defaultNS,
  ns: [defaultNS],
  preload: languages,
  interpolation: {
    escapeValue: false,
  },
};

export function getOptions(lng?: string, ns = "translation") {
  return {
    supportedLngs: languages,
    fallbackLng,
    ...(lng ? { lng } : {}),
    ns: [ns],
    defaultNS: ns,
  } as const;
}

// Next.js App Router passes params directly (not a Promise). Keep this simple and correct.
export interface PageProps {
  params: { locale: string };
}
