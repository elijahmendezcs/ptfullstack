import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      {/* About Me Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "30px",
            fontStyle: "italic",
            fontWeight: 400,
            marginTop: "20px",
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "1.6",
            textAlign: "center",
            marginTop: "10px",
            maxWidth: "600px",
            color: "#888",
          }}
        >
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </Typography>
      </Box>

      {/* Contact Me Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "30px",
            fontStyle: "italic",
            fontWeight: 400,
            marginBottom: "10px",
          }}
        >
          Contact Me
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "1.6",
            textAlign: "center",
            maxWidth: "600px",
            color: "#888",
          }}
        >
          500 Terry Francine Street
          <br />
          San Francisco, CA 94158
          <br />
          info@mysite.com
          <br />
          Tel: 123-456-7890
        </Typography>
      </Box>

      {/* Form Content */}
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
    </>
  );
};

export default About;
