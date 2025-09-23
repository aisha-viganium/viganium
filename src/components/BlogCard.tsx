import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: number | string;
  name: string;
  description: string;
  image: string;
};

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col items-end p-4 md:p-6 gap-6 md:gap-8 min-h-[400px] md:min-h-[527px] bg-[#F3F3F3] rounded-[8px]">
      <Link href={`blogs/${blog.id}`}>
        <div className="relative w-full h-[250px] md:h-[400px]">
          <Image
            width={380}
            height={380}
            src={blog.image}
            alt={blog.name}
            className="w-full h-full rounded-lg object-cover"
            unoptimized
          />
        </div>

        <div className="p-2 md:p-3 text-right">
          <h3 className="font-bold text-[20px] md:text-[32px] leading-[28px] md:leading-[46px] text-[#1A1A1A]">
            {blog.name}
          </h3>
          <p className="font-medium text-[16px] md:text-[20px] leading-[22px] md:leading-[29px] text-[#414141] my-3 md:my-5">
            {blog.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
