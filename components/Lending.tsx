import { useState } from 'react';

export default function Lending() {
  const [mode, setMode] = useState<'lend' | 'borrow'>('lend');
  const [active, setActive] = useState(false);

  const handleAction = () => {
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white space-y-6">
      <h2 className="text-xl font-bold">💸 Lending & Borrowing</h2>

      <div className="flex space-x-4">
        <button
          onClick={() => setMode('lend')}
          className={`flex-1 py-2 rounded-lg font-semibold transition ${
            mode === 'lend'
              ? 'bg-green-600 text-white'
              : 'bg-white/20 text-green-300 hover:bg-white/30'
          }`}
        >
          Give Loan
        </button>
        <button
          onClick={() => setMode('borrow')}
          className={`flex-1 py-2 rounded-lg font-semibold transition ${
            mode === 'borrow'
              ? 'bg-yellow-600 text-white'
              : 'bg-white/20 text-yellow-300 hover:bg-white/30'
          }`}
        >
          Take Loan
        </button>
      </div>

      {!active ? (
        <button
          onClick={handleAction}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition"
        >
          {mode === 'lend' ? 'Lend 1 SOL → Earn 0.05 USDC/day' : 'Borrow 0.7 USDC → Lock 1 SOL'}
        </button>
      ) : (
        <div className="text-center space-y-2">
          <p>
            {mode === 'lend'
              ? '✅ Loan Active: You are earning yield.'
              : '✅ Borrowing Active: 1 SOL locked, 0.7 USDC received.'}
          </p>
          <button
            onClick={handleClose}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            {mode === 'lend' ? 'Withdraw Loan' : 'Repay & Unlock'}
          </button>
        </div>
      )}
    </div>
  );
}
