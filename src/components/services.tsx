"use client";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Suspense, use, useEffect, useRef } from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";

export default function Services() {
  const containerRef = useRef(null);
  const isInVew = useInView(containerRef, { amount: "all" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center"],
  });

  const yValue = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const features = [
    {
      name: "Twitter Marketing (Raids, short and long threads)",
      description:
        "Leveraging the decentralized ethos of Web3, our inclusive Twitter marketing approach orchestrates synchronized digital raids and crafts engaging, narrative-rich threads to amplify diverse voices and foster community-driven brand advocacy.",
      href: "#",
      icon: PresentationChartLineIcon,
    },
    {
      name: "Game Nights",
      description:
        "Embracing the collaborative spirit of Web3, our game nights are interactive, virtual gatherings that celebrate inclusivity and collective joy through blockchain-enabled, culturally responsive gaming experiences.",
      href: "#",
      icon: PuzzlePieceIcon,
    },
    {
      name: "AMA, Spaces",
      description:
        "Our AMA (Ask Me Anything) sessions and Twitter Spaces are dynamic, digital roundtables designed to democratize knowledge sharing, fostering an equitable exchange of ideas within the Web3 community through real-time, inclusive dialogue.",
      href: "#",
      icon: MegaphoneIcon,
    },
  ];

  return (
    <>
      <motion.div
        ref={containerRef}
        style={{ scale: yValue }}
        data-theme="dark"
        className="w-full px-14"
      >
        <div className="bg-zinc-950/40 rounded-3xl py-24 w-full sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-tulip-400">
                To The Moon
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-4xl">
                THE SERVICES WE OFFER
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300"></p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="h-8 w-8 flex-none text-tulip-400"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-tulip-400"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
