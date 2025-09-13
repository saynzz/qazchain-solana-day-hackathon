import dynamic from 'next/dynamic';

const WalletMultiButtonDynamic = dynamic(
  async () => {
    const mod = await import('@solana/wallet-adapter-react-ui');
    return mod.WalletMultiButton;
  },
  { ssr: false }
);

export default function NoSSRWalletButton() {
  return (
    <div className="flex justify-center">
      <WalletMultiButtonDynamic className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition" />
    </div>
  );
}
