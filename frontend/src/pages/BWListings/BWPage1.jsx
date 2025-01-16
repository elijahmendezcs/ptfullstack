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
          body: JSON.stringify({ priceId: priceIds["BlackAndWhite1"] }),
        }
      );
      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center py-8 px-4">
      {/* Card Container */}
      <Card className="max-w-5xl w-full md:flex-row flex-col overflow-hidden shadow-lg border border-gray-200">
        {/* Left side: Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src={blackandwhite5}
            alt="Black and White Art"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side: Product Details */}
        <div className="md:w-1/2 w-full p-6 flex flex-col bg-white">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-3xl font-cormorant italic">
              Black and White 1
            </CardTitle>
            <CardDescription className="text-lg font-light text-gray-600">
              from $25.00
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0 flex-grow">
            <p className="my-4 font-cormorant italic text-gray-700 leading-relaxed">
              This is an art print. The handcrafted canvas makes it perfect for
              both home and office wall decor. Option to frame.
            </p>

            {/* Frame Size */}
            <div className="mb-6">
              <Label className="mb-2 block font-cormorant italic text-gray-700">
                Frame Size:
              </Label>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="font-cormorant border-gray-300 bg-white hover:bg-gray-100"
                >
                  8x10
                </Button>
                <Button
                  variant="outline"
                  className="font-cormorant border-gray-300 bg-white hover:bg-gray-100"
                >
                  11x14
                </Button>
                <Button
                  variant="outline"
                  className="font-cormorant border-gray-300 bg-white hover:bg-gray-100"
                >
                  16x20
                </Button>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <Label
                htmlFor="quantity"
                className="mb-2 block font-cormorant italic text-gray-700"
              >
                Quantity:
              </Label>
              <Input
                id="quantity"
                type="number"
                defaultValue={1}
                className="w-24 border-gray-300"
              />
            </div>
          </CardContent>

          <CardFooter className="mt-6 p-0">
            <Button
              onClick={handleBuyNow}
              className="w-full bg-black text-white hover:bg-gray-900 transition-colors border-none"
            >
              Buy Now
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default BWPage1;
