/* eslint-disable import/no-dynamic-require, no-await-in-loop, no-restricted-syntax, guard-for-in */
require("dotenv").config();
const path = require("path");
const { ethers: ether } = require("hardhat");
const { ethers } = require("ethers");
const expect = require("chai");

const mainnetBridgeAddress = "0x2a3DD3EB832aF982ec71669E178424b10Dca2EDe";
const testnetBridgeAddress = "0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7";

async function main() {
  const networkName = process.env.HARDHAT_NETWORK;
  const pathDeployOutputParameters = path.join(__dirname, "./output.json");
  const deployOutputParameters = require(pathDeployOutputParameters);

  let zkEVMBridgeContractAddress;
  // Use mainnet bridge address
  if (networkName === "polygonZKEVMMainnet" || networkName === "mainnet") {
    zkEVMBridgeContractAddress = mainnetBridgeAddress;
  } else if (
    networkName === "polygonZKEVMTestnet" ||
    networkName === "goerli"
  ) {
    // Use testnet bridge address
    zkEVMBridgeContractAddress = testnetBridgeAddress;
  }

  try {
    // verify governance
    await hre.run("verify:verify", {
      address: deployOutputParameters.pingReceiverContract,
      constructorArguments: [zkEVMBridgeContractAddress],
    });
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
