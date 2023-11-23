const dao = require("../models/dao");
const Proposal = require("../models/proposal");

exports.createProposal = async (req, res, next) => {
  try {
    const data = req.body;

    console.log("data is", data);

    const proposal = new Proposal(data);
    const proposalDetails = await proposal.save();

    const daoId = await data.daoId;

    const daoInfo = await dao.findOne({ _id: daoId });

    daoInfo.proposals.push(proposalDetails._id.toString());

    await daoInfo.save();

    return res.status(201).json({ message: "Proposal created" });
  } catch (error) {
    next(error);
  }
};

exports.getSpecificProposal = async (req, res, next) => {
  try {
    const { proposalId } = req.params;

    const proposal = await Proposal.findOne({ _id: proposalId });

    return res.status(200).json({ proposal });
  } catch (error) {
    next(error);
  }
};

exports.getDaoProposal = async (req, res, next) => {
  try {
    const { daoId } = req.params;

    const info = await dao.findOne({ _id: daoId }).populate("proposals");

    return res.status(200).json({ info });
  } catch (error) {
    next(error);
  }
};
