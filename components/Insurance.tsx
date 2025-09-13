import { useState } from 'react';

export default function Insurance() {
  const [isProtected, setIsProtected] = useState(false);

  const handleActivate = () => {
    setIsProtected(true);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white space-y-4">
      <h2 className="text-xl font-bold">🛡️ Smart Contract Protection</h2>
      <p className="text-sm text-blue-200">
        Risk Score: <span className="text-yellow-300 font-semibold">Moderate</span><br />
        Status: {isProtected ? '✅ Insured by QazGuard' : '❌ Not Protected'}
      </p>

      {!isProtected ? (
        <button
          onClick={handleActivate}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition"
        >
          Activate Protection
        </button>
      ) : (
        <div className="text-center text-green-400 font-semibold">
          ✅ Protection Active
        </div>
      )}
    </div>
  );
}
