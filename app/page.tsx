"use client";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
const BusinessCard = dynamic(() => import("@/components/BusinessCard"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Hero />
      <BusinessCard />
    </>
  );
};

export default Home;
