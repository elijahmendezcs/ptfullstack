import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box, Typography } from "@mui/material";

const About = () => {
  // 1) State for each form field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  // 2) Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    // Simple front-end validation (optional)
    if (!email) {
      alert("Please enter an email address");
      return;
    }

    try {
      // 3) Send data to your backend
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          subject,
          address,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // 4) Clear the form (optional)
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setAddress("");
      setMessage("");

      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your message.");
    }
  };

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
          Liza is a skilled photographer specializing in landscape and
          architecture imagery, primarily working with black and white photos to
          capture polished and detailed results. She brings a professional eye
          for detail to every project, ensuring high-quality and visually
          striking outcomes.
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
          luxecreativestudio@gmail.com
          <br />
          Or fill out the form below
        </Typography>
      </Box>

      {/* 5) Wrap form fields in a form, attach onSubmit */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mb-12 gap-6 mt-12"
      >
        {/* First Name and Last Name Fields */}
        <div className="flex justify-center gap-6 w-full max-w-2xl">
          <div className="flex flex-col flex-1">
            <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
              First Name *
            </label>
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
          type="submit"
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
            mb-[20px]
          "
        >
          Send
        </Button>
      </form>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "40px",
          padding: "20px 0",
        }}
      >
        <Typography
          sx={{
            marginBottom: "40px",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "14px",
            fontStyle: "italic",
            fontWeight: 300,
            color: "#666",
          }}
        >
          Website built by Elijah Mendez and Justin Olivacce
        </Typography>
      </Box>
    </>
  );
};

export default About;
