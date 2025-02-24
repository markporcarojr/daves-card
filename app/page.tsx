"use client";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
const BusinessCard = dynamic(() => import("@/components/BusinessCard"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <Hero />
        <div className="relative z-10">
          <BusinessCard />
        </div>
      </div>
    </>
  );
};

export default Home;
