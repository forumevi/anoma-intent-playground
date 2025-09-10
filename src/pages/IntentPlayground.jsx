import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-950 via-black to-indigo-950">
      <div className="w-full max-w-2xl p-6 rounded-2xl border border-purple-700 bg-black/50 backdrop-blur-md">
        <h1 className="text-3xl text-center text-purple-300 mb-6 font-bold">
          🌌 Anoma Intent Playground
        </h1>

        {/* Intent Input */}
        <textarea
          className="w-full p-3 mb-4 rounded-xl border border-purple-600 bg-black/70 text-white placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="Write your intent..."
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
        />

        {/* Generate Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #9f7aea" }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-2xl text-white font-bold transition"
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
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="text-3xl"
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
              className="mt-4 p-4 rounded-xl bg-black/60 text-indigo-200 overflow-x-auto border border-purple-500"
            >
              {JSON.stringify(jsonIntent, null, 2)}
            </motion.pre>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
