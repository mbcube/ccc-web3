"use client";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Suspense, use, useEffect, useRef } from "react";
import { Tweet } from "react-tweet";

export default function Tweets() {
  const containerRef = useRef(null);
  const isInVew = useInView(containerRef, { amount: "all" });

  const tweets = [
    "1826462767911485622",
    "1826630174034546792",
    "1826307525202805058",
  ];

  return (
    <div ref={containerRef} className="flex items-start justify-evenly min-h-1">
      {/* {scrollYProgress.on} */}

      {tweets?.map((tweet: string) => (
        <div key={tweet} data-theme="dark" className="tweet-class">
          <Tweet id={tweet} />
        </div>
      ))}
    </div>
  );
}
