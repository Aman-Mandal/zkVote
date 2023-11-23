const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const proposalSchema = new Schema(
  {
    title: String,
    description: String,
    proposedBy: String,
    proposalId: String,
    status: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Proposal", proposalSchema);
