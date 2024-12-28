import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col items-center mb-12 gap-6 mt-12">
      {/* First Name and Last Name Fields */}
      <div className="flex justify-center gap-6 w-full max-w-2xl">
        <div className="flex flex-col flex-1">
          <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
            First Name *
          </label>
          <Input
            placeholder="First Name"
            className="
              border border-black 
              rounded-none 
              px-2 py-1 text-sm 
              font-playfair 
              placeholder:font-playfair
              placeholder:text-black-700
              placeholder:italic
            "
          />
        </div>

        <div className="flex flex-col flex-1">
          <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
            Last Name *
          </label>
          <Input
            placeholder="Last Name"
            className="
              border border-black 
              rounded-none 
              px-2 py-1 text-sm 
              font-playfair 
              placeholder:font-playfair
              placeholder:text-black-700
              placeholder:italic
            "
          />
        </div>
      </div>

      {/* Email Address Field */}
      <div className="flex flex-col w-full max-w-2xl">
        <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
          Email *
        </label>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          className="
            border border-black 
            rounded-none 
            px-2 py-1 text-sm 
            font-playfair 
            placeholder:font-playfair
            placeholder:text-black-700
            placeholder:italic
          "
        />
      </div>

      {/* Subject Field */}
      <div className="flex flex-col w-full max-w-2xl">
        <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
          Subject *
        </label>
        <Input
          placeholder="Enter Your Subject"
          className="
            border border-black 
            rounded-none 
            px-2 py-1 text-sm 
            font-playfair 
            placeholder:font-playfair
            placeholder:text-black-700
            placeholder:italic
          "
        />
      </div>

      {/* Address Field */}
      <div className="flex flex-col w-full max-w-2xl">
        <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
          Address *
        </label>
        <Input
          placeholder="Enter Your Address"
          className="
            border border-black 
            rounded-none 
            px-2 py-1 text-sm 
            font-playfair 
            placeholder:font-playfair
            placeholder:text-black-700
            placeholder:italic
          "
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col w-full max-w-2xl">
        <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
          Message *
        </label>
        <textarea
          placeholder="Enter Your Message"
          className="
            border border-black 
            rounded-none 
            px-2 py-1 text-sm 
            font-playfair 
            placeholder:font-playfair
            placeholder:text-black-700
            placeholder:italic
            h-32
          "
        ></textarea>
      </div>

      {/* Send Button */}
      <Button
        className="
    w-full 
    max-w-2xl 
    border 
    border-black 
    rounded-none 
    px-2 
    py-2 
    text-sm 
    font-playfair 
    text-white 
    bg-black
  "
      >
        Send
      </Button>
    </div>
  );
};

export default About;
