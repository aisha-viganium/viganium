import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: number | string;
  name: string;
  description: string;
  image: string;
};

export function BlogCard({ blog, locale }: { blog: Blog; locale: string; }) {
  const isArabic = locale === "ar";

  return (
    <div className="flex flex-col items-end p-4 md:p-6 gap-6 md:gap-8 min-h-[400px] md:min-h-[427px] bg-[#F3F3F3] rounded-[8px]">
      <Link href={`blogs/${blog.id}`}>
        <div className="relative w-full h-[250px] 2xl:h-[400px]">
          <Image
            width={380}
            height={380}
            src={blog.image}
            alt={blog.name}
            className="w-full h-[257px] md:h-full rounded-lg object-cover"
            unoptimized
          />
        </div>

        <div className="p-2 md:p-3 text-right">
          <h3 className={`
                        font-bold text-[20px] leading-[29px] text-secondry
                        md:text-[32px] md:leading-[46px] 
                        ${isArabic ? "text-right" : "text-left"}
                      `}>
            {blog.name}
          </h3>
          <p
            className={`
                    font-medium text-[14px] leading-[20px]
                    md:text-[20px] md:leading-[29px] 
                    text-secondry-200 my-5
                    ${isArabic ? "text-right" : "text-left"}
                  `}
          >
            {blog.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
