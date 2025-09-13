import { useState } from 'react';

export default function Governance() {
  const [votesFor, setVotesFor] = useState(0);
  const [votesAgainst, setVotesAgainst] = useState(0);
  const [voted, setVoted] = useState(false);

  const handleVote = (type: 'for' | 'against') => {
    if (voted) return;
    if (type === 'for') setVotesFor(v => v + 1);
    else setVotesAgainst(v => v + 1);
    setVoted(true);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white space-y-4">
      <h2 className="text-xl font-bold">🗳️ Governance Proposal</h2>
      <p className="text-sm text-blue-200">
        Предложение: Увеличить доходность с 4,2% до <span className="font-semibold text-green-400">6%</span>
      </p>

      {!voted ? (
        <div className="flex space-x-4">
          <button
            onClick={() => handleVote('for')}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
          >
            ✅ Vote For
          </button>
          <button
            onClick={() => handleVote('against')}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
          >
            ❌ Vote Against
          </button>
        </div>
      ) : (
        <p className="text-center text-sm text-yellow-300">You have voted. Thank you!</p>
      )}

      <div className="text-sm text-blue-200">
        <p>✅ Votes For: {votesFor}</p>
        <p>❌ Votes Against: {votesAgainst}</p>
      </div>
    </div>
  );
}
