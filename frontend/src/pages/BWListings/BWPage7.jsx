import React, { useState } from "react";
import { priceIds } from "../../lib/priceIds";

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
import blackandwhite from "../../images/BlackAndWhiteImages/blackandwhite.jpg";

const BWPage1 = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleBuyNow = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/stripe/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            priceId: priceIds["BlackAndWhite1"],
          }),
        }
      );
      const data = await res.json();
      window.location.href = data.url; // Redirect to Stripe Checkout
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="w-full p-4 md:p-8 bg-white rounded-lg mt-[70px] border-white">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image section */}
        <div className="flex-1 max-h-[60vh] overflow-hidden rounded-lg">
          <img
            src={blackandwhite}
            alt="Art print"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Container for header & main text */}
          <div>
            <CardHeader className="p-0">
              <CardTitle className="text-2xl md:text-3xl font-cormorant italic mb-2">
                Black and White 2
              </CardTitle>
              <CardDescription className="text-base md:text-lg font-cormorant">
                from $25.00
              </CardDescription>
            </CardHeader>

            <CardContent className="mt-4 md:mt-6 p-0">
              <p className="font-cormorant text-base md:text-lg italic mb-6 text-black-700">
                This is an art print. The handcrafted canvas makes it perfect
                for both home and office wall decor. Option to frame.
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
                      className={`font-cormorant ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-white text-black border-black"
                      }`}
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
                >
                  Quantity:
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-24"
                />
              </div>
            </CardContent>
          </div>

          <CardFooter className="p-0 mt-4">
            <Button
              onClick={handleBuyNow}
              className="w-full font-cormorant bg-black text-white"
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
