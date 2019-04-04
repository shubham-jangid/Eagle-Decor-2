const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("project");
});

router.get("/heritage-city", (req, res) => {
  res.render("projects/heritage-city");
});

module.exports = router;
