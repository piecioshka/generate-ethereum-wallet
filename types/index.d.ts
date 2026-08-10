export interface WalletInfo {
  address: string;
  privateKey: string;
  mnemonic: string;
}

export function generateWallet(): WalletInfo;

export function displayWallet(walletInfo: WalletInfo): void;
