// components/BusinessCard.js
import React from "react";
import Image from "next/image";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const BusinessCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-800">
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front of the Card */}
          <div className="absolute inset-0">
            <Image
              className="h-full w-full rounded-xl shadow-xl shadow-black/40"
              src="/images/taylor-davidson-iwWJFIlnDm4-unsplash.jpg"
              alt="Business Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Back of the Card */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">David Porcaro</h1>
              <p className="text-lg">Bartender</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                molestiae commodi laudantium blanditiis perspiciatis aliquam
                nemo ratione nam minus nisi.
              </p>
              <div className="flex flex-row gap-5">
                <Link
                  href={"https://www.instagram.com"}
                  className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                >
                  <BsInstagram />
                </Link>
                <Link
                  href={"https://www.twitter.com"}
                  className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                >
                  <BsTwitterX />
                </Link>
                <Link
                  href={"https://www.linkedin.com"}
                  className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
