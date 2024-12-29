// backend/config/mailer.js
const nodemailer = require("nodemailer");

exports.sendMail = async ({ firstName, lastName, email, subject, address, message }) => {
  // 1) Create transporter (using Gmail as an example)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // from .env
      pass: process.env.EMAIL_PASS,
    },
  });

  // 2) Build the mailOptions
  const mailOptions = {
    from: `"Your Website" <${process.env.EMAIL_USER}>`,    // 'from' address
    to: "elijahmendez2022@gmail.com",                          // where you want to receive the email
    subject: subject || "New Contact Form Message",        // fallback subject if empty
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Address: ${address}
      Message: ${message}
    `,
  };

  // 3) Send
  await transporter.sendMail(mailOptions);
};
