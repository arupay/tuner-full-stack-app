const express = require("express");
const tunes = express.Router();
// const favTunes = require("../models/songs");
const db = require("../db/dbConfig");

//INDEX ROUTE
tunes.get("/", async (req, res) => {
  const allSongs = await db.any("SELECT * FROM songs");
  res.json({ success: true, payload: allSongs });
});

//SHOW INDIVIDUAL SONGS

tunes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tune = await db.one("SELECT * FROM songs WHERE id=$1", id);
  if (tune) {
    res.status(200).json({ success: true, payload: tune });
  } else {
    res.status(404).send(`No such anime w/  ID ${req.params.id}`);
  }
});

//CREATE ROUTE

tunes.post("/new", async (req, res) => {
  const newSong = req.body;
  const newSongs = await db.any(
    "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      req.body.name,
      req.body.artist,
      req.body.album,
      req.body.time,
      req.body.is_favorite,
    ]
  );
  res.status(200).json({ success: true, payload: newSongs });
});

module.exports = tunes;
