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
        "https://pbs.twimg.com/profile_images/1839593252799791104/G7xMQhU2_400x400.jpg",
      link: "https://x.com/n1ssue",
      description: (
        <dl className="text-start">
          <dd>
            Project Manager, Ankh Labs Leading Crypto & Web3 Marketing Agency
          </dd>
          <dd className="mt-3">
            KOL/Content Marketing Lead, CCC Web3 top content creation marketing
          </dd>
          <dd className="mt-3">
            Group Founder, RoyalAlphaLab Community for Alpha, Networking &
            Growth
          </dd>
        </dl>
      ),
    },

    {
      name: "Can 24",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1803051109759488000/6Fl6OxK5_400x400.jpg",
      link: "https://x.com/0xCan24",
      description: (
        <dl className="text-start">
          <dd>
            KOL/Content Marketing Manager, CCC Web3 top content creation
            marketing brand
          </dd>
          <dd className="mt-3">
            CO-Founder, Whale3 a huge community for alpha, networking & growth
          </dd>
          <dd className="mt-3">
            Experienced Collab Management a network that can reach anywhere.
          </dd>
        </dl>
      ),
    },
    {
      name: "Polkaguy",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1743727062995914752/Xj8-U8Jm_400x400.png",
      link: "https://x.com/polkaguy",
      description: (
        <dl className="text-start">
          <dd>
            KOL/Content Marketing Manager, CCC Web3 top content creation
            marketing brand
          </dd>
          <dd className="mt-3">
            Founder, Alpha Syndicate a huge community for alpha, networking &
            growth
          </dd>
          <dd className="mt-3">
            Researcher, analyst, Investor with more than four years of crypto
            experience.
          </dd>
        </dl>
      ),
    },
    {
      name: "kvs.eth",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1826940529663197184/3oerdAH4_400x400.jpg",
      link: "https://x.com/kvs_eth",
      description: (
        <dl className="text-start">
          <dd>
            10 years of experience in crypto, 5 years in the NFT space. Discord
            admin.
          </dd>
          <dd className="mt-3">
            Founder, Alpha Syndicate a huge community for alpha, networking &
            growth
          </dd>
          <dd className="mt-3">
            KOL/Content Marketing Manager, CCC Web3 top content creation
            marketing brand
          </dd>
        </dl>
      ),
    },
    {
      name: "Hoogie",
      role: "Manager",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1760265875125624832/8uA7DQOm_400x400.jpg",
      link: "https://x.com/H0ogie",
      description: (
        <dl className="text-start">
          <dd>
            15 years of experience in IT, managing projects, products,
            portfolios and organizations
          </dd>
          <dd className="mt-3">
            6 years of Web3 activities including KOL marketing, collaboration
            and managing Discord communities.
          </dd>
          <dd className="mt-3">
            CCC WEB3 Top Content Creation Marketing Brand, Creators NExus, Mana
            Labs
          </dd>
        </dl>
      ),
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
