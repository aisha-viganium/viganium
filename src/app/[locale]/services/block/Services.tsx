"use client";

import React from "react";
import { ServiceCard } from "@/components/ServiceCard";
import TopFilter from "./TopFilter";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";


export default function Services() {
    const services = [
        {
            id: 1,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        }, {
            id: 2,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        },
        {
            id: 3,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        },
        {
            id: 4,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        },
        {
            id: 5,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        },
        ,
        {
            id: 6,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        },
        ,
        {
            id: 7,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        },
        ,
        {
            id: 8,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        },
        ,
        {
            id: 9,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/service-1.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description:
                "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في ",
        },
    ]

    return (
        <section className="p-8 md:p-16 bg-[#1A1A1A]">
            <div className="container mx-auto">
                <AnimatedSection variants={slideFromTopBounce} className="border-r-[20px] border-r-[#F9C751] pr-4 mb-6">
                    <p className="max-w-[796px] font-bold text-[32px] md:text-[48px] leading-[45px] md:leading-[69px] text-right text-white">
                        الخدمات
                    </p>
                </AnimatedSection>

                <AnimatedSection variants={slideFromTopBounce}>
                    <TopFilter />
                </AnimatedSection>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.filter(Boolean).map((service, index) => {
                        if (!service) return null;

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


            </div>
        </section>
    );
}
