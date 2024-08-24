"use client";

import { CalendlyIcon } from "@/icons/calendar";
import { DiscordIcon } from "@/icons/discord";
import { XIcon } from "@/icons/x";
import AnimatedIcon from "@/lib/animated-icon";
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

  return (
    <div className="absolute h-screen hidden sm:block">
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
            <AnimatedIcon>
              <DiscordIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400 " />
            </AnimatedIcon>
            <AnimatedIcon>
              <CalendlyIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400" />
            </AnimatedIcon>
            <AnimatedIcon>
              <XIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400" />
            </AnimatedIcon>
          </>
        )}
      </div>
    </div>
  );
}
