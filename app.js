const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
require("dotenv").config();
const app = express();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
const MONGODB_URI_LOCAL = process.env.MONGODB_URI_LOCAL;
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);

const mongoURI = PORT === 8000 ? MONGODB_URI_LOCAL : MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(PORT, () => {
  console.log("server is on", PORT);
});
