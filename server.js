const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
dbConnection();
//server initialization
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("error");
  }
  console.log("server is runing");
});
//Parsing data
app.use(express.json());
//routers
app.use("/api/contact", require("./routers/Contact"));
