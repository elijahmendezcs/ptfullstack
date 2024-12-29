require("dotenv").config();  // 1) Load .env variables
const express = require("express");
const cors = require("cors");
const routes = require("./routes");  // 2) Import our routes folder

const app = express();
const PORT = process.env.PORT || 3000;

// 3) Middleware
app.use(express.json());   // Parse JSON bodies
app.use(cors());           // Allow cross-origin requests

// 4) Mount all routes under "/api"
app.use("/api", routes);

// 5) Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
