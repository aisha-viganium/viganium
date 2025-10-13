"use client";
import React, { useEffect, useState } from "react";
import Links from "./blocks/Links";
import NavBarActions from "./blocks/NavBarActions";
import Logo from "../../assets/SVG/Logo";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-500 top-0 px-2 md:px-16 w-full flex flex-row justify-between items-center p-2 gap-4 h-[50px] md:h-[121px] transition-all duration-300 ${scrolled ? "bg-black/90" : "bg-transparent"
        }`}
    >
      <div className="hidden md:flex">
        <NavBarActions />
      </div>
      <Link href={`/${currentLocale}`}>
        <Logo
          width={374}
          height={81}
          className="w-[112px] md:w-[274px] 2xl:w-[374px] h-auto"
          fillColor={scrolled ? "#000000" : "#FDFFFC"}
        />
      </Link>
      <Links />
    </nav>
  );
}
