const nodemailer = require("nodemailer");

exports.sendMail = async ({
  firstName,
  lastName,
  email,
  subject,
  address,
  message,
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Luxe Creative Studio" <${process.env.EMAIL_USER}>`,
    to: "luxecreativestudiophoto@gmail.com",
    subject: subject || "New Contact Form Message",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Address: ${address}
      Message: ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
};
