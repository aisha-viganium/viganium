// i18n/config.ts
export const defaultNS = "translation";
export const fallbackLng = "ar";

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
  // only include `lng` if it was passed so the client-side language detector can work
  return {
    supportedLngs: ["en", "ar"],
    fallbackLng: "ar",
    ...(lng ? { lng } : {}),
    ns: [ns],
    defaultNS: ns,
  } as const;
}

// Next.js App Router passes params directly (not a Promise). Keep this simple and correct.
export interface PageProps {
  params: { locale: string };
}
