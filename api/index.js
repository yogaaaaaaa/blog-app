const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

app.listen("5000", () => {
  console.log("backend is running at 5000");
});
mongoose.connect(process.env.MONGO_URL).then(console.log("db connected"));
app.use("/", (req, res) => {
  console.log("hey this is main url");
});

app.use("/auth", (req, res)=>{
  
})