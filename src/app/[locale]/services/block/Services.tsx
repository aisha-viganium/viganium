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
        <section className="py-5 md:py-16 px-2 md:px-5 bg-[#1A1A1A]">
            <div className="container mx-auto">
                <AnimatedSection className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px]">
                    <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-white">
                        الخدمات
                    </p>
                    <TopFilter />

                </AnimatedSection>
                <div className="mt-0 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
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
