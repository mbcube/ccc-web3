"use client";

import { FadeIn, FadeInStagger } from "@/lib/faderIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Team() {
  const people = [
    {
      name: "Nissue",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1823927764723924992/RETJ0jN8_400x400.jpg",
    },
    {
      name: "Nezuron",
      role: "Researcher • Content Creator • Artist",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1772440289518764032/tslqyUgt_400x400.jpg",
    },
    {
      name: "Stefan Savevski",
      role: "Creators",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1783194292988583936/zinOAKap_400x400.jpg",
    },
    {
      name: "Sandy",
      role: "Wanderluster",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1788917662581506048/zgqUD7xF_400x400.jpg",
    },
    {
      name: "SaintsNFT",
      role: "Creator",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1798752188937687041/WVM-7Pr1_400x400.jpg",
    },
    {
      name: "Deji",
      role: "Host and Creator",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1811143227950403584/MYwxSiLu_400x400.jpg",
    },
    {
      name: "Pix",
      role: "Collab manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1787705188104462338/DNTiqttx_400x400.jpg",
    },
    {
      name: "Ghost",
      role: "Certified Lover Boy and Founder ",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1812113532109910016/6LtN8zNL_400x400.jpg",
    },
    {
      name: "Can 24",
      role: "Project Analyst and Researcher",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1803051109759488000/6Fl6OxK5_400x400.jpg",
    },
    {
      name: "King Arthur",
      role: "KOLs manager |",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1738274564709167104/OTukhxaN_400x400.jpg",
    },
    {
      name: "Fishu Senpai ",
      role: "Founder and Creator",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1743824109874651136/memNT3N9_400x400.jpg",
    },
    {
      name: "Polkaguy.eth",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1743727062995914752/Xj8-U8Jm_400x400.png",
    },
  ];

  return (
    <FadeIn>
      <div className="bg-zinc-950 py-24 w-full sm:py-32 border-b border-tulip-400/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-tulip-400 sm:text-4xl">
              The Squad
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Behind CCC, is a team of 100+ seasoned and experienced content
              creators who can utilise their reach and exposure to deliver your
              message. Offering your brand, services such as raids, threads,
              short and long posts, significantly boosting organic impressions
              as well as interest.
            </p>
          </div>
          <FadeInStagger>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
              {people.map((person) => (
                <FadeIn key={person.name}>
                  <li>
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="mx-auto h-24 w-24 rounded-full"
                    />
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white-900">
                      {person.name}
                    </h3>
                    <p className="text-sm leading-6 text-tulip-600">
                      {person.role}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </FadeInStagger>
        </div>
      </div>
    </FadeIn>
  );
}
