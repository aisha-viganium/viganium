
export const defaultNS = "translation";
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

export interface PageProps {
  params: { locale: string };
}
