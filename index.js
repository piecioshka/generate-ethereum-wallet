import { HDNodeWallet, Mnemonic, randomBytes } from "ethers";

export function generateWallet() {
  // 32 bytes = 256-bit entropy = 24-word mnemonic
  const mnemonic = Mnemonic.fromEntropy(randomBytes(32));
  const wallet = HDNodeWallet.fromMnemonic(mnemonic);

  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: mnemonic.phrase,
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
