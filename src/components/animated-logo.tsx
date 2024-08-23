"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AnimatedLogo() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 100);
  }, []);

  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.15 }}
      className="flex flex-col items-center justify-center w-screen h-screen"
    >
      <div className="w-1/2 h-1/4  lg:w-1/2 lg:h-2/5 xl:1/2">
        <div className="w-full h-2/3 flex items-center justify-center">
          <Image
            className="w-[14rem] h-[7rem] sm:w-[16rem] sm:h-[8rem] md:w-[20rem] md:h-[10rem] lg:w-[28rem] lg:h-[14rem] xl:w-[32rem] xl:h-[16rem]"
            src="/img/logo-slim.webp"
            alt="Next.js Logo"
            width={4200}
            height={2100}
            priority
          />
        </div>

        <div className="w-full h-1/3 relative flex flex-col items-center justify-center">
          <div>
            <h1
              className={`font-semibold text-tulip-400 text-xs sm:text-lg md:text-xl lg:text-3xl xl:text-4xl `}
            >
              {showAnimation && (
                <>
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    CONTENT
                  </motion.span>{" "}
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.25 }}
                  >
                    CREATOR
                  </motion.span>{" "}
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                  >
                    CIRCLES
                  </motion.span>
                </>
              )}
            </h1>
          </div>

          {showAnimation && (
            <Image
              className="absolute h-full w-2/3 lg:w-1/2 "
              src="/img/swoosh.gif"
              alt="Next.js swoosh"
              width={480}
              height={300}
              priority
            />
          )}
        </div>
      </div>

      {/* <h1
        className={`${FONT_MAJOR_MONO.className} font-bold text-tulip-400 text-6xl`}
      >
        content creator circles
      </h1>

      <h1
        className={`${FONT_MAJOR_MONO.className} font-bold text-gray-100 text-4xl`}
      >
        where creativity meets the blockchain
      </h1>

      <h1
        className={`${FONT_MAJOR_MONO.className} font-semibold text-gray-100 text-4xl`}
      >
        WHERE CREATIVITY MEETS THE blockchain
      </h1> */}
      {/* <h1
        className={`${FONT_ROGAN.className} font-semibold text-gray-100 text-4xl`}
      >
        WHERE CREATIVITY MEETS THE blockchain
      </h1> */}
      {/* <h1 className={`text-gray-100 text-4xl`}>
        WHERE CREATIVITY MEETS THE blockchain
      </h1> */}
    </motion.div>
  );
}
