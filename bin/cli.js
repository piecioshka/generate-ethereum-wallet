#!/usr/bin/env node

import { generateWallet, displayWallet } from "../index.js";

const args = process.argv.slice(2);

const showHelp = args.includes("--help") || args.includes("-h");
const jsonOutput = args.includes("--json") || args.includes("-j");
const showVersion = args.includes("--version") || args.includes("-v");

function printHelp() {
  console.log(`
Usage: ethereum-wallet-generator [options]

Generate a new Ethereum wallet with address, private key, and mnemonic phrase.

Options:
  -h, --help     Show this help message
  -v, --version  Show version number
  -j, --json     Output wallet data as JSON

Examples:
  ethereum-wallet-generator           Generate wallet with formatted output
  ethereum-wallet-generator --json    Generate wallet with JSON output
`);
}

function printVersion() {
  console.log("ethereum-wallet-generator v1.0.0");
}

function main() {
  if (showHelp) {
    printHelp();
    process.exit(0);
  }

  if (showVersion) {
    printVersion();
    process.exit(0);
  }

  const walletInfo = generateWallet();

  if (jsonOutput) {
    console.log(JSON.stringify(walletInfo, null, 2));
  } else {
    displayWallet(walletInfo);
  }
}

main();
