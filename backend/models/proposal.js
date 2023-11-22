const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const proposalSchema = new Schema({
  name: String,
  description: String,
  proposedBy: String,
  proposalId: String,
  status: String,
  description: String,
});

module.exports = mongoose.model("Proposal", proposalSchema);
