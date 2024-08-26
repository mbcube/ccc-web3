"use client";
import { FadeIn, FadeInStagger } from "@/lib/faderIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { use, useEffect, useState } from "react";

type Img = {
  src: string;
  alt: string;
};

export default function Affiliations() {
  const images = [
    { src: "/img/affiliations/ankh.png", alt: "Ankh" },
    { src: "/img/affiliations/jigen.svg", alt: "Jigen" },
    { src: "/img/affiliations/elixir.webp", alt: "Elixir" },
    { src: "/img/affiliations/polyverse-label.png", alt: "Polyverse" },
    { src: "/img/affiliations/kibble.png", alt: "Kibble" },
    { src: "/img/affiliations/pixelverse.svg", alt: "pixelverse" },
    { src: "/img/affiliations/betsio.svg", alt: "Bets.io" },
    { src: "/img/affiliations/everreach.svg", alt: "Everreach labs" },
    { src: "/img/affiliations/rkleague-f.svg", alt: "r k league" },
    { src: "/img/affiliations/galaxy.svg", alt: "galaxy markets" },
  ];

  return (
    <div
      id="affiliations"
      className="bg-zinc-950 py-24 sm:py-32 border-b border-tulip-400/20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center ">
        <FadeIn>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-tulip-400 ">
            Our Affiliations
          </h1>
        </FadeIn>

        <FadeInStagger
          faster
          className="overflow-hidden justify-center mx-auto mt-10 lg:mt-16 grid max-w-lg grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl  sm:gap-x-10 lg:mx-0 lg:max-w-none"
        >
          {[...images].map(({ src, alt }, index) => (
            <FadeIn key={"slider-image-" + index}>
              <Image
                priority
                className="max-h-12 flex w-full object-contain"
                alt={alt}
                src={src}
                width={158}
                height={48}
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}
