/* eslint-disable no-await-in-loop, no-use-before-define, no-lonely-if, import/no-dynamic-require, global-require */
/* eslint-disable no-console, no-inner-declarations, no-undef, import/no-unresolved, no-restricted-syntax */
const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const { ethers: ether } = require("hardhat");
const { ethers } = require("ethers");

const mainnetBridgeAddress = "0x2a3DD3EB832aF982ec71669E178424b10Dca2EDe";
const testnetBridgeAddress = "0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7";

async function main() {
  let zkEVMProvider;
  let zkEVMBridgeContractAddress;

  const networkName = process.env.HARDHAT_NETWORK;

  let ethProvider = new ethers.providers.JsonRpcProvider(
    "https://eth-goerli.g.alchemy.com/v2/rPfyhhDXz6kKnN7XlD_vI0HOuemQf5Tj"
  );

  // Use mainnet bridge address
  if (networkName === "mainnet") {
    zkEVMBridgeContractAddress = mainnetBridgeAddress;
    zkEVMProvider = new ethers.providers.JsonRpcProvider(
      "https://zkevm-rpc.com"
    );
  } else if (networkName === "goerli") {
    // Use testnet bridge address
    zkEVMBridgeContractAddress = testnetBridgeAddress;
    zkEVMProvider = new ethers.providers.JsonRpcProvider(
      "https://rpc.public.zkevm-test.net"
    );
  } else {
    throw new Error("Network not supported");
  }

  // Load deployer
  let deployer;
  let deployerZkEVM;
  if (process.env.PVTKEY) {
    deployer = new ethers.Wallet(process.env.PVTKEY, ethProvider);
    deployerZkEVM = new ethers.Wallet(process.env.PVTKEY, zkEVMProvider);
    console.log("Using pvtKey deployer with address: ", deployer.address);
  } else if (process.env.MNEMONIC) {
    deployer = ethers.Wallet.fromMnemonic(
      process.env.MNEMONIC,
      "m/44'/60'/0'/0/0"
    ).connect(ethers.provider);
    deployerZkEVM = ethers.Wallet.fromMnemonic(
      process.env.MNEMONIC,
      "m/44'/60'/0'/0/0"
    ).connect(zkEVMProvider);
    console.log("Using MNEMONIC deployer with address: ", deployer.address);
  } else {
    [deployer] = await ethers.getSigners();
  }

  // Deploy Ping receiver on zkevm testnet /zkevm mainnet
  const pingReceiverFactory = await ether.getContractFactory(
    "MyGovernor",
    deployer
  );
  const pingReceiverContract = await pingReceiverFactory.deploy(
    "0x602374c03e7816DCcdc1CAc53AAA27a9774f9d84",
    "0x602374c03e7816DCcdc1CAc53AAA27a9774f9d84",
    1000000000,
    zkEVMBridgeContractAddress
  );
  await pingReceiverContract.deployed();

  console.log(pingReceiverContract.address);

  // Deploy Ping sender on goerli / zkevm mainnet
  const pingSenderFactory = await ether.getContractFactory(
    "VoteOnZkEvm",
    deployerZkEVM
  );
  const pingSenderContract = await pingSenderFactory.deploy(
    zkEVMBridgeContractAddress,
    pingReceiverContract.address
  );

  await pingSenderContract.deployed();

  console.log("Ping sender deployed on: ", pingSenderContract.address);

  // Set address on both networks
  await pingSenderContract.registerProposal(
    "0x8BE789B765926CAd6816EF7B80f5780ac49af9A6",
    1
  );
  // await pingReceiverContract.registerProposal(
  //   "0x602374c03e7816DCcdc1CAc53AAA27a9774f9d84"
  // );

  await pingReceiverContract.setVoteOnZkEvmAddress(pingSenderContract.address);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
