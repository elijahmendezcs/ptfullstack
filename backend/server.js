require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // This is your routes/index.js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Mount API routes under /api
app.use("/api", routes);

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// For any other request not handled by /api, serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
