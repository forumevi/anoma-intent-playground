import { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-black/40 p-6 rounded-2xl border border-purple-700">
        <h1 className="text-3xl text-center text-purple-300 mb-4">🌌 Anoma Intent Playground</h1>
        <textarea
          className="w-full p-2 rounded-xl border border-purple-600 bg-black/50 text-white mb-2"
          placeholder="Write your intent..."
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
        />
        <button
          className="w-full bg-purple-600 hover:bg-purple-500 rounded-2xl py-2 text-white font-bold"
          onClick={handleGenerate}
        >
          Generate Intent
        </button>
        {matching && <p className="text-center text-indigo-300 mt-2">🔮 Matching your intent...</p>}
        {matched && jsonIntent && <pre className="text-indigo-200 mt-2">{JSON.stringify(jsonIntent, null, 2)}</pre>}
      </div>
    </div>
  );
}