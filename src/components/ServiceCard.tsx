
import Image from "next/image";
import Link from "next/link";

type Service = {
  id: number | string;
  name: string;
  image: string;
  tags: number[];
  tagsDisplayed: string[];
  description: string;

};

export function ServiceCard({ service, locale }: { service: Service; locale: string; }) {
  const isArabic = locale === "ar";
  return (
    <div className="flex flex-col items-end pt-8 pb-1 md:pb-8 pr-6 pl-6 md:pr-[29px] md:pl-[29px] gap-8 min-h-[427px] bg-[#F3F3F3] rounded-[8px]">
      <Link href={`services/${service.id}`}>
        <div className="relative w-full min-h-[250px] 2xl:min-h-[380px]">
          <Image
            width={380}
            height={380}
            src={service.image}
            alt={service.name}
            className="w-full h-full rounded-[8px] object-cover"
            unoptimized
          />
        </div>

        <div className={`px-3 ${isArabic ? "text-right" : "text-left"}`}>
          <h3
            className={`
              ${isArabic ? "text-right" : "text-left"}
                        font-bold text-[20px] leading-[29px] text-secondry-200
                        md:text-[28px] 2xl:text-[32px] md:leading-[46px] 
                      `}
          >
            {service.name}
          </h3>
          <p
            className={`
                    font-medium text-[14px] leading-[20px]  ${isArabic ? "text-right" : "text-left"}
                    md:text-[20px] md:leading-[29px] 
                    text-secondry-200 my-5
                      `}
          >
            {service.description}
          </p>
          {service.tagsDisplayed && (
            <div className="grid grid-cols-2 gap-2 mb-4 md:grid-cols-2 2xl:grid-cols-3">
              {service.tagsDisplayed.map((tag, index) => (
                <span
                  key={index}
                  className={`
                    ${isArabic ? "text-[14px] md:text-[16px]" : "text-[12px] md:text-[14px]"}
                            flex justify-center items-center 
                            py-2 px-3 
                            min-h-[40px] md:min-h-[47px] 
                            border-2 border-[#1A1A1A] rounded-[37px] 
                            font-medium  text-secondry-200
                          `}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
