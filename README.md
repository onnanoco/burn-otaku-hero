# Otaku Hero

A smart contract for those brave enough to burn MOE tokens.

- Contract address:
- Testnet(Sepolia) contract address:
- Hardhat
- SOLC version: 0.8.19

## Env.

```bash
npm install
cp .env.sample .env
vi .env
```

## Deploy

```bash
npx hardhat run --network {ethereum||sepolia} "scripts/deploy.js" 
```

## Verify

```bash
npx hardhat verify --constructor-args arguments.js --contract "contracts/OtakuHero.sol:OtakuHero" --network {ethereum||sepolia} {CONTRACT_ADDRESS}
```
