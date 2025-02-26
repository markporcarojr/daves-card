"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MagicButton from "@/components/ui/MagicButton";
// import { motion } from "framer-motion"; // ✅ Only keeping it for the hint
import { useRouter } from "next/navigation";
import { FaFileAlt } from "react-icons/fa";

export default function BusinessCard() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleResume = () => {
    router.push("/resume");
  };

  useEffect(() => {
    // rotate card after 3 seconds
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

    // Remove the "Tap to Flip" hint after first flip
    if (flipped && hintRef.current) {
      gsap.to(hintRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.5,
        onComplete: () => {
          hintRef.current!.style.display = "none";
        },
      });
    }
  }, [flipped]);

  return (
    <div className="flex justify-center items-center h-screen flex-col px-4">
      {/* 🔥 "Tap to Flip" Hint (Only Visible Before First Flip)
      <motion.div
        ref={hintRef}
        className="absolute top-[10%] text-white text-lg font-semibold opacity-90 flex items-center gap-2 bg-black/50 px-4 py-2 rounded-md"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: [0.8, 0.3, 0.8], y: [-5, 0, -5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        👉 Tap to Flip
      </motion.div> */}

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
            src="/images/dave.jpg"
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
          <div className="absolute text-white font-semibold text-center px-5">
            <h1 className="text-3xl font-bold">David Porcaro</h1>
            <p className="text-xl">Bartender</p>
            <p className="mt-2">
              Craft cocktails are my fortè and whiskey is my specialty, but I
              can spin the simplest of drinks into artful potions. I am a fast
              and creative bartender looking for a clean and professional place
              to satisfy guests. I would love a blended role encompassing any
              service role, including bartending, serving, and prep shifts.
            </p>
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
