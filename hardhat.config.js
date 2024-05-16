require('@nomiclabs/hardhat-waffle');

task("deploy-contract", async () => {
  const deployContract = require("./scripts/deploy");
  return deployContract;
});
module.exports = {
  solidity: '0.8.0',
  networks: {
    testnet: {
      url: "https://eth-sepolia.g.alchemy.com/v2/VjbYkMBDG6ThZ4R36NVQ69JN-83DhJ0T"
    }
  },
};