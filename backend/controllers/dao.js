const Dao = require("../models/dao");

exports.createDao = async (req, res, next) => {
  try {
    const data = req.body;

    const newDao = new Dao(data);

    await newDao.save();

    return res.status(200).json({ message: "Successfully created" });
  } catch (error) {
    console.log("err is", error);
  }
};

exports.getDao = async (req, res, next) => {
  try {
    const { id } = req.params;

    const daoInfo = await Dao.findOne({ _id: id });

    return res
      .status(200)
      .json({ message: "Dao fetched successfully", data: daoInfo });
  } catch (error) {
    console.log("err is", error);
  }
};
