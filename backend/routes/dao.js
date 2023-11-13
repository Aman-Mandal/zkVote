const express = require("express");
const { getDao, createDao, getSingleDao } = require("../controllers/dao");

const router = express.Router();

router.post("/create", createDao);
router.get("/daos", getDao);
router.get("/dao/:id", getSingleDao);

module.exports = router;
