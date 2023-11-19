const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const daoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    title: String,
  },
  tokenName: {
    title: String,
  },
  daoContract: {
    type: String,
  },
  tokenAddresses: [
    {
      chain: {
        type: String,
      },
      address: {
        type: String,
      },
    },
  ],
  proposals: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Proposal",
    },
  ],
  owner: {
    type: String,
  },
  socials: {
    twitter: String,
    github: String,
    telegram: String,
    linkedin: String,
    discord: String,
  },
});

module.exports = mongoose.model("Dao", daoSchema);
