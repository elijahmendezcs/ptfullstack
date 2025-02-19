// routes/stripe.js
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

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

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: priceId, // Already set to "General – Tangible Goods" in Dashboard
          quantity,
        },
      ],
      // Enable automatic tax calculation (requires Stripe Tax enabled + Registration)
      automatic_tax: {
        enabled: true,
      },
      // Collect shipping address on the Checkout page
      shipping_address_collection: {
        allowed_countries: ["US"], // Add more if needed
      },
      // Define shipping cost, including a tax code for shipping
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Flat Shipping",
            type: "fixed_amount",
            fixed_amount: {
              amount: 500, // $5 in cents
              currency: "usd",
            },
            // Many US states, including Ohio, treat mandatory shipping as taxable.
            // This is the shipping tax code recommended by Stripe for "Shipping."
            tax_code: "txcd_92010001",
            // Typically "exclusive" if you want the tax to be added on top of $5
            tax_behavior: "exclusive",
            // Optional: Show a delivery estimate on the Checkout page
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 5 },
            },
          },
        },
      ],
      // Post-checkout success & cancel URLs
      success_url: `${frontendUrl}/thankyou`,
      cancel_url: `${frontendUrl}/cancel`,
    });

    // Send the Checkout Session URL back to client
    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
