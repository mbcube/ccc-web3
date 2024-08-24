import { motion } from "framer-motion";

export default function AnimatedIcon({ children }: any) {
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
      animate={animated(0.3)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
}
