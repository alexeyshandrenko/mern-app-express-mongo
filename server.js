const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
// const generateAccessToken = require("./utils");
const mongoose = require("mongoose");
const router = require("./router/index");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/", router);
app.use(errorMiddleware);

mongoose
  .set("strictQuery", false)
  .connect(process.env.DB_URL)
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("express is here");
});

app.listen(PORT, () => {
  console.log("server is running");
});
