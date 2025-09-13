export default function RouteVisualizer() {
  const fakeRoute = {
    inAmount: 1000000,
    outAmount: 999000,
    inputMint: { symbol: 'SOL', decimals: 9 },
    outputMint: { symbol: 'USDC', decimals: 6 },
    marketInfos: [
      { label: 'Orca' },
      { label: 'Raydium' }
    ]
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg text-white space-y-2">
      <h3 className="text-lg font-semibold">🔀 Simulated Route</h3>
      <p>
        In: {(fakeRoute.inAmount / 10 ** fakeRoute.inputMint.decimals).toFixed(2)}{' '}
        {fakeRoute.inputMint.symbol}
      </p>
      <p>
        Out: {(fakeRoute.outAmount / 10 ** fakeRoute.outputMint.decimals).toFixed(2)}{' '}
        {fakeRoute.outputMint.symbol}
      </p>
      <p>DEXes: {fakeRoute.marketInfos.map(m => m.label).join(', ')}</p>
    </div>
  );
}
