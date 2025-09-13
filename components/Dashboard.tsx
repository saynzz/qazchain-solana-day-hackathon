import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useLivePrice } from './useLivePrice';
import { useLiveTVL } from './useLiveTVL';

export default function Dashboard() {
  const priceData = useLivePrice();
  const tvlData = useLiveTVL();

  return (
    <div className="space-y-8">
      {/* TVL Chart */}
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-2">📊 Dashboard</h2>
        <p className="text-sm text-blue-200 mb-4">
          TVL: ~ {tvlData.at(-1)?.tvl.toLocaleString()} USDC · APY: ~ 4.2%
        </p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={tvlData}>
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E293B',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Line
              type="monotone"
              dataKey="tvl"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Price Chart */}
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-2">✅ SOL/USD Live Chart</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={priceData}>
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" domain={['auto', 'auto']} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E293B',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#60A5FA"
              strokeWidth={3}
              dot={{ r: 3 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
