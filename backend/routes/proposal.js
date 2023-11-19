const express = require("express");

const {
  getSpecificProposal,
  getDaoProposals,
  createProposal,
} = require("../controllers/proposal");
const router = express.Router();

router.get("/proposal/:proposalId", getSpecificProposal);

router.get("/proposal/:daoId", getDaoProposals);

router.post("/proposal", createProposal);
