//depenendencies

const express = require("express");
const cors = require("cors");
const songController = require("./controllers/songController");

//config
const app = express();

//MIDDLEWARE!
app.use(cors());
app.use(express.json());
app.use("/songs", songController);
//ROUTES

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("This route doesnt exist");
});

module.exports = app;
