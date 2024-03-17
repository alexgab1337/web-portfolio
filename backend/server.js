require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { senderEmail, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "gabrichteam@gmail.com",
    subject: "Contact form message",
    text: `From: ${senderEmail}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('');
  } catch (error) {
    console.error("Error while sending email:", error);
    res.status(500).send('');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
