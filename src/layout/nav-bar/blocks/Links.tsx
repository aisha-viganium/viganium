"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function SidebarNavbar() {

  const [path, setPath] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "الخدمات" },
    { href: "/team-work", label: "البيئة و فريق العمل" },
    { href: "/blogs", label: "المدونات" },
    { href: "/contact-us", label: "التواصل معنا" },
  ];

  const sliderItems = [
    { label: "الغزال - لتأجير السيارات", image: "/assets/images/rental.jpg" },
    { label: "رينتال جيت - لتأجير السايرات", image: "/assets/images/website.jpg" },
    { label: "المقام - لتأجير السيارات", image: "/assets/images/rental.jpg" },
    { label: "بلد الوليد -للموقاولات العقارية", image: "/assets/images/website.jpg" },
    { label: "كلين تكنيك - لخدمات النظافة", image: "/assets/images/rental.jpg" },
  ];


  return (
    <div className="relative z-100">
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 text-gray-700 hover:text-primary focus:outline-none cursor-pointer"
      >
        <Image src="/assets/icons/menue.svg" alt="Menu" width={40} height={40} className="w-[24px] h-[24px] md:w[40px] md:h-[40px]" />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      <div
        className={`overflow-y-auto fixed top-0 left-0 w-full h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex justify-between items-center px-6 md:px-16 py-6">
          <Image
            src="/assets/icons/logo-dark.svg"
            alt="Logo"
            width={180}
            height={45}
            className="h-auto w-[180px] md:w-[250px]"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#1A1A1A] hover:text-red-500 text-xl cursor-pointer"
          >
            <Image src="/assets/icons/close.svg" alt="Close" width={32} height={32} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-auto md:h-[calc(100%-80px)]">
          <div className="w-full md:w-1/3 px-6 md:pr-16 flex flex-col py-8  space-y-2 gap-2 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setPath(link.href);
                  setIsOpen(false);
                }}
                className={`group relative block py-2 font-semibold text-2xl md:text-[40px] lg:text-[64px] leading-snug transition-colors
        ${path === link.href ? "text-primary" : "text-[#1A1A1A] hover:text-primary"}
      `}
              >
                {link.label}
                <span
                  className={`absolute right-[-20px] top-1/2 -translate-y-1/2 w-3 h-3 md:w-5 md:h-5 rounded-full bg-primary transition-opacity duration-300
          ${path === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
                />
              </Link>
            ))}

          </div>

          <div className="w-full md:w-2/3 mt-6 md:mt-0">
            <div className="flex flex-col lg:flex-row gap-6 p-6 md:p-8 bg-[#F4F6F9] rounded-lg">
              <div className="flex flex-col justify-between lg:w-1/3">
                <h3 className="flex justify-center align-center gap-4 font-medium text-xl md:text-2xl lg:text-[32px] underline text-center text-[#1A1A1A] mb-4">
                  <span> سابقة الأعمال</span>
                  <Image
                    src="/assets/icons/arrow-up-left-black.svg"
                    alt="arrow"
                    width={28}
                    height={32}

                  />
                </h3>
                <div className="flex flex-col items-center gap-4">
                  {sliderItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`cursor-pointer text-sm md:text-base lg:text-lg transition-colors ${activeSlide === index ? "text-primary font-bold" : ""
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src={sliderItems[activeSlide].image}
                  alt={sliderItems[activeSlide].label}
                  width={500}
                  height={300}
                  className="object-cover rounded-lg w-full max-h-[300px]"
                />
              </div>
            </div>

            <div className="mt-8 p-4 flex flex-col md:flex-row gap-6 justify-center align-center">
              <div className="flex-1">
                <div className="relative group w-full h-[250px] md:h-[375px] rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={`/assets/images/contact-us-nav.png`}
                    alt={`Contact`}
                    fill
                    className="absolute object-cover rounded-[8px]"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white font-bold text-lg">التواصل معنا</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center align-center gap-4">
                <h3 className="flex justify-center align-center gap-4 font-medium text-xl md:text-[32px] underline text-center text-[#1A1A1A] mb-4">
                  <Image
                    src="/assets/icons/arrow-up-right-black.svg"
                    alt="arrow"
                    width={28}
                    height={32}
                  />
                  <span> التواصل معنا</span>

                </h3>
                <a
                  href="mailto:info@viganium.com"
                  className="mt-5 font-200 text-sm md:text-[24px] text-center"
                >
                  info@viganium.com
                </a>
                <div className="flex gap-[32px] mt-2 justify-center md:justify-center">
                  {["snap", "x", "insta", "face", "linkedin"].map((icon, idx) => (
                    <a key={idx} href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src={`/assets/icons/social/${icon}-dark.svg`}
                        alt={icon}
                        width={32}
                        height={32}
                        className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]"
                      />
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
