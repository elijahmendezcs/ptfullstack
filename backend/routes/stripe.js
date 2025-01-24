const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); 
// make sure STRIPE_SECRET_KEY is in .env

router.post("/create-checkout-session", async (req, res) => {
  try {
    // 1) Grab the product details from req.body
    const { priceId, quantity } = req.body; 

    // Validate the quantity to ensure it's a positive integer
    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: "Invalid quantity" });
    }

    // 2) Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: priceId, 
          quantity, // Use the quantity passed from the frontend
        },
      ],
      success_url: "http://localhost:5173/thankyou",
      cancel_url: "http://localhost:5173/cancel",
    });

    // 3) Send back the session URL to redirect the user on the front end
    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err); // Log full error to see details
    res.status(500).json({ error: err.message }); // Return the real error
  }
});

module.exports = router;
