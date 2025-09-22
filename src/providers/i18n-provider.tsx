"use client";

import "@/i18n/client";

import { useEffect } from "react";
import i18n from "@/i18n/client";

export default function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale?: string;
}) {
  useEffect(() => {
    if (locale) {
      i18n.changeLanguage(locale).catch(() => {});
    }
  }, [locale]);

  return <>{children}</>;
}
