"use client";
import React, { useEffect, useState } from "react";
import Links from "./blocks/Links";
import NavBarActions from "./blocks/NavBarActions";
import Logo from "../../assets/SVG/Logo";
import Link from "next/link";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // بعد 50px من النزول يبدأ يتغير
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 px-2 md:px-16 w-full flex flex-row justify-between items-center p-2 gap-4 h-[50px] md:h-[121px] z-[100] transition-all duration-300 ${
        scrolled ? "bg-black/90" : "bg-transparent"
      }`}
    >
      <NavBarActions  />
      <Link href="/">
        <Logo
          width={293}
          height={40}
          className="w-[150px] md:w-[493.59px] h-auto"
          fillColor={scrolled ? "#000000" : "#FDFFFC"} 
        />
      </Link>
      <Links/>
    </nav>
  );
}
