"use client";

import React, { useEffect, useState } from "react";
import TopFilter from "./TopFilter";
import { ServiceCard } from "@/components/ServiceCard";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export interface Service {
  id: number;
  name: string;
  image: string;
  tags: number[];
  tagsDisplayed: string[];
  description: string;
}

export default function ServicesFilter({
  services,
  locale,
}: {
  services: Service[];
  locale: string;
}) {
  const searchParams = useSearchParams();
  const filterFromUrl = Number(searchParams.get("filter")) || 0;
  const [selectedFilter, setSelectedFilter] = useState<number>(filterFromUrl);
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
  useEffect(() => {
    setSelectedFilter(filterFromUrl);
  }, [filterFromUrl]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(Number(filter));
  };

  const filteredServices =
    selectedFilter === 0
      ? services
      : services.filter((s) => s.tags.includes(selectedFilter));

  return (
    <>
              <AnimatedSection variants={slideFromTopBounce} className={` ${isArabic?"border-r-[13px] md:border-r-[36px] border-r-[#F9C751] pr-2 md:pr-4":"border-l-[13px] md:border-l-[20px] border-l-[#F9C751] pl-2 md:pl-4"}  min-h-[33px]`}>
            <p className={`
              max-w-[796px] 
               
              text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
              leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
              font-bold 
              text-white
              ${isArabic?"text-right":"text-left"}`}>
              {t("ServicesPage.ServicesSection.title")}
            </p>
                  <TopFilter onFilterChange={handleFilterChange} />

          </AnimatedSection>

      <div className="mt-0 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        {filteredServices.map((service, index) => {
          const columns = 3;
          const row = Math.floor(index / columns);
          const col = index % columns;
          const custom = col + row + 0.1;

          return (
            <AnimatedSection
              key={service.id}
              variants={slideFromTopBounce}
              custom={custom}
            >
              <ServiceCard service={service} locale={locale} />
            </AnimatedSection>
          );
        })}
      </div>
    </>
  );
}
