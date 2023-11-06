const express = require("express");
const { getDao, createDao } = require("../controllers/dao");

const router = express.Router();

router.post("/create", createDao);
router.get("/daos", getDao);

module.exports = router;
