const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("projects");
});

router.get("/residence-villa-greater-kailash", (req, res) => {
  res.render("projects/residence-villa-greater-kailash");
});

router.get("/residence-vasant-kunj", (req, res) => {
  res.render("projects/residence-vasant-kunj");
});

router.get("/duplex-residence-friends-colony", (req, res) => {
  res.render("projects/duplex-residence-friends-colony");
});

router.get("/residence-friends-colony", (req, res) => {
  res.render("projects/Residence-friends-colony");
});

router.get("/residence-friends-colony2", (req, res) => {
  res.render("projects/residence-friends-colony2");
});

router.get("/gym-narnaul-haryana", (req, res) => {
  res.render("projects/gym-narnaul-haryana");
});

router.get("/duplex-apartment-heritage-city-gurugram", (req, res) => {
  res.render("projects/duplex-apartment-heritage-city-gurugram");
});

router.get("/resort-cental-park-2-gurugram", (req, res) => {
  res.render("projects/resort-cental-park-2-gurugram");
});

router.get("/villa-dlf-phase-1-gurugram", (req, res) => {
  res.render("projects/villa-dlf-phase-1-gurugram");
});

router.get("/villa-dwarka-delhi", (req, res) => {
  res.render("projects/villa-dwarka-delhi");
});

router.get("/villa-sardar-patel-marg", (req, res) => {
  res.render("projects/villa-sardar-patel-marg");
});

router.get("/residence-palm-hill-sector-89-gurugram", (req, res) => {
  res.render("projects/residence-palm-hill-sector-89-gurugram");
});

module.exports = router;
