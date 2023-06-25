const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//database connection
mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test Ok");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.create({
    name,
    email,
    password: bcrypt.hashSync(password, secret),
  });
});

app.listen(4000);
