import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function TextAnimation({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      delay: delay,
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return <motion.span>{displayText}</motion.span>;
}
