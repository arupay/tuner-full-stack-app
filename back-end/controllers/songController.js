const express = require("express");
const tunes = express.Router();
const favTunes = require("../models/songs");

tunes.get("/", (req, res) => {
  res.json({ success: true, payload: favTunes });
});

module.exports = tunes;
