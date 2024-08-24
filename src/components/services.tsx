"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";
import { FadeIn, FadeInStagger } from "@/lib/faderIn";

export default function Services() {
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
    <FadeIn>
      <div className="bg-zinc-900 py-24 w-full sm:py-32 border-y border-tulip-400/20 ">
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
            <FadeInStagger faster>
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <FadeIn>
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
                    </FadeIn>
                  </div>
                ))}
              </dl>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
