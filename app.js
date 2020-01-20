const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

//importing the route
const project = require("./routes/project");
const blog = require("./routes/blog");
const contact = require("./routes/contact");
const services = require("./routes/services");
//view engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// using the route middleware
app.use("/projects", project);
app.use("/blog", blog);
app.use("/contact", contact);
app.use("/services", services);

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

app.post("/", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.url);
  const myString = req.body.url;
  var url = myString.slice(1);
  console.log(url);

  const output = `
      <p> You have a new contact request </p>
      <h3> Contact Details </h3>
      <ul>
      <li> Name:${req.body.name}</li>
      <li> Email Address:${req.body.email}</li>
      <li> Phone:${req.body.phone}</li>
      </ul>
      <h3> Message </h3>
      <p> ${req.body.message}</p>
      `;
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 2525,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "eagledecor", // generated ethereal user
        pass: "b3F6M3IyN3lvZTAw" // generated ethereal password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"EagleDecor contact request  " <contact@eagledecor.in>', // sender address
      to: "eagledecor1@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.render(url, {
        msg: "Thanks for contacting. We will get back to you soon "
      });

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
});

// contact featrue on contact page

app.post("/contact", (req, res) => {
  console.log(req.body.name);
  const output = `	
    <p> You have a new contact request </p>	
    <h3> Contact Details </h3>	
    <ul>	
    <li> Name:${req.body.name}</li>	
    <li> Email Address:${req.body.email}</li>	
    <li> Phone:${req.body.phone}</li>	
    </ul>	
    <h3> Message </h3>	
    <p> ${req.body.message}</p>	
    `;
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 2525,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "eagledecor", // generated ethereal user
        pass: "b3F6M3IyN3lvZTAw" // generated ethereal password
      }
    });

    // setup email data with unicode symbols	app.listen(8080, () => {
    let mailOptions = {
      from: '"EagleDecor contact request  " <contact@eagledecor.in>', // sender address
      to: "eagledecor1@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.render("contact", {
        msg: "Thanks for contacting. We will get back to you soon "
      });

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
});

app.listen(80, () => {
  console.log("on port 80");
});
