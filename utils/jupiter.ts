import { createJupiterApiClient } from '@jup-ag/api';

const client = createJupiterApiClient({});

export async function getQuote(inputMint: string, outputMint: string, amount: string) {
  try {
    const res = await client.quoteGet({
      inputMint,
      outputMint,
      amount,
      slippageBps: 100,
    });
    return res;
  } catch (e) {
    console.error('Ошибка quote', e);
    return null;
  }
}

export async function getSwapTransaction(quote: any) {
  try {
    const res = await client.swapPost({
      swapRequest: {
        quoteResponse: quote,
        userPublicKey: '11111111111111111111111111111111', // TODO: заменить на реальный pubkey
      }
    });
    return res;
  } catch (e) {
    console.error('Ошибка swap', e);
    return null;
  }
}
