// routes/stripe.js
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { priceId, quantity } = req.body;

    // Basic validation
    if (!priceId) {
      return res.status(400).json({ error: "No price ID provided." });
    }
    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: "Invalid quantity" });
    }

    // Create the Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      // Stripe will display the shipping address form on the Checkout page:
      shipping_address_collection: {
        // Set which countries you ship to:
        allowed_countries: ["US", "CA"],
      },
      // Define your shipping rate(s) inline:
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Flat Shipping",
            type: "fixed_amount",
            fixed_amount: {
              amount: 500, // $5.00 in cents
              currency: "usd",
            },
            // Optionally set a delivery estimate (shown on the checkout page)
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 3,
              },
              maximum: {
                unit: "business_day",
                value: 5,
              },
            },
          },
        },
      ],
      // Where to redirect upon success/cancel:
      success_url: "http://localhost:5173/thankyou",
      cancel_url: "http://localhost:5173/cancel",
    });

    // Return the session URL
    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
