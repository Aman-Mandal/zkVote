require("dotenv").config();
const express = require("express");
const { ethers } = require("ethers");
const { ZKEVMBridgeABI } = require("../constants");
const mainnetBridgeAddress = "0x2a3DD3EB832aF982ec71669E178424b10Dca2EDe";
const testnetBridgeAddress = "0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7";

const mekrleProofString = "/merkle-proof";
const getClaimsFromAcc = "/bridges/";
//no idea whether it works or not cause don't know how to run, check scripts/claimPong.js if any doubts
async function claim() {
  try {
    const provider = new ethers.providers.WebSocketProvider(
      process.env.WEBSCOKET_URI
    );

    const currentProvider = new ethers.providers.JsonRpcProvider(
      "https://eth-goerli.g.alchemy.com/v2/rPfyhhDXz6kKnN7XlD_vI0HOuemQf5Tj"
    );
    let deployer;

    deployer = new ethers.Wallet(process.env.PVTKEY, currentProvider);
    console.log("Using pvtKey deployer with address: ", deployer.address);

    let zkEVMBridgeContractAddress = testnetBridgeAddress;
    let baseURL = "https://bridge-api.public.zkevm-test.net";

    const axios = require("axios").create({
      baseURL,
    });

    const bridgeContract = new ethers.Contract(
      zkEVMBridgeContractAddress,
      ZKEVMBridgeABI,
      provider
    );

    const depositAxions = await axios.get(
      getClaimsFromAcc + pingReceiverContractAddress,
      { params: { limit: 100, offset: 0 } }
    );
    const depositsArray = depositAxions.data.deposits;

    if (depositsArray.length === 0) {
      console.log("Not ready yet!");
      return;
    }

    for (let i = 0; i < depositsArray.length; i++) {
      const currentDeposit = depositsArray[i];
      if (currentDeposit.claim_tx_hash == "") {
        if (currentDeposit.ready_for_claim) {
          const proofAxios = await axios.get(mekrleProofString, {
            params: {
              deposit_cnt: currentDeposit.deposit_cnt,
              net_id: currentDeposit.orig_net,
            },
          });

          const { proof } = proofAxios.data;
          const claimTx = await bridgeContract.claimMessage(
            proof.merkle_proof,
            currentDeposit.deposit_cnt,
            proof.main_exit_root,
            proof.rollup_exit_root,
            currentDeposit.orig_net,
            currentDeposit.orig_addr,
            currentDeposit.dest_net,
            currentDeposit.dest_addr,
            currentDeposit.amount,
            currentDeposit.metadata
          );
          console.log("claim message succesfully send: ", claimTx.hash);
        } else {
          console.log("bridge not ready for claim");
        }
      } else {
        console.log("Already Claimed");
      }
    }
  } catch (error) {
    console.log("err ", error);
  }
}

module.exports = claim;
