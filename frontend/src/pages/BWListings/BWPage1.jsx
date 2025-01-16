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
    
    // TODO: Change Quantity to not have negative numbers.
    // TODO: Change the fonts for the text on the card.
    // TODO: When the frame size button is clicked, change the border color to black.
    // TODO: Adjust positioning of card to fit the page better and possible remove borders? 
    // TODO: Also, when the quantity and frame size is selected, the price needs to adjust accordingly.

    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-3xl shadow">
        {/* Card layout can be a split flex if you want image on the left, content on right */}
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="md:w-1/2">
            <img
              src={blackandwhite5}
              alt="Satellite"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text/content section */}
          <div className="p-6 md:w-1/2 flex flex-col">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl">Black and White 1</CardTitle>
              <CardDescription className="text-lg">from $25.00</CardDescription>
            </CardHeader>

            <CardContent className="mt-4 p-0">
              <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                This is an art print. The handcrafted canvas makes it perfect
                for both home and office wall decor. Option to frame.
              </p>

              {/* Frame options */}
              <div className="mb-4">
                <Label className="mb-2 block">Frame Size:</Label>
                <div className="flex space-x-2">
                  <Button variant="outline">8x10</Button>
                  <Button variant="outline">11x14</Button>
                  <Button variant="outline">16x20</Button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-2">
                <Label htmlFor="quantity" className="mb-2 block">
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
    </div>
  );
};

export default BWPage1;
