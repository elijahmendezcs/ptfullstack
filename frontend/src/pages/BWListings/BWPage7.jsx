// src/pages/BWPage1.jsx
import React, { useState } from "react";
import { priceIds } from "../../lib/priceIds"; // <-- adjust path if needed

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Remove the old import
// import architecture from "../../images/Architecture/arch1.jpg"; // Not needed anymore

const BWPage1 = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10));
    setQuantity(value || 1); // fallback to 1 if input is invalid
  };

  const handleBuyNow = async () => {
    try {
      // Make sure a size is chosen
      if (!selectedSize) {
        alert("Please select a frame size first.");
        return;
      }

      // Build the key for the priceIds object, e.g. "BW1_8x10"
      const priceKey = `A1_${selectedSize}`;

      // Make the request to your Express Stripe route
      const res = await fetch(
        "http://localhost:3000/api/stripe/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            priceId: priceIds[priceKey], // Use the correct Price ID
            quantity,
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Request failed");
      }

      // On success, get the Stripe Checkout URL and redirect
      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error("Error creating checkout session:", err);
      alert("Something went wrong with Checkout. Check console for details.");
    }
  };

  return (
    <Card className="w-full p-4 md:p-8 bg-white mt-[70px] border-white border-0">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image section */}
        <div className="flex-1 max-h-[60vh] overflow-hidden">
          {/* Reference the image from public folder */}
          <img
            src="/images/BW/blackandwhite1.JPG"
            alt="Art print"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <CardHeader className="p-0">
              <CardTitle className="text-2xl md:text-3xl font-cormorant italic mb-2">
                Simple Life
              </CardTitle>
              <CardDescription className="text-base md:text-lg font-cormorant">
                8x10: $25.00 | 11x14: $35.00 | 16x20: $45.00
              </CardDescription>
            </CardHeader>

            <CardContent className="mt-4 md:mt-6 p-0">
              <p className="font-cormorant text-base md:text-lg italic mb-6 text-black-700">
                This is a fine art print.
              </p>

              {/* Frame options */}
              <div className="mb-6">
                <Label className="mb-2 block font-cormorant italic text-base md:text-lg">
                  Frame Size:
                </Label>
                <div className="flex gap-2">
                  {["8x10", "11x14", "16x20"].map((size) => (
                    <Button
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`font-cormorant border-2 ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                      style={{
                        borderRadius: 0, // Square corners
                      }}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <Label
                  htmlFor="quantity"
                  className="mb-2 block font-cormorant italic text-base md:text-lg"
                  style={{
                    borderRadius: 0, // Square corners
                  }}
                >
                  Quantity:
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min={1}
                  className="w-24"
                  style={{
                    borderRadius: 0, // Square corners
                  }}
                />
              </div>
            </CardContent>
          </div>

          {/* Footer (Buy Now) at the bottom */}
          <CardFooter className="p-0 mt-4">
            <Button
              onClick={handleBuyNow}
              className="w-full font-cormorant bg-black text-white"
              style={{
                borderRadius: 0, // Square corners
              }}
            >
              Buy Now
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default BWPage1;
