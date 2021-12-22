const express = require("express");
const app = express();

app.listen("5000", () => {
  console.log("backend is running at 5000");
});
app.use("/", (req, res) => {
  console.log("hey this is main url");
});
