// backend/routes/index.js
const express = require("express");
const router = express.Router();

const contactRoutes = require("./contact");

// Mount /contact routes
router.use("/contact", contactRoutes);

module.exports = router;
