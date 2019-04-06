const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("contact");
});

router.post("/", (req, res) => {
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
      res.render("contact", {
        msg: "Thanks for contacting. We will get back to you soon "
      });

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
});

module.exports = router;