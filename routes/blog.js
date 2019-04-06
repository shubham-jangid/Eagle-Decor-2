const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("blog");
});

router.get("/top-2019-interior-design-trends", (req, res) => {
  res.render("blog/top-2019-interior-design-trends");
});

router.get("/6-popular-interior-design-styles", (req, res) => {
  res.render("blog/6-popular-interior-design-styles");
});

router.get("/5-bedroom-style-tips", (req, res) => {
  res.render("blog/5-bedroom-style-tips");
});
module.exports = router;
