"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/i18n/client";
import { useTranslation } from "react-i18next";
import ArrowUpBlack from "@/assets/SVG/ArrowUpBlack";
import SnapNav from "@/assets/SVG/social/SnapNav";
import FaceNav from "@/assets/SVG/social/FaceNav";
import LinkedinNav from "@/assets/SVG/social/LinkedinNav";
import InstaNav from "@/assets/SVG/social/InstaNav";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function SidebarNavbar() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBall, setActiveBall] = useState<number | null>(null);
  const currentLocale = i18n.language;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { href: `/${currentLocale}`, label: t("NavbarSection.Navbar.home") },
    { href: `/${currentLocale}/services`, label: t("NavbarSection.Navbar.services") },
    { href: `/${currentLocale}/team-work`, label: t("NavbarSection.Navbar.teamWork") },
    { href: `/${currentLocale}/blogs`, label: t("NavbarSection.Navbar.blogs") },
    { href: `/${currentLocale}/contact-us`, label: t("NavbarSection.Navbar.contact") },
  ]
  const slideVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  const sliderItems = [
    { label: t("NavbarSection.Projects.item1"), image: "/assets/images/previous-work/Ghazal.png" },
    { label: t("NavbarSection.Projects.item2"), image: "/assets/images/previous-work/Rental-gate.png" },
    { label: t("NavbarSection.Projects.item3"), image: "/assets/images/previous-work/Clean-Technique.png" },
  ];

  const socialLinks = [
    { name: "snap", url: "https://www.snap.com/add/rentalgate", icon: <SnapNav className="w-[16px] h-[16px]" /> },
    { name: "insta", url: "https://www.insta.com/add/rentalgate", icon: <InstaNav className="w-[16px] h-[16px]" /> },
    { name: "facebook", url: "https://www.facebook.com/rentalgate", icon: <FaceNav className="w-[16px] h-[16px]" /> },
    { name: "linkedin", url: "https://www.linkedin.com/company/rental-gate", icon: <LinkedinNav className="w-[16px] h-[16px]" /> }
  ];

  const ballShapes = {
    normal: (
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 15.8532C32 24.6087 24.8366 36 16 36C7.16344 36 0 24.6087 0 15.8532C0 7.09772 7.16344 0 16 0C24.8366 0 32 7.09772 32 15.8532Z" fill="#BD171D" />
      </svg>
    ),
    squashed: (
      <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 15.8182C32 24.5543 24.8366 29 16 29C7.16344 29 0 24.5543 0 15.8182C0 7.08204 7.16344 0 16 0C24.8366 0 32 7.08204 32 15.8182Z" fill="#BD171D" />
      </svg>
    ),
    round: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="#BD171D" />
      </svg>
    )
  };

  const handleMouseEnter = (index: number) => {
    setActiveBall(index);
  };

  const handleMouseLeave = () => {
    setActiveBall(null);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 text-gray-700 hover:text-primary focus:outline-none cursor-pointer"
      >
        <Image src="/assets/icons/menue.svg" alt="Menu" width={50} height={50} className="w-[24px] h-[24px] md:w-[50px] md:h-[50px]" />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      <div className={`overflow-y-auto md:overflow-y-hidden fixed top-0 ${isArabic ? "right-0" : "left-0"} md:left-0  md: right-unset w-[80%] md:w-full h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0 md:translate-y-0 md:translate-x-[unset]" : ` ${isArabic ? "translate-x-full" : "-translate-x-full"} md:translate-x-[unset] md:-translate-y-full`} `} >

        <div className="flex col-span-1  justify-end md:justify-between items-center px-4 md:px-8 pt-4 ">
          <Image
            src="/assets/icons/logo-dark.svg"
            alt="Logo"
            width={180}
            height={45}
            className="hidden md:block h-auto w-[180px] md:w-[293px]"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-secondry hover:text-primary text-xl cursor-pointer"
          >
            <Image src="/assets/icons/close.svg" alt="Close" width={50} height={50} className="w-[31px] h-[31px] md:w-[50px] md:h-[50px]" />
          </button>
        </div>

        <div className="flex  flex-col md:flex-row h-auto justify-between">
          <div className="w-full 2xl:w-1/2 flex flex-col gap-[32px] 2xl:gap-[52px] pt-[32px] 2xl:pt-[102px]">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                locale={i18n.language}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
                className={`group text-secondry hover:text-primary relative flex items-center transition-all duration-800 hover:translate-x-2 overflow-hidden h-auto md:h-[100px]`}
              >
                <div className="hidden lg:flex w-8 h-10 items-center justify-center">
                  <div className={`relative transition-all duration-800 translate-y-[-100px] ${activeBall === index ? 'animate-bounce-ball' : ''
                    }`}>
                    <div className={`absolute transition-opacity duration-800 ${activeBall === index ? 'opacity-0' : 'opacity-100'
                      }`}>
                      {ballShapes.normal}
                    </div>

                    <div className={`absolute transition-opacity duration-800 ${activeBall === index ? 'opacity-100 delay-100' : 'opacity-0'
                      }`}>
                      {ballShapes.squashed}
                    </div>

                    <div className={`absolute transition-opacity duration-800 ${activeBall === index ? 'opacity-100 delay-300' : 'opacity-0'
                      }`}>
                      {ballShapes.round}
                    </div>
                  </div>
                </div>

                <span className={`
                                text-[24px]
                                md:font-bold md:font-brando-bold 
                                md:text-[26px]  
                                2xl:text-[48px] 
                                leading-auto
                                text-center 
                                capitalize 
                                 hover:text-primary
                                transition-colors duration-300 ${isArabic ? "mr-10" : "ml-5"} `}>
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="block md:hidden">
              <LanguageSwitcher />
            </div>
          </div>


          <div className="w-full 2xl:w-1/2 md:mt-0 flex-col gap-[32px] hidden md:flex justify-end items-end px-8 2xl:pt-8">
            <div className="flex flex-col lg:flex-row gap-6 p-6 md:py-8 bg-[#F4F6F9] rounded-lg md:h-[339px] md:w-[713px] 2xl:h-[439px] 2xl:w-[913px]">
              <div className="w-[296px]">
                <h3 className="font-el-messiri group flex justify-center align-center gap-1 md:gap-2 font-medium md:text-[26px] 2xl:text-[32px]  underline text-center text-secondry hover:text-primary mb-4">
                  <span>  {t("NavbarSection.Projects.title")} </span>
                  <ArrowUpBlack className="w-[12px] md:w-[28px] mt-0 md:mt-[10px] rotate-245 transition-transform duration-300  group-hover:rotate-[215deg] fill-[#1A1A1A] group-hover:fill-primary" />
                </h3>
                <div className="flex flex-col items-center gap-5 mt-5 md:mt-10 ">
                  {sliderItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`cursor-pointer font-semibold font-brando-semibold text-sm md:text-[16px] lg:text-lg transition-colors ${activeSlide === index ? "text-primary font-bold" : ""
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className=" flex items-center justify-center relative md:w-full md:h-[275px] 2xl:h-[375px] overflow-hidden 2xl:w-[677px] shadow-[0_4px_44px_0_#BC6B6B40]">
                <AnimatePresence>
                  <motion.div
                    key={activeSlide}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full"
                  >
                    <Image
                      src={sliderItems[activeSlide].image}
                      alt={sliderItems[activeSlide].label}
                      width={500}
                      height={300}
                      className="object-cover rounded-lg w-full md:h-[275px]  2xl:h-[375px] "
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6  align-center ">
              <Link href={`/${currentLocale}/contact-us`} onClick={() => setIsOpen(false)}>
                <div className="relative group md:h-[250px] 2xl:h-[375px] md:w-[412px] 2xl:w-[612px] rounded-lg overflow-hidden cursor-pointer shadow-[0_4px_44px_0_#00000040]">
                  <Image
                    src={`/assets/images/contact-us-nav.png`}
                    alt={`Contact`}
                    fill
                    className="absolute object-cover rounded-[8px]  md:h-[250px] 2xl:h-[375px] md:w-[412px] 2xl:w-[612px]"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white font-bold text-[62px]">التواصل معنا</span>
                  </div>
                </div>
              </Link>
              <div className="flex flex-col justify-center align-center gap-1 w-[276px]">
                <h3 className="font-el-messiri group flex justify-center items-center gap-1 md:gap-2 font-medium md:text-[26px] 2xl:text-[32px] underline text-center text-secondry hover:text-primary mb-4">
                  <ArrowUpBlack
                    className=" w-[12px] md:w-[28px] h-auto transition-transform duration-300 group-hover:text-primary group-hover:rotate-[35deg] fill-[#1A1A1A] group-hover:fill-primary"
                  />
                  <span> {t("NavbarSection.Contact.title")}</span>
                </h3>

                <a
                  href="mailto:Hello@viganium.com"
                  className="font-aileron mt-0 md:mt-10 font-400 text-sm md:text-[16px] text-center"
                >
                  Hello@viganium.com
                </a>

                <div className="flex gap-[32px] mt-4 justify-center md:justify-center">
                  {socialLinks.map((link, idx) => (
                    <a href={link.url} key={idx} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
