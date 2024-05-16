require('@nomiclabs/hardhat-waffle');
const { alchemyApiKey, mnemonic } = require('./secrets.json');
task("deploy-contract", async () => {
  const deployContract = require("./scripts/deploy");
  return deployContract;
});
module.exports = {
  solidity: '0.8.0',
  networks: {
    testnet: {
      url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    }
  },
};