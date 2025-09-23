"use client";
import React from "react";
import Image from "next/image";
import AnimatedSection, { deckShuffle } from "@/animation/AnimatedSection";

export default function Footer() {
  const socialLinks = [
    { name: "youtube", url: "https://www.snapchat.com/add/rentalgate", icon: "/assets/icons/social/youtube.svg" },
    { name: "tiktok", url: "https://www.facebook.com/rentalgate", icon: "/assets/icons/social/tiktok.svg" },
    { name: "facebook", url: "https://www.linkedin.com/company/rental-gate", icon: "/assets/icons/social/facebook.svg" },
    { name: "snap", url: "https://www.linkedin.com/company/rental-gate", icon: "/assets/icons/social/snap.svg" },
    { name: "linkedin", url: "https://www.snapchat.com/add/rentalgate", icon: "/assets/icons/social/linkedin.svg" },
  ];

  const Companies = [
    { name: "microsoft", icon: "/assets/icons/companies/microsoft-partner.svg" },
    { name: "oracle", icon: "/assets/icons/companies/oracle-partner.svg" },
    { name: "zoho", icon: "/assets/icons/companies/zoho-partner.svg" },
  ];

  return (
    <div className="py-16 px-5 bg-[#1A1A1A]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mx-auto ">

        <AnimatedSection variants={deckShuffle} custom={0} className="flex flex-col items-start gap-8">
          <h3 className="font-semibold text-[24px] md:text-[40px] leading-[35px] md:leading-[57px] text-[#D9D9D9]">
            نحن نود ان نسمع منك عن هدفك لتحقيقة
          </h3>
          <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-[#D9D9D9]">
            انطباع عن الشكل النهائي للمحتوى. نص لوريم إيبسوم باللغة العربية مشتق من نص لاتيني كتبه الفيلسوف الروماني شيشرون وقد تم استخدامه منذ ستينيات القرن العشرين
          </p>
          <a
            href="mailto:Hello@viganuim.com"
            className="flex flex-row items-center gap-3 transition-all duration-300 hover:scale-110 hover:text-primary group"
          >
            <span className="font-medium text-xl md:text-[40px] text-white group-hover:text-primary transition-colors duration-300">
              Hello@viganuim.com
            </span>
            <Image
              src="/assets/icons/arrow-up.svg"
              alt=""
              width={30}
              height={30}
              className="w-[18px] h-[18px] md:w-[30px] md:h-[30px] transition-transform duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
            />
          </a>

        </AnimatedSection>

        <AnimatedSection variants={deckShuffle} custom={1} className="flex flex-col items-start gap-8">
          <h3 className="font-semibold text-[24px] md:text-[40px] text-[#D9D9D9]">صفحات التواصل الإجتماعي</h3>
          <p className="text-sm md:text-[16px] leading-[22px] md:leading-[25px] text-[#D9D9D9]">
            انطباع عن الشكل النهائي للمحتوى. نص لوريم إيبسوم باللغة العربية مشتق من نص لاتيني كتبه الفيلسوف الروماني شيشرون وقد تم استخدامه منذ ستينيات القرن العشرين
          </p>
          <div className="flex flex-wrap gap-8 md:gap-16 align-baseline">
            {socialLinks.map((link, idx) => (
              <a href={link.url} key={idx} target="_blank" rel="noopener noreferrer">
                <Image src={link.icon} alt={link.name} width={43} height={43} className="w-[32px] h-[32px] md:w-[43px] md:h-[43px]"/>
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection variants={deckShuffle} custom={2} className="flex flex-col items-start gap-8">
          <h3 className="font-semibold text-[24px] md:text-[40px] text-[#D9D9D9]">شركائنا في الشركات</h3>
          <p className="text-sm md:text-[16px] leading-[22px] md:leading-[25px] text-[#D9D9D9]">
            انطباع عن الشكل النهائي للمحتوى. نص لوريم إيبسوم باللغة العربية مشتق من نص لاتيني كتبه الفيلسوف الروماني شيشرون وقد تم استخدامه منذ ستينيات القرن العشرين
          </p>
          <div className="flex gap-5">
            {Companies.map((c, idx) => (
              <Image key={idx} src={c.icon} alt={c.name} width={77} height={77} className="w-[53px] h-[53px] md:w-[77px] md:h-[77px]"/>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
