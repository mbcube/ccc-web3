"use client";
import { CalendlyIcon } from "@/icons/calendar";
import { DiscordIcon } from "@/icons/discord";
import { XIcon } from "@/icons/x";
import AnimatedIcon from "@/lib/animated-icon";
import { FadeIn } from "@/lib/faderIn";
import { motion } from "framer-motion";

export default function Footer() {
  const navigation = [
    {
      name: "Discord",
      href: "#",
      icon: (
        <AnimatedIcon>
          <DiscordIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400 " />
        </AnimatedIcon>
      ),
    },

    {
      name: "Calendar",
      href: "#",
      icon: (
        <AnimatedIcon>
          <CalendlyIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400" />
        </AnimatedIcon>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <AnimatedIcon>
          <XIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 fill-tulip-400" />
        </AnimatedIcon>
      ),
    },
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
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-tulip-400 hover:text-tulip-400/90"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-md leading-5 text-white">
            &copy;Content Creator Circles, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
