import { useEffect, useState } from 'react';

export function useLiveTVL() {
  const [tvlData, setTvlData] = useState<{ time: string; tvl: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const lastTVL = tvlData[tvlData.length - 1]?.tvl || 1200;
      const newTVL = +(lastTVL + Math.random() * 300 - 150).toFixed(2);
      setTvlData(prev => [...prev.slice(-19), { time, tvl: newTVL }]);
    }, 15000);

    return () => clearInterval(interval);
  }, [tvlData]);

  return tvlData;
}
