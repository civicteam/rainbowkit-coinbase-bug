import { mainnet, sepolia } from 'wagmi/chains'
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'Multichain Modal Example',
  projectId: '',
  chains: [mainnet, sepolia],
  wallets: [
    { groupName: 'Installed', wallets: [injectedWallet] },
  ],
});

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
