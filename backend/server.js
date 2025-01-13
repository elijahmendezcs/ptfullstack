require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // your existing routes folder index
const stripeRoutes = require("./routes/stripe"); // import the new stripe route

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Existing routes under "/api"
app.use("/api", routes);

// New route for Stripe checkout creation
app.use("/api/stripe", stripeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
