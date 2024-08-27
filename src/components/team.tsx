"use client";

import { FadeIn, FadeInStagger } from "@/lib/faderIn";
import { motion } from "framer-motion";
import TeamMember from "./team-member";

export default function Team() {
  const people = [
    {
      name: "Nissue",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1823927764723924992/RETJ0jN8_400x400.jpg",
      link: "https://x.com/n1ssue",
      description: `Project Manager at Ankh Labs, a top crypto & WEB3 marketing agency. KOL/Content Marketing Lead at CCC WEB3. Team Member at Creators Nexus. Founder of RoyalAlphaLab, a community for Alpha, networking, and growth.`,
    },
    {
      name: "Can 24",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1803051109759488000/6Fl6OxK5_400x400.jpg",
      link: "https://x.com/0xCan24",
      description: `Project Manager at Ankh Labs, a top crypto & WEB3 marketing agency. KOL/Content Marketing Lead at CCC WEB3. Team Member at Creators Nexus. Founder of RoyalAlphaLab, a community for Alpha, networking, and growth.`,
    },
    {
      name: "Polkaguy",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1743727062995914752/Xj8-U8Jm_400x400.png",
      link: "https://x.com/polkaguy",
      description: `Project Manager at Ankh Labs, a top crypto & WEB3 marketing agency. KOL/Content Marketing Lead at CCC WEB3. Team Member at Creators Nexus. Founder of RoyalAlphaLab, a community for Alpha, networking, and growth.`,
    },
    {
      name: "kvs.eth",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1826940529663197184/3oerdAH4_400x400.jpg",
      link: "https://x.com/kvs_eth",
      description: `Project Manager at Ankh Labs, a top crypto & WEB3 marketing agency. KOL/Content Marketing Lead at CCC WEB3. Team Member at Creators Nexus. Founder of RoyalAlphaLab, a community for Alpha, networking, and growth.`,
    },
    {
      name: "Hoogie",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1760265875125624832/8uA7DQOm_400x400.jpg",
      link: "https://x.com/H0ogie",
      description: `Project Manager at Ankh Labs, a top crypto & WEB3 marketing agency. KOL/Content Marketing Lead at CCC WEB3. Team Member at Creators Nexus. Founder of RoyalAlphaLab, a community for Alpha, networking, and growth.`,
    },
    // {
    //   name: "Stefan Savevski",
    //   role: "Creators",
    //   imageUrl:
    //     "https://pbs.twimg.com/profile_images/1783194292988583936/zinOAKap_400x400.jpg",
    // },
    // {
    //   name: "Sandy",
    //   role: "Wanderluster",
    //   imageUrl:
    //     "https://pbs.twimg.com/profile_images/1788917662581506048/zgqUD7xF_400x400.jpg",
    // },
    // {
    //   name: "SaintsNFT",
    //   role: "Creator",
    //   imageUrl:
    //     "https://pbs.twimg.com/profile_images/1798752188937687041/WVM-7Pr1_400x400.jpg",
    // },
    // {
    //   name: "Deji",
    //   role: "Host and Creator",
    //   imageUrl:
    //     "https://pbs.twimg.com/profile_images/1811143227950403584/MYwxSiLu_400x400.jpg",
    // },
    // {
    //   name: "Pix",
    //   role: "Collab manager",
    //   imageUrl:
    //     "https://pbs.twimg.com/profile_images/1787705188104462338/DNTiqttx_400x400.jpg",
    // },
    // {
    //   name: "Ghost",
    //   role: "Certified Lover Boy and Founder ",
    //   imageUrl:
    //     "https://pbs.twimg.com/profile_images/1812113532109910016/6LtN8zNL_400x400.jpg",
    // },

    // {
    //   name: "King Arthur",
    //   role: "KOLs manager |",
    //   imageUrl:
    //     "https://pbs.twimg.com/profile_images/1738274564709167104/OTukhxaN_400x400.jpg",
    // },
    // {
    //   name: "Fishu Senpai ",
    //   role: "Founder and Creator",
    //   imageUrl:
    //     "https://pbs.twimg.com/profile_images/1743824109874651136/memNT3N9_400x400.jpg",
    // },
  ];

  return (
    <FadeIn id="team">
      <div className="bg-zinc-900 py-24 w-full sm:py-32 border-b border-tulip-400/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto  lg:mx-0 text-center flex flex-col items-center justify-center ">
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-tulip-400 ">
              The Squad
            </h1>
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
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 place-items-center"
            >
              {people.map((person, index) => (
                <FadeIn key={person.name}>
                  <TeamMember index={index} {...person} />
                  {/* <li>
                    <Link href={person.link} target="_blanc">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Image
                          priority
                          alt=""
                          src={person.imageUrl}
                          width={300}
                          height={300}
                          className="mx-auto h-24 w-24 rounded-full"
                        />

                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                          {person.name}
                        </h3>
                        <p className="text-sm leading-6 text-tulip-400">
                          {person.role}
                        </p>
                      </motion.div>
                    </Link>
                  </li> */}
                </FadeIn>
              ))}
            </ul>
          </FadeInStagger>
        </div>
      </div>
    </FadeIn>
  );
}
