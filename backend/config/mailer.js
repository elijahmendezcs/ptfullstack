// backend/config/mailer.js
const nodemailer = require("nodemailer");

exports.sendMail = async ({ firstName, lastName, email, subject, address, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  // 2) Build the mailOptions
  const mailOptions = {
    from: `"Your Website" <${process.env.EMAIL_USER}>`,    
    to: "elijahmendez2022@gmail.com",                          
    subject: subject || "New Contact Form Message",        
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
