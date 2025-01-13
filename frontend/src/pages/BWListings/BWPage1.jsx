// BWPage.jsx
import React from "react";
import { priceIds } from "../../lib/priceIds";

const BWPage1 = () => {
  const handleBuyNow = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: priceIds["BlackAndWhite1"], // or whichever listing this page represents
        }),
      });
      const data = await res.json();
      window.location.href = data.url; // Redirect to Stripe Checkout
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        fontSize: '2rem',
      }}
    >
      {/* Show your product's real details */}
      <div>
        <h2>Black and White #1</h2>
        <p>Some description or price here</p>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default BWPage1;
