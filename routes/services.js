const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("services");
});

router.get("/architectural-services", function(req, res) {
  res.render("services/architectural-services");
});

router.get("/residential-interior-designing", function(req, res) {
  res.render("services/residential-interior-designing");
});
router.get("/hospitality-interior-designing", function(req, res) {
  res.render("services/hospitality-interior-designing");
});
router.get("/commercial-interior-designing", function(req, res) {
  res.render("services/commercial-interior-designing");
});
router.get("/turn-Key-projects", function(req, res) {
  res.render("services/turn-Key-projects");
});
router.get("/interior-decoration", function(req, res) {
  res.render("services/interior-decoration");
});
router.get("/modular-kitchen", function(req, res) {
  res.render("services/modular-kitchen");
});
router.get("/handmade-furniture", function(req, res) {
  res.render("services/handmade-furniture");
});
router.get("/modular-furniture", function(req, res) {
  res.render("services/modular-furniture");
});

module.exports = router;
