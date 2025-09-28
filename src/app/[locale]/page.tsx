import React from "react";
import StorySection from "./block/StorySection";
import HowWork from "./block/HowWork/HowWork";
import Services from "./block/Services";
import ReviewSection from "./block/ReviewSection/ReviewSection";
import HelpSection from "@/components/HelpSection";
import HeroSection from "./block/HeroSection";
import RobotChat from "./block/RobotChat";


export default async function page() {

  return (
    <>
      <RobotChat />
      <HeroSection />
      <StorySection />
      <HowWork />
      <Services />
      <ReviewSection />
      <HelpSection />
    </>
  );
}
