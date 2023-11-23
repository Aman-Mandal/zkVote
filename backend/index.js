const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const daoRoutes = require("./routes/dao");
const proposalRoutes = require("./routes/proposal");
const claim = require("./contracts");
const cron = require("node-cron");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(daoRoutes);
app.use(proposalRoutes);

// //RUNS EVERY HOUR
// cron.schedule("* * * * *", async () => {
//   console.log("entered here");
//   await claim();
//   console.log("called");
// });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log("err is", err);
  });

app.listen(8000, console.log("server started"));
