import SwapForm from '../components/SwapForm';
import Dashboard from '../components/Dashboard';
import Earn from '../components/Earn';
import Governance from '../components/Governance';
import Insurance from '../components/Insurance';
import Analytics from '../components/Analytics';
import Lending from '../components/Lending';
import Achievements from '../components/Achievements';
import WalletButton from '../components/WalletButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-8">
     <div className="flex justify-between items-center mb-8">
  <div className="flex items-center gap-2 text-xl font-bold">
    <span>🚀</span> QazChain Solana DeFi
  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SwapForm />
        <WalletButton />
        <Dashboard />
        <Earn />
        <Governance />
        <Insurance />
        <Analytics />
        <Lending />
        <Achievements />
      </div>
    </div>
  );
}
