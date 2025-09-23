import React from "react";
import Links from "./blocks/Links";
import NavBarActions from "./blocks/NavBarActions";
import Image from "next/image";
import Link from "next/link";
// import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function NavBar() {
  return (
    <nav className="absolute top-0 w-full flex flex-row justify-between items-center p-2 gap-4 h-[50px] md:h-[121px] z-100">
      <NavBarActions />
      <Link href="/">
      <Image src="/assets/logo.svg" alt="Logo" width={293} height={40} className="w-[100px] md:w-[293.59px] h-auto" />
      </Link>
      <Links />
{/* <LanguageSwitcher /> */}
    </nav>
  );
}
