
import Image from "next/image";
import Chat from "./Chat";
import AnimatedSection, { fadeInUp, slideFromLeftBounce } from "@/animation/AnimatedSection";

export default function CustomSection() {
  return (
    <section className="bg-[#1A1A1A] my-5 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center container mx-auto gap-10">
        
        <AnimatedSection 
          variants={fadeInUp} 
          className="col-span-1 flex justify-center order-2 lg:order-1"
        >
          <Image
            src="/assets/images/chatRobot.png"
            alt="Chat Robot"
            width={497}
            height={773}
            className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[497px] h-auto"
          />
        </AnimatedSection>

        <AnimatedSection 
          variants={slideFromLeftBounce} 
          className="col-span-2 order-1 lg:order-2"
        >
          <Chat />
        </AnimatedSection>

      </div>
    </section>
  );
}
