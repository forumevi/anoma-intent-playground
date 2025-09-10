import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Maskot from "../components/Maskot"; // Maskot component’i (aşağıda vereceğim)

export default function IntentPlayground() {
  const [intent, setIntent] = useState("");
  const [jsonIntent, setJsonIntent] = useState(null);
  const [matching, setMatching] = useState(false);
  const [matched, setMatched] = useState(false);

  const handleGenerate = () => {
    if (!intent.trim()) return;
    setMatching(true);
    setMatched(false);

    const generated = {
      type: "swap",
      description: intent,
      offered: "10 USDC",
      requested: "0.01 ETH",
      privacy: true,
    };

    setTimeout(() => {
      setJsonIntent(generated);
      setMatching(false);
      setMatched(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-purple-950 via-black to-indigo-950">
      {/* Dinamik yıldız efekti */}
      <div className="absolute inset-0 animate-pulse-slow opacity-30">
        <div className="w-full h-full bg-[url('/stars.png')] bg-repeat"></div>
      </div>

      {/* Maskot */}
      <Maskot matching={matching} matched={matched} className="absolute top-6 right-6" />

      {/* Ana Kart */}
      <div className="w-full max-w-2xl p-6 rounded-3xl border border-purple-700 bg-black/50 backdrop-blur-md z-10">
        <h1 className="text-3xl text-center text-purple-300 mb-6 font-bold">
          🌌 Anoma Intent Playground
        </h1>

        {/* Intent Input */}
        <textarea
          className="w-full p-4 mb-4 rounded-xl border border-purple-600 bg-black/70 text-white placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          placeholder="Write your intent..."
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
        />

        {/* Generate Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #9f7aea" }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-2xl text-white font-bold transition duration-300"
          onClick={handleGenerate}
        >
          Generate Intent
        </motion.button>

        {/* Matching Animation */}
        <AnimatePresence>
          {matching && (
            <motion.div
              key="matching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center mt-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="text-4xl"
              >
                🔮
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Matched Intent JSON */}
        <AnimatePresence>
          {matched && jsonIntent && (
            <motion.pre
              key="json"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 p-4 rounded-xl bg-black/60 text-indigo-200 overflow-x-auto border border-purple-500 hover:shadow-[0_0_25px_rgba(159,122,234,0.7)] transition duration-300"
            >
              {JSON.stringify(jsonIntent, null, 2)}
            </motion.pre>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
