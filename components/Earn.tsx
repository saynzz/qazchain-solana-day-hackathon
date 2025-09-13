import { useState, useEffect } from 'react';

export default function Earn() {
  const [staked, setStaked] = useState(false);
  const [earnings, setEarnings] = useState(0);

 useEffect(() => {
  let interval: ReturnType<typeof setInterval> | null = null;
  if (staked) {
    interval = setInterval(() => {
      setEarnings(prev => parseFloat((prev + 0.002).toFixed(3)));
    }, 5000);
  }
  return () => {
    if (interval) clearInterval(interval);
  };
}, [staked]);

  const handleStake = () => {
    setStaked(true);
    setEarnings(0);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white space-y-4">
      <h2 className="text-xl font-bold">💸 Earn</h2>
      <p className="text-sm text-blue-200">
        Делайте ставки и получайте условную прибыль. Текущая доходность: <span className="font-semibold text-green-400">4.2%</span>
      </p>

      {!staked ? (
        <button
          onClick={handleStake}
          className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition"
        >
          Stake 1 SOL
        </button>
      ) : (
        <div className="text-center space-y-2">
          <p>✅ Staked: 1 SOL</p>
          <p>📈 Earnings: {earnings} USDC</p>
        </div>
      )}
    </div>
  );
}
