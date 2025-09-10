import { motion } from "framer-motion";

export default function Maskot({ matching, matched, className }) {
  return (
    <motion.div
      className={className + " text-5xl"}
      animate={{
        y: matching ? [0, -10, 0] : matched ? [0, -5, 0] : 0,
        rotate: matching ? [0, 15, -15, 0] : 0,
      }}
      transition={{ duration: 1, repeat: matching ? Infinity : 0, ease: "easeInOut" }}
    >
      🧙‍♂️
    </motion.div>
  );
}
