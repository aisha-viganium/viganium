"use client";

import React from "react";
import TopFilter from "./TopFilter";
import { ServiceCard } from "@/components/ServiceCard";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";

export default function ServicesFilter({ services }: { services: any[] }) {
  const [selectedFilter, setSelectedFilter] = React.useState<string>("كل الخدمات");

  const filteredServices =
    selectedFilter === "كل الخدمات"
      ? services
      : services.filter((s) => s.tags.includes(selectedFilter));

  return (
    <>
      <TopFilter onFilterChange={setSelectedFilter} />

      <div className="mt-0 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
        {filteredServices.map((service, index) => {
          const columns = 3;
          const row = Math.floor(index / columns);
          const col = index % columns;
          const customMap = [1, 2, 3];
          const custom = customMap[col] ?? 1;

          return (
            <AnimatedSection
              key={service.id}
              variants={slideFromTopBounce}
              custom={custom + row * 3}
            >
              <ServiceCard service={service} />
            </AnimatedSection>
          );
        })}
      </div>
    </>
  );
}
