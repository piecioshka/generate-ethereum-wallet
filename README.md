# 💎 Ethereum Wallet Generator

[![cli-available](https://badgen.net/static/cli/available/?icon=terminal)](https://runkit.com/npm/ethereum-wallet-generator)
[![node version](https://img.shields.io/node/v/ethereum-wallet-generator.svg)](https://www.npmjs.com/package/ethereum-wallet-generator)
[![npm version](https://badge.fury.io/js/ethereum-wallet-generator.svg)](https://badge.fury.io/js/ethereum-wallet-generator)
[![downloads count](https://img.shields.io/npm/dt/ethereum-wallet-generator.svg)](https://www.npmjs.com/package/ethereum-wallet-generator)
[![size](https://packagephobia.com/badge?p=ethereum-wallet-generator)](https://packagephobia.com/result?p=ethereum-wallet-generator)
[![license](https://img.shields.io/npm/l/ethereum-wallet-generator.svg)](https://piecioshka.mit-license.org)

A simple Node.js tool to generate Ethereum blockchain wallets with address, private key, and mnemonic phrase.

## ✨ Features

- 🔐 Generate secure Ethereum wallets
- 🔑 Provides wallet address, private key, and 24-word mnemonic phrase
- 📦 Built with ethers.js library
- 💻 CLI support with multiple output formats

## 📥 Installation

```bash
npm install -g ethereum-wallet-generator
```

## 🚀 Usage

```bash
# Generate a new wallet
ethereum-wallet-generator

# Or use the short alias
eth-wallet

# Output as JSON (useful for scripting)
eth-wallet --json

# Show help
eth-wallet --help

# Show version
eth-wallet --version
```

### ⚙️ CLI Options

| Option | Alias | Description |
|--------|-------|-------------|
| `--help` | `-h` | Show help message |
| `--version` | `-v` | Show version number |
| `--json` | `-j` | Output wallet data as JSON |

### 📚 Programmatic Usage

```javascript
import { generateWallet, displayWallet } from 'ethereum-wallet-generator';

const wallet = generateWallet();
console.log(wallet.address);
console.log(wallet.privateKey);
console.log(wallet.mnemonic);

// Or display formatted output
displayWallet(wallet);
```

The tool will output:
- 📍 **Address**: Your Ethereum wallet address (public)
- 🔑 **Private Key**: Your wallet's private key (keep secret!)
- 📝 **Mnemonic Phrase**: 24-word recovery phrase (keep secret!)

## ⚠️ Security Warning

- 🚫 **Never share your private key or mnemonic phrase** with anyone
- 🔒 Store them securely offline
- 💸 Anyone with access to your private key or mnemonic can access your funds
- 🎓 This tool is for educational purposes or creating new wallets
- ✅ Always verify you're using trusted code when dealing with real cryptocurrency

## 📋 Example Output

```
==============================================
  Ethereum Wallet Generated Successfully!
==============================================

Address:
  0x1234567890123456789012345678901234567890

Private Key:
  0xabcdef...

Mnemonic Phrase (24 words):
  word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12
  word13 word14 word15 word16 word17 word18 word19 word20 word21 word22 word23 word24

==============================================
IMPORTANT: Keep your private key and mnemonic
phrase secure. Never share them with anyone!
==============================================
```

## 🔧 How It Works

The tool uses the ethers.js library to:
1. 🎲 Generate 256-bit cryptographically secure entropy
2. 📝 Create a BIP-39 24-word mnemonic phrase from the entropy
3. 🔐 Derive the wallet (address and private key) from the mnemonic phrase

## 📄 License

[The MIT License](https://piecioshka.mit-license.org) @ 2026

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2026
