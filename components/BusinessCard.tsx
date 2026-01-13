"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MagicButton from "@/components/ui/MagicButton";
// import { motion } from "framer-motion"; // ✅ Only keeping it for the hint
import { useRouter } from "next/navigation";
import { FaFileAlt } from "react-icons/fa";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export default function BusinessCard() {
  // const hintRef = useRef<HTMLDivElement>(null);
  const [generateDelay, setGenerateDelay] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const words =
    "Craft cocktails are my fortè and whiskey is my specialty, but I can spin the simplest of drinks into artful potions. I am a fast and creative bartender looking for a clean and professional place to satisfy guests. I would love a blended role encompassing any service role, including bartending, serving, and prep shifts.";

  const handleResume = () => {
    router.push("/resume");
  };

  useEffect(() => {
    // start the text generation effect after 3 seconds
    const timeout = setTimeout(() => {
      setGenerateDelay(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlipped(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Ensure GSAP runs only on the client
  useEffect(() => {
    if (typeof window === "undefined" || !cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateY: flipped ? 180 : 0,
      duration: 0.9,
      ease: "power2.inOut",
    });
  }, [flipped]);

  return (
    <div className="flex justify-center items-center h-screen flex-col px-4">
      <div
        ref={cardRef}
        className="relative cursor-pointer perspective w-[95vw] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] h-[60vh] max-h-[380px] sm:max-h-[420px] md:max-h-[480px] shadow-xl"
        onClick={() => setFlipped(!flipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side - Normal Image */}
        <div
          className="absolute w-full h-full bg-white shadow-2xl rounded-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            className="h-full w-full rounded-xl shadow-xl shadow-black/40"
            src="/images/daves-beer.jpg"
            alt="Business Image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Back Side - Mirrored & Darkened Image with Text Overlay */}
        <div
          className="absolute w-full h-full bg-gray-800 shadow-2xl rounded-xl overflow-hidden flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Background Image with Mirroring */}
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover brightness-50"
              src="/images/dave.jpg"
              alt="Business Image Darkened"
              fill
              priority
              style={{ transform: "scaleX(-1)" }} // Mirror horizontally
            />
            {/* Dark Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Contact Info (Overlayed Above Image) */}
          {/* Contact Info (Overlayed Above Image) */}
          <div className="absolute top-0 left-0 right-0 text-white font-semibold text-center px-5">
            <h1 className="text-3xl font-bold mt-2">David Porcaro</h1>
            <p className="text-2xl">Bartender</p>
            {/* Reserve the space for generated text */}
            <div className="mt-2 text-white text-xl min-h-[8rem] relative">
              {/* Hidden clone to reserve space */}
              {generateDelay && (
                <TextGenerateEffect words={words} duration={1} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col items-center space-y-6">
        <MagicButton
          title={"View My Resume"}
          icon={<FaFileAlt />}
          position="left"
          handleClick={handleResume}
          otherClasses="!bg-[#161A31]"
        />
      </div>
    </div>
  );
}
