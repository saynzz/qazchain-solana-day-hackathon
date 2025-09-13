import { useAnalytics } from './useAnalytics';

export default function Analytics() {
  const { walletsConnected, swapsExecuted, liquidityVolume } = useAnalytics();

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white space-y-4">
      <h2 className="text-xl font-bold">📊 Protocol Analytics</h2>
      <div className="grid grid-cols-3 gap-4 text-center text-sm text-blue-200">
        <div>
          <p className="text-lg font-semibold text-green-400">{walletsConnected}</p>
          <p>Wallets Connected</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-yellow-300">{swapsExecuted}</p>
          <p>Swaps Executed</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-cyan-400">{liquidityVolume.toLocaleString()} USDC</p>
          <p>Liquidity Volume</p>
        </div>
      </div>
    </div>
  );
}
