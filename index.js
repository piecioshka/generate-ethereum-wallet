import { Wallet, Mnemonic, randomBytes } from "ethers";

export function generateWallet() {
  // Generate 256-bit entropy for 24-word mnemonic (128-bit = 12 words, 256-bit = 24 words)
  const entropy = randomBytes(32); // 32 bytes = 256 bits
  const mnemonic = Mnemonic.fromEntropy(entropy);
  const wallet = Wallet.fromPhrase(mnemonic.phrase);

  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic.phrase,
  };
}

export function displayWallet(walletInfo) {
  console.log("\n==============================================");
  console.log("  Ethereum Wallet Generated Successfully!");
  console.log("==============================================\n");
  console.log("Address:");
  console.log(`  ${walletInfo.address}\n`);
  console.log("Private Key:");
  console.log(`  ${walletInfo.privateKey}\n`);
  console.log("Mnemonic Phrase (24 words):");
  console.log(`  ${walletInfo.mnemonic}\n`);
  console.log("==============================================");
  console.log("IMPORTANT: Keep your private key and mnemonic");
  console.log("phrase secure. Never share them with anyone!");
  console.log("==============================================\n");
}
