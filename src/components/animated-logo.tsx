"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import LogoPaths from "./logo-paths";

export default function AnimatedLogo() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 100);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-3rem)] md:h-screen">
      <div className="w-full">
        <div className="w-full flex items-center justify-center">
          <div className="relative w-[14rem] h-[7rem] sm:w-[16rem] sm:h-[8rem] md:w-[20rem] md:h-[10rem] lg:w-[26rem] lg:h-[13rem] xl:w-[30rem] xl:h-[15rem]">
            <svg
              className="absolute h-full w-full lg:ml-[0.3rem] lg:mt-[0.2rem] m-[.1rem] stroke-tulip-300/90"
              viewBox="0 0 1382 713"
              width="1382"
              height="713"
              fill="none"
              strokeWidth={5}
            >
              <path
                className="logo-paths"
                d="M472 536.5L405 467H199.5L149.5 417V253.5L199.5 207.5H405L472 138.5"
              />
              <path
                className="logo-paths"
                d="M461.5 140.5H172.5L84.5 228.5V438L172.5 542.5H461.5"
              />
              <path
                className="logo-paths"
                d="M388 2.5H166L3 170V475.5L124 609.5H668.5L729.5 547"
              />
              <path
                className="logo-paths"
                d="M629 128L698 57H1253L1378.5 182.5L1169 402.5H947"
              />
              <path className="logo-paths" d="M1064.5 710H1318L1378.5 645.5" />
              <path
                className="logo-paths"
                d="M859.5 138.5H553.5L470 226.5V438L553.5 540.5H859.5"
              />
              <path
                className="logo-paths"
                d="M855 138.5L802.5 201.5H583L539 255.5V415L583 465L792.5 471.5L855 536.5"
              />
              <path
                className="logo-paths"
                d="M1263.5 138.5H945L861.5 230.5V438L945 534.5H1263.5"
              />
              <path
                className="logo-paths"
                d="M1267.5 136.5L1205 201.5H978.5L934.5 247.5V415L978.5 467H1205L1267.5 538.5"
              />
            </svg>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              <Image
                src="/img/logo-slim.webp"
                alt="Next.js Logo"
                width={4200}
                height={2100}
                priority
              />
            </motion.div>
          </div>
        </div>

        <div className="w-full h-[6rem] sm:h-[8rem] md:h-[10rem] lg:h-[10rem] xl:h-[12rem] relative flex flex-col items-center justify-center">
          <div>
            <h1
              className={`font-semibold text-tulip-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
            >
              {showAnimation && (
                <>
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    CONTENT
                  </motion.span>{" "}
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    CREATOR
                  </motion.span>{" "}
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    CIRCLE
                  </motion.span>
                </>
              )}
            </h1>
          </div>

          {showAnimation && (
            <Image
              className="absolute h-full w-2/3 lg:w-1/2 "
              src="/img/swoosh-once.gif"
              alt="Next.js swoosh"
              width={480}
              height={300}
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
