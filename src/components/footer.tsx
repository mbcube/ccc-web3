"use client";
import { CalendlyIcon } from "@/icons/calendar";
import { DiscordIcon } from "@/icons/discord";
import { LinkedIn } from "@/icons/linkedin";
import { XIcon } from "@/icons/x";
import AnimatedIcon from "@/lib/animated-icon";
import { FadeIn, FadeInStagger } from "@/lib/faderIn";
import { motion } from "framer-motion";

export default function Footer() {
  const icons = [
    <AnimatedIcon
      key={"footer-icon-" + 1}
      delay={0.4}
      src="https://www.linkedin.com/company/ccc-web3/"
    >
      <LinkedIn className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400 " />
    </AnimatedIcon>,
    <AnimatedIcon
      key={"footer-icon-" + 2}
      delay={0.3}
      src="https://x.com/CCC_WEB3"
    >
      <XIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400" />
    </AnimatedIcon>,
    <AnimatedIcon
      key={"footer-icon-" + 3}
      delay={0.2}
      src="https://discord.gg/ccc-web3"
    >
      <DiscordIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400 " />
    </AnimatedIcon>,
    <AnimatedIcon
      key={"footer-icon-" + 4}
      delay={0.1}
      src="https://calendly.com/ccc-web3/nissue"
    >
      <CalendlyIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  fill-tulip-400" />
    </AnimatedIcon>,
  ];

  return (
    <motion.div
      className="bg-zinc-900/90"
      variants={{
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...{
        initial: "hidden",
        whileInView: "visible",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {icons.map((icon) => icon)}
        </div>
        <motion.div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-md leading-5 text-white ">
            &copy; Content Creator Circle, Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
