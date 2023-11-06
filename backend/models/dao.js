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
  daoContract: {
    chain: {
      type: String,
    },
    address: {
      type: String,
    },
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
});

module.exports = mongoose.model("Dao", daoSchema);
