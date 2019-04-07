const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("project");
});

router.use("/heritage-city", (req, res, next) => {
  next();

  console.log(req.url);
});

router.get("/heritage-city", (req, res) => {
  console.log("first" + req.url);
  res.render("projects/heritage-city");
});

module.exports = router;
