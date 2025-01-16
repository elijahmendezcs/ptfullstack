import React from "react";
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
import blackandwhite5 from "../../images/BlackAndWhiteImages/blackandwhite5.jpg";

const BWPage1 = () => {
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
    <Card className="w-screen min-h-screen">
      {/* Full height flex container to distribute space between image and text */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Image section (40% width on medium screens) */}
        <div className="md:w-2/5 h-full">
          <img
            src={blackandwhite5}
            alt="Satellite"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content section (60% width on medium screens) */}
        <div className="p-8 md:w-3/5 h-full flex flex-col">
          <CardHeader className="p-0">
            <CardTitle className="text-3xl font-cormorant italic mb-2">
              Black and White 1
            </CardTitle>
            <CardDescription className="text-lg">
              from $25.00
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-6 p-0">
            <p
              className="
                font-cormorant
                text-lg
                italic
                mb-6
                text-black-700
              "
            >
              This is an art print. The handcrafted canvas makes it perfect
              for both home and office wall decor. Option to frame.
            </p>

            {/* Frame options */}
            <div className="mb-6">
              <Label
                className="
                  mb-2 block 
                  font-cormorant
                  italic
                  text-lg
                "
              >
                Frame Size:
              </Label>
              <div className="flex space-x-2">
                <Button variant="outline" className="font-cormorant">
                  8x10
                </Button>
                <Button variant="outline" className="font-cormorant">
                  11x14
                </Button>
                <Button variant="outline" className="font-cormorant">
                  16x20
                </Button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <Label
                htmlFor="quantity"
                className="mb-2 block font-cormorant italic text-lg"
              >
                Quantity:
              </Label>
              <Input
                id="quantity"
                type="number"
                defaultValue={1}
                className="w-24"
              />
            </div>
          </CardContent>

          <CardFooter className="mt-auto p-0 pt-4">
            <Button onClick={handleBuyNow} className="w-full">
              Buy Now
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default BWPage1;
