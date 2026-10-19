# Contributing to generate-ethereum-wallet

How to work on the code. For what the tool does and how to use it, see the [README](README.md).

## Getting started

Prerequisites: Node.js from `.nvmrc` (`lts/krypton`, Node 24). The package itself declares `node >= 18` in `engines`, and CI tests on Node 20, 22 and 24.

```bash
git clone https://github.com/piecioshka/generate-ethereum-wallet
cd generate-ethereum-wallet
nvm use
npm install
```

`npm install` also sets up the husky pre-commit hook.

## Scripts

| Command                | What it does                                                     |
| ---------------------- | ---------------------------------------------------------------- |
| `npm start`            | runs the CLI (`node bin/cli.js`)                                 |
| `npm test`             | smoke test: runs the CLI with `--json`, `--version` and `--help` |
| `npm run lint`         | ESLint                                                           |
| `npm run format`       | Prettier, writes changes                                         |
| `npm run format:check` | Prettier, check only                                             |

The pre-commit hook runs `lint-staged`: Prettier and `eslint --fix` on staged `*.js`/`*.mjs` files, Prettier on `*.json`, `*.md`, `*.yml` and `*.ts`.

## Project structure

| Path               | Contents                                                |
| ------------------ | ------------------------------------------------------- |
| `index.js`         | library entry: `generateWallet()` and `displayWallet()` |
| `bin/cli.js`       | CLI behind `generate-ethereum-wallet` and `eth-wallet`  |
| `types/index.d.ts` | TypeScript declarations                                 |
| `eslint.config.js` | ESLint flat config                                      |

The only runtime dependency is [ethers](https://docs.ethers.org/). The package is published to npm; `files` in `package.json` limits it to `index.js`, `bin/`, `types/`, `LICENSE` and `README.md`.

## CI

`.github/workflows/ci.yml` runs on pushes and pull requests to `main`:

- `quality` - `npm run format:check` and `npm run lint` on Node 24
- `testing` - `npm test` on Node 20, 22 and 24

## Conventions

- Commit messages follow Conventional Commits (`feat:`, `fix:`, `chore:`, `ci:`, `docs:`, `refactor:`).
- Run `npm run format:check`, `npm run lint` and `npm test` before committing.
