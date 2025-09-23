
import Image from "next/image";
import Link from "next/link";

type Service = {
  id: number | string;
  name: string;
  description: string;
  image: string;
  tags: string[];
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col items-end pt-8 pb-1 md:pb-8 pr-6 pl-6 md:pr-[29px] md:pl-[29px] gap-8 min-h-[527px] bg-[#F3F3F3] rounded-[8px]">
      <Link href={`services/${service.id}`}>
        <div className="relative w-full min-h-[250px] md:min-h-[380px]">
          <Image
            width={380}
            height={380}
            src={service.image}
            alt={service.name}
            className="w-full h-full rounded-[8px] object-cover"
            unoptimized
          />
        </div>

        <div className="p-3 text-right">
          <h3
            className="
                        font-bold text-[20px] leading-[29px] text-right text-[#414141]
                        md:text-[32px] md:leading-[46px] 
                      "
          >            {service.name}
          </h3>
          <p
            className="
                    font-medium text-[14px] leading-[20px] text-right 
                    md:text-[20px] md:leading-[29px] 
                    text-[#414141] my-5
                      "
          >            {service.description}
          </p>
          {service.tags && (
            <div className="grid grid-cols-2 gap-2 mb-4 md:grid-cols-2 lg:grid-cols-3">
              {service.tags.map((tag, index) => (
                <span
                  key={index}
                  className="
                            flex justify-center items-center 
                            py-2 px-3 
                            min-h-[40px] md:min-h-[47px] 
                            border-2 border-[#1A1A1A] rounded-[37px] 
                            font-medium text-[14px] md:text-[16px] text-[#414141]
                          "
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
