const express = require("express");

const {
  getSpecificProposal,
  getDaoProposal,
  createProposal,
} = require("../controllers/proposal");
const router = express.Router();

router.get("/proposal/:proposalId", getSpecificProposal);

router.get("/proposals/:daoId", getDaoProposal);

router.post("/proposal", createProposal);

module.exports = router;
