// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./routes"); // This is your routes/index.js

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Mount all routes under /api
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
