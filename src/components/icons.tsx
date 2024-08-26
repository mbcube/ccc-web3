"use client";

import { CalendlyIcon } from "@/icons/calendar";
import { DiscordIcon } from "@/icons/discord";
import { LinkedIn } from "@/icons/linkedin";
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
            <AnimatedIcon
              delay={0.4}
              src="https://www.linkedin.com/company/ccc-web3/"
            >
              <LinkedIn className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400 " />
            </AnimatedIcon>
            <AnimatedIcon delay={0.3} src="https://x.com/CCC_WEB3">
              <XIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400" />
            </AnimatedIcon>
            <AnimatedIcon delay={0.2} src="https://discord.gg/ccc-web3">
              <DiscordIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400 " />
            </AnimatedIcon>
            <AnimatedIcon
              delay={0.1}
              src="https://calendly.com/ccc-web3/nissue"
            >
              <CalendlyIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400" />
            </AnimatedIcon>
          </>
        )}
      </div>
    </div>
  );
}
