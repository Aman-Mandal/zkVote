/* eslint-disable no-await-in-loop, no-use-before-define, no-lonely-if, import/no-dynamic-require, global-require */
/* eslint-disable no-console, no-inner-declarations, no-undef, import/no-unresolved, no-restricted-syntax */
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { ethers: ether } = require("hardhat");
const { ethers } = require("ethers");
// const networkIDMainnet = 0;
const networkID = 0;

const pathPingPongOutput = path.join(__dirname, "../deployment/output.json");
const pingSenderContractAddress =
  require(pathPingPongOutput).pingSenderContract;

async function main() {
  // Load deployer
  let deployer;
  let ethProvider = new ethers.providers.JsonRpcProvider(
    "https://rpc.public.zkevm-test.net"
  );
  if (process.env.PVTKEY) {
    deployer = new ethers.Wallet(process.env.PVTKEY, ethProvider);
    console.log("Using pvtKey deployer with address: ", deployer.address);
  } else if (process.env.MNEMONIC) {
    deployer = ethers.Wallet.fromMnemonic(
      process.env.MNEMONIC,
      "m/44'/60'/0'/0/0"
    ).connect(ethProvider);
    console.log("Using MNEMONIC deployer with address: ", deployer.address);
  } else {
    [deployer] = await ethers.getSigners();
  }

  const nftBridgeFactory = await ether.getContractFactory(
    "VoteOnZkEvm",
    deployer
  );
  const nftBridgeContract = nftBridgeFactory.attach(pingSenderContractAddress);

  const forceUpdateGlobalExitRoot = true; // fast bridge
  const tx = await nftBridgeContract.vote(
    networkID, // Send to the zkEVM
    forceUpdateGlobalExitRoot,
    "65082570570659382433443455823876823216001414744064441015256244685829955391424",
    0
  );

  console.log("Bridge done succesfully");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
