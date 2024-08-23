"use client";

import { CalendlyIcon } from "@/icons/calendar";
import { DiscordIcon } from "@/icons/discord";
import { XIcon } from "@/icons/x";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Icons() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 100);
  }, []);

  const animated = (delay: number): any => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
      delay,
    },
  });

  return (
    <div className="absolute h-screen">
      <div className="h-full flex flex-col justify-center gap-10 mx-4">
        {showAnimation && (
          <div className="absolute w-52 rotate-90 -ml-16 z-0">
            <Image
              src="/img/swoosh-once.gif"
              alt="Next.js swoosh"
              width={480}
              height={300}
              priority
            />
          </div>
        )}

        {showAnimation && (
          <>
            <motion.div
              className="z-10"
              initial={{ y: -80, opacity: 0 }}
              animate={animated(0.3)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <DiscordIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400 " />
            </motion.div>
            <motion.div
              className="z-10"
              initial={{ y: -80, opacity: 0 }}
              animate={animated(0.15)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CalendlyIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400" />
            </motion.div>
            <motion.div
              className="z-10"
              initial={{ y: -80, opacity: 0 }}
              animate={animated(0)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400" />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
