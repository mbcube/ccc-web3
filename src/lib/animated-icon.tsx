import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedIcon({
  src,
  delay = 0.3,
  children,
}: {
  src?: string;
  delay?: number;
  children: any;
}) {
  const animated = (delay: number): any => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
      delay,
    },
  });

  return (
    <motion.div
      className="z-10"
      initial={{ y: -80, opacity: 0 }}
      animate={animated(delay)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {src && (
        <Link href={src} target="_blank">
          {children}
        </Link>
      )}
      {!src && <> {children} </>}
    </motion.div>
  );
}
