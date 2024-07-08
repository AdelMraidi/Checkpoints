const nodemailer = require("nodemailer");

// create a transporter object
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xxxxxx@gmail.com",
    pass: "xxxxxxxxxxxxxx",
  },
});

// email data
let mailOptions = {
  from: "xxxxxxx@gmail.com",
  to: "xxxxxxxx@gmail.com",
  subject: "Hello nodemailer",
  text: "test nodemailer",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) console.error(err);
  else console.log("ok sent!");
});
