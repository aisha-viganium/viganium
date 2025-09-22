import React from "react";
import HeroSection from "./block/HeroSection";
import OurTeam from "./block/OurTeam/OurTeam";
import Team from "./block/Team";


export default async function page() {
  return (
    <>
      <HeroSection />
      <OurTeam />
      <Team />
    </>
  );
}
