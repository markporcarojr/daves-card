"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "@/components/ui/MagicButton";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function BusinessCard() {
  const [copied, setCopied] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    const text = "markporcarojr@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

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
    <div className="flex justify-center items-center h-screen bg-gray-900 flex-col">
      <div
        ref={cardRef}
        className={`
          relative cursor-pointer perspective
          w-[95vw] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] 
          h-[60vh] max-h-[380px] sm:max-h-[420px] md:max-h-[480px] 
        `}
        onClick={() => setFlipped(!flipped)}
        style={{ transformStyle: "preserve-3d" }} // Required for 3D effect
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
            <h1 className="text-2xl font-bold">David Porcaro</h1>
            <p className="text-lg">Bartender</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              molestiae commodi laudantium blanditiis.
            </p>

            {/* Social Links */}
            <div className="flex flex-row gap-4 mt-3">
              <Link
                href="https://www.instagram.com"
                className="rounded-md bg-neutral-800 p-2 text-lg hover:bg-neutral-900"
              >
                <BsInstagram />
              </Link>
              <Link
                href="https://www.twitter.com"
                className="rounded-md bg-neutral-800 p-2 text-lg hover:bg-neutral-900"
              >
                <BsTwitterX />
              </Link>
              <Link
                href="https://www.linkedin.com"
                className="rounded-md bg-neutral-800 p-2 text-lg hover:bg-neutral-900"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 relative">
        {/* button border magic from tailwind css buttons  */}
        {/* add rounded-md h-8 md:h-8, remove rounded-full */}
        {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
        {/* add handleCopy() for the copy the text */}
        <div
          className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
        >
          {/* <img src="/confetti.gif" alt="confetti" /> */}
          <Lottie
            animationData={animationData}
            loop={copied}
            autoplay={copied}
          />
        </div>

        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IoCopyOutline />}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31]"
        />
      </div>
    </div>
  );
}
