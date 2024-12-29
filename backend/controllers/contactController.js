// backend/controllers/contactController.js
const { sendMail } = require("../config/mailer");

exports.handleContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, subject, address, message } = req.body;

    // 1) Basic validation
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // 2) Send mail via mailer.js
    await sendMail({ firstName, lastName, email, subject, address, message });

    // 3) Respond to client
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error in handleContactForm:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
