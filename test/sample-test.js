const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should return the new greeting once it's changed", async function () {
    const contractAddress = await hre.run("deploy-contract");
    expect(contractAddress).to.not.be.null;
    const accounts = await ethers.getSigners();
    // accounts[0] is the first account
    const deployer = accounts[0];
    // Use an account to send a transaction
    const tx = await deployer.sendTransaction({
      to: accounts[1].address,
      value: ethers.utils.parseEther("1.0")
    });
    console.log(tx)
  });
});
