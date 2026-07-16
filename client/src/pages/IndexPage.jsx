import React from "react";
import Silk from "../components/utils/Silk";
import HeroSection from "../components/HeroSection";

const IndexPage = () => {
  return (
    <div className="overflow-hidden size-full rounded-md relative">
      <Silk color="#252525" />
      {/* <DarkVeil /> */}

      <HeroSection />
    </div>
  );
};

export default IndexPage;
