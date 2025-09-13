import { useState } from 'react';
import RouteVisualizer from './RouteVisualizer';

export default function SwapForm() {
  const [swapped, setSwapped] = useState(false);

  const handleSwap = () => {
    setSwapped(true);
    setTimeout(() => setSwapped(false), 3000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-6 text-white">
      <h2 className="text-xl font-bold">🔁 Swap</h2>

      <div className="flex justify-between items-center bg-white/20 p-3 rounded-lg font-medium">
        <span>SOL</span>
        <span>→</span>
        <span>USDC</span>
      </div>

      <button
        onClick={handleSwap}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition"
      >
        Swap 1 SOL → USDC
      </button>

      <RouteVisualizer />

      {swapped && (
        <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in text-center">
          ✅ Swap simulated successfully!
        </div>
      )}
    </div>
  );
}
