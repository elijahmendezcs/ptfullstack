// routes/index.js
const express = require("express");
const router = express.Router();

const contactRoutes = require("./contact");
const stripeRoutes = require("./stripe");

router.use("/contact", contactRoutes);
router.use("/stripe", stripeRoutes);

module.exports = router;
