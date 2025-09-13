import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletConnectionProvider } from '../components/WalletProvider';
import { JupiterProvider } from '@jup-ag/react-hook';
import { Connection } from '@solana/web3.js';

const connection = new Connection('https://api.devnet.solana.com');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <JupiterProvider connection={connection}>
        <Component {...pageProps} />
      </JupiterProvider>
    </WalletConnectionProvider>
  );
}
