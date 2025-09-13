import { useEffect, useState } from 'react';

export function useAnalytics() {
  const [walletsConnected, setWalletsConnected] = useState(0);
  const [swapsExecuted, setSwapsExecuted] = useState(0);
  const [liquidityVolume, setLiquidityVolume] = useState(12430);

  useEffect(() => {
    const interval = setInterval(() => {
      setWalletsConnected(prev => prev + Math.floor(Math.random() * 2));
      setSwapsExecuted(prev => prev + Math.floor(Math.random() * 3));
      setLiquidityVolume(prev => +(prev + Math.random() * 100 - 50).toFixed(2));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return { walletsConnected, swapsExecuted, liquidityVolume };
}
