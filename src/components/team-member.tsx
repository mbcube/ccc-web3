import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import TextAnimation from "./animated-text";

type TeamMember = {
  index: number;
  name: string;
  imageUrl: string;
  role: string;
  link: string;
  description: any;
};

export default function TeamMember({
  index,
  name,
  imageUrl,
  role,
  link,
  description,
}: TeamMember) {
  const [flipped, setFlipped] = useState(false);
  const [peek, setPeek] = useState(false);

  const sides = {
    front: { opacity: 1, transform: "rotateY(0deg)" },
    back: { opacity: 1, transform: "rotateY(180deg)" },
  };

  useEffect(() => {
    if (index > 0) return;
    setPeek(true);
    setTimeout(() => {
      setPeek(false);
    }, 1000);
  }, []);

  return (
    <motion.li
      key={name}
      className="rounded-2xl bg-zinc-950 px-8 py-10 h-96 overflow-hidden border border-tulip-400/20"
      style={{ width: "300px" }}
      onClick={() => setFlipped(!flipped)}
      variants={sides}
      animate={peek ? "peek" : flipped ? "back" : "front"}
      transition={{ duration: 0.5 }}
    >
      {!flipped && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            priority
            alt=""
            width={300}
            height={300}
            src={imageUrl}
            className="mx-auto h-48 w-48 rounded-full md:h-48 md:w-48"
          />
          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
            {name}
          </h3>
          <p className="text-sm leading-6 text-tulip-400">{role}</p>
          <ul role="list" className="mt-6 flex justify-center gap-x-6">
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={link}
                target="_blank"
                className="text-white hover:text-gray-200"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="sr-only">X</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                </svg>
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <ArrowUturnLeftIcon className="h-5 w-5 text-white" />
            </motion.li>
          </ul>
        </motion.div>
      )}

      {flipped && (
        <motion.div
          initial={{ opacity: 0, x: -10, rotateY: 180 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="text-sm leading-7 text-white">{description}</div>
        </motion.div>
      )}

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          priority
          alt=""
          width={300}
          height={300}
          src={imageUrl}
          className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
        />
        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
          {name}
        </h3>
        <p className="text-sm leading-6 text-tulip-400">{role}</p>
        <ul role="list" className="mt-6 flex justify-center gap-x-6">
          <li>
            <a href={link} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">X</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
              </svg>
            </a>
          </li>
        </ul>
      </motion.div> */}
    </motion.li>
  );
}
