import React from "react";
import { BlogCard } from "@/components/BlogCard";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";


export default async function Page() {
    const blogs = [
        {
            id: 1,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
        {
            id: 2,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
        {
            id: 3,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
        {
            id: 4,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
        {
            id: 5,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
        {
            id: 6,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
        {
            id: 7,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
        {
            id: 8,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
        {
            id: 9,
            name: "تطوير البرمجيات المخصصة",
            image: "/assets/images/blog.png",
            tags: ["تصميم مواقع", "تطوير مواقع", "تسويق الكتروني"],
            description: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في "
        },
    ]
    return (
        <>
            <section className="py-5 md:py-16 px-2 md:px-5 bg-[#F8F8F8]">
                <div className="container mx-auto">
                    <AnimatedSection className="border-r-[13px] md:border-r-[20px] border-r-[#F9C751] pr-2 md:pr-4 min-h-[33px] flex items-center">
                        <p className=" max-w-[796px] 
                        text-right 
                        text-[14px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
                        leading-[100%] md:leading-[42px] lg:leading-[52px] xl:leading-[69px] 
                        font-bold 
                        text-[#1A1A1A]">
                            المقالات
                        </p>

                    </AnimatedSection>
                    <main className="mt-0 md:mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 ">
                            {blogs.filter(Boolean).map((blog, index) => {
                                if (!blog) return null;

                                const columns = 3;
                                const row = Math.floor(index / columns);
                                const col = index % columns;
                                const customMap = [1, 2, 3];
                                const custom = customMap[col] ?? 1;

                                return (
                                    <AnimatedSection
                                        key={blog.id}
                                        variants={slideFromTopBounce}
                                        custom={custom + row * 3}
                                    >
                                        <BlogCard key={blog.id} blog={blog} />
                                    </AnimatedSection>
                                );
                            })}
                        </div>

                    </main>
                </div>

            </section>

        </>
    );
}
