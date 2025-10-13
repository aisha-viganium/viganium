import React from "react";
import PreviousWork from "./PreviousWork";
import { getTranslation } from "@/i18n/server"; 

export default async function Page({ params }: { params: { locale: string } }) {
  const locale = params?.locale || "ar";
  const t = getTranslation(locale);
  return (
    <>
      <PreviousWork />
    </>
  );
}
