const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const validator = require("validator");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: "artemiykotyanov67@mail.ru",
    pass: "hTqsXLBhN9vP0v88Cv4E",
  },
});

app.post("/send-email", async (req, res) => {
  let { senderEmail, message } = req.body;

  if (!validator.isEmail(senderEmail)) {
    return res.status(400).send("Invalid email address.");
  }

  let mailOptions = {
    from: "artemiykotyanov67@mail.ru",
    to: "gabrichteam@gmail.com",
    subject: "Contact form message",
    text: `From: ${senderEmail}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).send("Error while sending email: " + error.message);
    } else {
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
