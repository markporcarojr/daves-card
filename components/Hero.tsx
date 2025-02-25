import React from "react";
import { Spotlight } from "./ui/Spotlight";

const SpotlightDiv = () => {
  return (
    <div className="absolute inset-0 w-full h-screen overflow-hidden">
      {/* Multiple Spotlights Positioned Around the Business Card */}
      <Spotlight
        className="top-[-20%] left-[-10%] h-[100vh] w-[100vw]"
        fill="white"
      />
      <Spotlight
        className="top-[10%] left-[40%] h-[120vh] w-[100vw]"
        fill="purple"
      />
      <Spotlight
        className="top-[50%] left-[80%] h-[150vh] w-[80vw]"
        fill="red"
      />
      <Spotlight
        className="top-[70%] left-[10%] h-[90vh] w-[90vw]"
        fill="blue"
      />
      <Spotlight
        className="top-[30%] left-[20%] h-[110vh] w-[100vw]"
        fill="yellow"
      />
    </div>
  );
};

export default SpotlightDiv;
