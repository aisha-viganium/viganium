"use client";
import React from "react";
import Image from "next/image";
import AnimatedSection, { deckShuffle } from "@/animation/AnimatedSection";
import Youtube from "@/assets/SVG/social/Youtube";
import Tiktok from "@/assets/SVG/social/Tiktok";
import Facebook from "@/assets/SVG/social/Facebook";
import Snap from "@/assets/SVG/social/Snap";
import Linkedin from "@/assets/SVG/social/Linkedin";
import ArrowUp from "@/assets/SVG/ArrowUp";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const socialLinks = [
    { name: "youtube", url: "https://www.youtube.com/add/rentalgate", icon: <Youtube className="w-[32px] h-[32px] md:w-[50px] md:h-[32.5px] 2xl:w-[60px] 2xl:h-[42.5px]" /> },
    { name: "tiktok", url: "https://www.tiktok.com/add/rentalgate", icon: <Tiktok className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] 2xl:w-[48px] 2xl:h-[48px]" /> },
    { name: "facebook", url: "https://www.facebook.com/rentalgate", icon: <Facebook className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] 2xl:w-[48px] 2xl:h-[48px]" /> },
    { name: "snap", url: "https://www.snap.com/company/rental-gate", icon: <Snap className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] 2xl:w-[48px] 2xl:h-[48px]" /> },
    { name: "linkedin", url: "https://www.linkedin.com/company/rental-gate", icon: <Linkedin className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] 2xl:w-[48px] 2xl:h-[48px]" /> },
  ];

  const Companies = [
    { name: "microsoft", icon: "/assets/icons/companies/microsoft-partner.svg" },
    { name: "oracle", icon: "/assets/icons/companies/oracle-partner.svg" },
    { name: "zoho", icon: "/assets/icons/companies/zoho-partner.svg" },
  ];

  return (
    <div className="py-16 px-[10px] md:px-[64px] bg-[#1A1A1A]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mx-auto">

        <AnimatedSection variants={deckShuffle} custom={0} className={`flex flex-col gap-8 ${isArabic ? "items-start text-right" : "items-start text-left"}`}>
          <h3
            className="font-semibold font-brando-semibold text-[24px] md:text-[35px] leading-[35px] md:leading-[57px] text-[#D9D9D9]"
            style={{
              textShadow: `
                -1px -1px 0 #FFFFFF,  
                1px -1px 0 #FFFFFF,
                -1px  1px 0 #FFFFFF,
                1px  1px 0 #FFFFFF
              `,
            }}
          >
            {t("Footer.contactTitle")}
          </h3>
          <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-[#D9D9D9]">
            {t("Footer.contactDescription")}
          </p>
          <a
            href="mailto:Hello@viganuim.com"
            className="flex flex-row items-center gap-3 transition-all duration-300 group hover:text-primary mt-5"
          >
            <span className="font-aileron font-medium text-xl md:text-[24px] text-white group-hover:text-primary transition-colors duration-300">
              Hello@viganuim.com
            </span>
            <ArrowUp className={`w-[10px] h-auto md:w-[21px] text-white transition-transform duration-300 group-hover:text-primary ${isArabic ?"group-hover:rotate-[-45deg]":"rotate-y-[180deg] group-hover:rotate-[45deg]"} `} />
          </a>
        </AnimatedSection>

        <AnimatedSection variants={deckShuffle} custom={1} className={`flex flex-col gap-8 ${isArabic ? "items-start text-right" : "items-start text-left"}`}>
          <h3 className="font-semibold font-brando-semibold text-[24px] md:text-[40px] text-[#D9D9D9]">
            {t("Footer.socialTitle")}
          </h3>
          <p className="text-sm md:text-[16px] leading-[22px] md:leading-[25px] text-[#D9D9D9]">
            {t("Footer.socialDescription")}
          </p>
          <div className="flex flex-wrap gap-8 md:gap-5 2xl:gap-16">
            {socialLinks.map((link, idx) => (
              <a href={link.url} key={idx} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection variants={deckShuffle} custom={2} className={`flex flex-col gap-8 ${isArabic ? "items-start text-right" : "items-start text-left"}`}>
          <h3 className="font-semibold font-brando-semibold text-[24px] md:text-[40px] text-[#D9D9D9]">
            {t("Footer.partnersTitle")}
          </h3>
          <p className="text-sm md:text-[16px] leading-[22px] md:leading-[25px] text-[#D9D9D9]">
            {t("Footer.partnersDescription")}
          </p>
          <div className="flex gap-5">
            {Companies.map((c, idx) => (
              <Image
                key={idx}
                src={c.icon}
                alt={c.name}
                width={77}
                height={77}
                className="w-[53px] h-[53px] md:w-[77px] md:h-[77px]"
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
