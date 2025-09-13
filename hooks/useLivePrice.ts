import { useEffect, useState } from 'react';

export function useLivePrice() {
  const [priceData, setPriceData] = useState<{ time: string; price: number }[]>([]);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd'
        );
        const json = await res.json();
        const price = json.solana.usd;
        const time = new Date().toLocaleTimeString();
        setPriceData(prev => [...prev.slice(-19), { time, price }]); // максимум 20 точек
      } catch (err) {
        console.error('Price fetch error:', err);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 20000); // каждые 20 сек

    return () => clearInterval(interval);
  }, []);

  return priceData;
}
