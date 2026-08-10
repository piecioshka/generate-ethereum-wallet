#!/usr/bin/env node

import { createRequire } from "node:module";
import { generateWallet, displayWallet } from "../index.js";

const pkg = createRequire(import.meta.url)("../package.json");
const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`
Usage: ${pkg.name} [options]

Generate a new Ethereum wallet with address, private key, and mnemonic phrase.

Options:
  -h, --help     Show this help message
  -v, --version  Show version number
  -j, --json     Output wallet data as JSON

Examples:
  ${pkg.name}           Generate wallet with formatted output
  ${pkg.name} --json    Generate wallet with JSON output
`);
} else if (args.includes("--version") || args.includes("-v")) {
  console.log(`${pkg.name} v${pkg.version}`);
} else {
  const walletInfo = generateWallet();

  if (args.includes("--json") || args.includes("-j")) {
    console.log(JSON.stringify(walletInfo, null, 2));
  } else {
    displayWallet(walletInfo);
  }
}
