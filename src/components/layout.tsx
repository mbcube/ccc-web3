"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Layout({
  header,
  side,
  logo,
  affiliations,
  children,
}: any) {
  const [patterArray, setPatternArray] = useState<number[]>([]);
  const [divisionSize, setDivisionSize] = useState(0);

  useEffect(() => {
    if (!window) return;
    setDivisionSize(getDivisionSize(6));
    setPatternArray(getPatternArray());
  }, []);

  function getRandomNumber() {
    const randomNumber = Math.random() * (2 - 0.5) + 0.5;
    return Math.floor(randomNumber * 1000);
  }

  function getDelayedAnimationObject() {
    const delay = getRandomNumber();
    const duration = 4000 - delay;

    console.log(delay, duration, delay + duration);

    return {
      animationDelay: `${delay}ms`,
      animationDuration: `${duration}ms`,
    };
  }

  function getDivisionSize(factor: number = 1) {
    if (window?.matchMedia("(min-width: 1024px)").matches) {
      return 250 * factor;
    } else if (window?.matchMedia("(min-width: 640px)").matches) {
      return 150 * factor;
    } else {
      return 100 * factor;
    }
  }

  function getPatternArray() {
    const division = getDivisionSize();
    const patternArray = [];
    for (let i = 1; i <= 6; i++) {
      patternArray.push(division * i);
    }

    return patternArray;
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
            height={divisionSize}
            patternUnits="userSpaceOnUse"
          >
            {patterArray.map((offset, index) => (
              <line
                key={`horizontal-line-${index}`}
                x1="0"
                y1={offset}
                x2="100%"
                y2={offset}
                className="animated-line stroke-tulip-300/40"
                style={getDelayedAnimationObject()}
              />
            ))}
          </pattern>
          <pattern
            x={0}
            y={-1}
            id="horizontal-line-patterns"
            width={divisionSize}
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            {patterArray.map((offset, index) => (
              <line
                key={`vertical-line-${index}`}
                x1={offset}
                y1="0"
                x2={offset}
                y2="100%"
                className="animated-line stroke-tulip-300/40"
                style={getDelayedAnimationObject()}
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

      <motion.div
        initial={{ scale: 0.8, y: 150, x: 0 }}
        animate={{ scale: 1.1, y: 0, x: 50 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden="true"
        className="absolute left-[calc(50%-24rem)] top-0 lg:top-20 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-30rem)] lg:left-[calc(50%-40rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-tulip-100 to-tulip-600 opacity-20"
        />
      </motion.div>
      <div>
        <div className="relative">{logo}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
