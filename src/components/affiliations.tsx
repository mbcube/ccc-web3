"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { use, useEffect, useState } from "react";

type Img = {
  src: string;
  alt: string;
};

export default function Affiliations() {
  const [images, setImages] = useState<Img[]>([]);

  const transition = {
    duration: 12,
    ease: "linear",
    repeat: Infinity,
  };
  const className =
    "w-[158px] h-[48px] flex items-center justify-center overflow-hidden ";

  function getImages(): Img[] {
    const imgs = [
      { src: "/img/affiliations/ankh.png", alt: "Ankh" },
      { src: "/img/affiliations/polyverse-label.png", alt: "Polyverse" },
      { src: "/img/affiliations/betsio.svg", alt: "Bets.io" },
      { src: "/img/affiliations/everreach.svg", alt: "Everreach labs" },
      { src: "/img/affiliations/elixir.webp", alt: "Elixir" },
      { src: "/img/affiliations/jigen.svg", alt: "Jigen" },
      { src: "/img/affiliations/kibble.png", alt: "Kibble" },
      { src: "/img/affiliations/kip.webp", alt: "KIP" },
    ];

    if (window?.matchMedia("(min-width: 1024px)").matches) {
      return imgs.slice(0, 5);
    } else if (window?.matchMedia("(min-width: 640px)").matches) {
      return imgs.slice(0, 4);
    } else {
      return imgs.slice(0, 3);
    }
  }

  useEffect(() => {
    setImages(getImages());
  }, []);

  return (
    <div className={`absolute w-full bottom-0 left-0`}>
      <div className={`relative bg-zinc-950 py-4 my-12 min-h-[5rem] w-screen`}>
        <div className={`absolute w-screen flex justify-evenly px-2 md:p-0`}>
          {[...images].map(({ src, alt }, index) => (
            <motion.div
              key={"slider-1-image-" + index}
              initial={{ x: 0 }}
              animate={{ x: "100vw" }}
              transition={transition}
              className={className}
            >
              <Image priority alt={alt} src={src} width={158} height={48} />
            </motion.div>
          ))}
        </div>
        <div className={`absolute w-screen flex justify-evenly px-2  md:p-0`}>
          {[...images].map(({ src, alt }, index) => (
            <motion.div
              key={"slider-2-image-" + index}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={transition}
              className={className}
            >
              <Image priority alt={alt} src={src} width={158} height={48} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
