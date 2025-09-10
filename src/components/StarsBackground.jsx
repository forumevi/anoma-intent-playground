import { motion } from "framer-motion";

export default function StarsBackground() {
  const stars = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 + Math.random() * 5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
