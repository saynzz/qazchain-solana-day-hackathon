import { useEffect, useState } from 'react';

function getAchievements(swaps: number, volume: number) {
  const achievements: string[] = [];
  if (swaps >= 1) achievements.push('🚀 Первый swap!');
  if (swaps >= 5) achievements.push('🔥 5 swapов — активный трейдер');
  if (volume >= 1000) achievements.push('💎 Swap на сумму > 1000');
  return achievements;
}

export default function Achievements() {
  const [swaps, setSwaps] = useState(0);
  const [volume, setVolume] = useState(0);
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const s = Number(localStorage.getItem('swaps') || '0');
      const v = Number(localStorage.getItem('volume') || '0');
      setSwaps(s);
      setVolume(v);
    }
  }, []);

  useEffect(() => {
    setList(getAchievements(swaps, volume));
  }, [swaps, volume]);

  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-2">🏆 Ачивки</h3>
      {list.length === 0 ? (
        <p className="text-sm text-gray-600">Сделайте первый swap, чтобы получить ачивку</p>
      ) : (
        <ul className="list-disc pl-5">
          {list.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      )}
    </div>
  );
}
