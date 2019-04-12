const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("services");
});

router.get("/architectural-services", function(req, res) {
  res.render("services/architectural-services");
});

router.get("/commercial-interior-designing", function(req, res) {
  res.render("services/commercial-interior-designing");
});
router.get("/residential-interior-designing", function(req, res) {
  res.render("services/residential-interior-designing");
});
router.get("/architectural-services", function(req, res) {
  res.render("services/architectural-services");
});
router.get("/architectural-services", function(req, res) {
  res.render("services/architectural-services");
});
router.get("/architectural-services", function(req, res) {
  res.render("services/architectural-services");
});
router.get("/architectural-services", function(req, res) {
  res.render("services/architectural-services");
});
router.get("/architectural-services", function(req, res) {
  res.render("services/architectural-services");
});
module.exports = router;
