const express = require("express");
const Post = require("../../models/post");

const router = express.Router();

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "projects";
  next();
});

router.get("/", (req, res) => {
  res.render("projects/heritage-city");
});

module.exports = router;
