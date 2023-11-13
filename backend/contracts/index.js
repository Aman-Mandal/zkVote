require("dotenv").config();
const express = require("express");
const { ethers } = require("ethers");

async function claim() {
  const provider = new ethers.providers.WebSocketProvider(
    process.env.WEBSCOKET_URI
  );

  const contract = new ethers.Contract("contractAdress", "ABI", provider);

  contract.on(
    "claim",
    async (
      smtProof,
      index,
      mainnetExitRoot,
      roolupExitRoot,
      originNetwork,
      originAddress,
      destinationAddress,
      amount,
      metadata
    ) => {
      const bridgeContract = new ethers.Contract(
        "contractAddress2",
        "ABI2",
        provider
      );

      bridgeContract.claimMessage(
        smtProof,
        index,
        mainnetExitRoot,
        roolupExitRoot,
        originNetwork,
        originAddress,
        destinationAddress,
        amount,
        metadata
      );
    }
  );
}
