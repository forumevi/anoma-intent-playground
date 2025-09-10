import { motion } from "framer-motion";

export default function GlowParticles({ trigger }) {
  if (!trigger) return null;
  const particles = Array.from({ length: 15 });

  return (
    <>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            top: `${50 + Math.random() * 20 - 10}%`,
            left: `${50 + Math.random() * 20 - 10}%`,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2, y: -30 }}
          transition={{ duration: 0.8 + Math.random() * 0.5, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
