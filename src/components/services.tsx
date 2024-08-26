"use client";

import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";
import { FadeIn, FadeInStagger } from "@/lib/faderIn";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function Services() {
  const features = [
    {
      name: "Twitter Marketing KOLs",
      description:
        "Amplify your brand with strategic Twitter campaigns crafted by industry-leading Key Opinion Leaders (KOLs).",
      href: "#",
      icon: PresentationChartLineIcon,
    },
    {
      name: "Hosting Game Nights",
      description:
        "Engage your community with interactive and immersive game nights, professionally hosted to boost participation and fun.",
      href: "#",
      icon: PuzzlePieceIcon,
    },
    {
      name: "Hosting AMA, Spaces",
      description:
        "Foster transparency and connection through expertly hosted Discord AMAs and Twitter Spaces tailored to your audience.",
      href: "#",
      icon: MicrophoneIcon,
    },
    {
      name: "Partnership Collab Management",
      description:
        "Maximize your network with seamless partnership collaborations managed from outreach to execution.",
      href: "#",
      icon: UserGroupIcon,
    },
    {
      name: "Project Development & Advisory",
      description:
        " Transform your ideas into successful ventures with our comprehensive project development and advisory services.",
      href: "#",
      icon: LightBulbIcon,
    },
    {
      name: "Discord Build, Security & Alpha Call Services",
      description:
        "Secure and optimize your Discord server with tailored builds that prioritize safety and user experience.",
      href: "#",
      icon: ShieldCheckIcon,
    },
    {
      name: "Moderation & Community Management",
      description:
        "Maintain an active, positive, and engaged community with our professional moderation and community management services.",
      href: "#",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: "Early Call Services for Projects",
      description:
        "Stay ahead of the curve with early call services that provide critical project insights and opportunities.",
      href: "#",
      icon: ClockIcon,
    },
    {
      name: "Website Development",
      description:
        "Elevate your online presence with custom website development that reflects your brand's vision and functionality needs.",
      href: "#",
      icon: CodeBracketIcon,
    },
  ];

  return (
    <FadeIn>
      <div
        id="services"
        className="bg-zinc-900 py-24 w-full sm:py-32 border-y border-tulip-400/20 "
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-white">
              To The Moon
            </h2> */}
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-tulip-400 ">
              THE SERVICES WE OFFER
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300"></p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <FadeInStagger faster>
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div
                    key={"services-section" + index}
                    className="flex flex-col"
                  >
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
                        <p className="">
                          {/* <a
                            href={feature.href}
                            className="text-sm font-semibold leading-6 text-tulip-400"
                          >
                            Learn more <span aria-hidden="true">→</span>
                          </a> */}
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
