import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletConnectionProvider } from '../components/WalletProvider';
import { JupiterProvider } from '@jup-ag/react-hook';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <JupiterProvider>
        <Component {...pageProps} />
      </JupiterProvider>
    </WalletConnectionProvider>
  );
}

