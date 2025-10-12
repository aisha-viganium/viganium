"use client";

import React from "react";
import TopFilter from "./TopFilter";
import { ServiceCard } from "@/components/ServiceCard";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";
import { useSearchParams } from "next/navigation";

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
  const [selectedFilter, setSelectedFilter] = React.useState<number>(filterFromUrl);

  React.useEffect(() => {
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
      <TopFilter onFilterChange={handleFilterChange} />

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
