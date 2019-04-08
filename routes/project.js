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

module.exports = router;
