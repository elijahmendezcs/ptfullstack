const { sendMail } = require("../config/mailer");

exports.handleContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, subject, address, message } = req.body;

    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    
    await sendMail({ firstName, lastName, email, subject, address, message });

    
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error in handleContactForm:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
