const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const catRoute = require("./routes/categories");
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.use(express.json());
app.listen(port, () => {
  console.log(`backend is running at ${port}`);
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/categories", catRoute);
