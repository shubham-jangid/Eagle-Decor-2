const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("projects");
});

// router.use("/heritage-city", (req, res, next) => {
//   next();

//   console.log(req.url);
// });

router.get("/residence-villa-greater-kailash", (req, res) => {
  res.render("projects/residence-villa-greater-kailash");
});

router.get("/residence-vasant-kunj", (req, res) => {
  res.render("projects/residence-vasant-kunj");
});

router.get("/duplex-residence-friends-colony", (req, res) => {
  res.render("projects/duplex-residence-friends-colony");
});

router.get("/Residence-friends-colony", (req, res) => {
  res.render("projects/Residence-friends-colony");
});

// router.get("/Residence-friends-colony", (req, res) => {
//   res.render("projects/Residence-friends-colony");
// });
// router.get("/Residence-friends-colony", (req, res) => {
//   res.render("projects/Residence-friends-colony");
// });

module.exports = router;
