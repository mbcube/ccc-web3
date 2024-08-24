import { Tweet, TweetResponse } from "@/models/tweet";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Suspense } from "react";

export default async function MainHeroSection({
  header,
  side,
  logo,
  children,
}: any) {
  function getRandomNumber() {
    const randomNumber = Math.random() * (2 - 0.5) + 0.5;
    return parseFloat(randomNumber.toFixed(2));
  }

  return (
    <div className="relative isolate overflow-hidden bg-black">
      {header}
      {side}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x={0}
            y={-1}
            id="vertical-line-patterns"
            width="100%"
            height={1200}
            patternUnits="userSpaceOnUse"
          >
            {[200, 400, 600, 800, 1000, 1200].map((offset, index) => (
              <line
                key={`horizontal-line-${index}`}
                x1="0"
                y1={offset}
                x2="100%"
                y2={offset}
                className="animated-line stroke-tulip-300/40"
                style={{ animationDelay: `${getRandomNumber()}s` }}
              />
            ))}
          </pattern>
          <pattern
            x={0}
            y={-1}
            id="horizontal-line-patterns"
            width={1200}
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            {[200, 400, 600, 800, 1000, 1200].map((offset, index) => (
              <line
                key={`vertical-line-${index}`}
                x1={offset}
                y1="0"
                x2={offset}
                y2="100%"
                className="animated-line stroke-tulip-300/40"
                style={{ animationDelay: `${getRandomNumber()}s` }}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vertical-line-patterns)" />
        <rect
          width="100%"
          height="100%"
          fill="url(#horizontal-line-patterns)"
        />
      </svg>

      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-tulip-100 to-tulip-600 opacity-20"
        />
      </div>
      <div>
        <div className="min-h-screen flex items-center justify-center">
          {logo}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
