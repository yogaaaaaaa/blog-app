const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.use(express.json());
app.listen(port, () => {
  console.log(`backend is running at ${port}`);
});
mongoose.connect(process.env.MONGO_URL).then(console.log("db connected"));

app.use("/api/auth", authRoute);
