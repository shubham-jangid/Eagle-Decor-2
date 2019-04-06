const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

//importing the route
const project = require("./routes/project");
const blog = require("./routes/blog");
const contact = require("./routes/contact");

//view engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// using the route middleware
app.use("/project", project);
app.use("/blog", blog);
app.use("/contact", contact);

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/services", function(req, res) {
  res.render("services");
});
app.get("/blog", function(req, res) {
  res.render("blog");
});

app.get("/blog-single", function(req, res) {
  res.render("blog-single");
});
app.get("/contact", function(req, res) {
  res.render("contact");
});

// conatact feature

app.listen(8080, () => {
  console.log("8080");
});
