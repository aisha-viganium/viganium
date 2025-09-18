import React from "react";
import Links from "./blocks/Links";
import NavBarActions from "./blocks/NavBarActions";
import Image from "next/image";
import Link from "next/link";

export default async function NavBar() {
  return (
    <nav className="absolute top-0 w-full flex flex-row justify-between items-center p-2 gap-4 h-[121px] z-100">
      <NavBarActions />
      <Link href="/">
      <Image src="/assets/logo.svg" alt="Logo" width={293} height={40} className="w-[120px] md:w-[293.59px] h-auto" />
      </Link>
      <Links />

    </nav>
  );
}
