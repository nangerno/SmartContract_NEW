const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should return the new greeting once it's changed", async function () {
    const contractAddress = await hre.run("deploy-contract");
    expect(contractAddress).to.not.be.null;
  });
});
