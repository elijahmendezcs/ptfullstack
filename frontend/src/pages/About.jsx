import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box, Typography } from "@mui/material";

const About = () => {
  // State for each form field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  // Error state for each field
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    subject: false,
    address: false,
    message: false,
  });

  // Handle form submission with simple validation
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Validate all required fields
    let valid = true;
    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      subject: false,
      address: false,
      message: false,
    };

    if (!firstName.trim()) {
      newErrors.firstName = true;
      valid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = true;
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = true;
      valid = false;
    }
    if (!subject.trim()) {
      newErrors.subject = true;
      valid = false;
    }
    if (!address.trim()) {
      newErrors.address = true;
      valid = false;
    }
    if (!message.trim()) {
      newErrors.message = true;
      valid = false;
    }

    setErrors(newErrors);

    // If any field is empty, stop submission
    if (!valid) return;

    try {
      // Send data to your backend
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

      // Clear the form and error states on success
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setAddress("");
      setMessage("");
      setErrors({
        firstName: false,
        lastName: false,
        email: false,
        subject: false,
        address: false,
        message: false,
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your message.");
    }
  };

  // A helper function to update field values and clear errors if necessary
  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field] && e.target.value.trim() !== "") {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    }
  };

  // Tailwind classes for the input fields with error highlighting
  const inputClass = (hasError) =>
    `border ${hasError ? "border-red-500" : "border-black"} 
     rounded-none px-2 py-1 text-sm font-playfair 
     placeholder:font-playfair ${hasError ? "placeholder:text-red-500" : "placeholder:text-black-700"} 
     placeholder:italic`;

  // A generic error message component
  const ErrorMessage = () => (
    <p className="text-red-500 text-xs mt-1 font-playfair">
      Please fill in this field to submit
    </p>
  );

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
          px: { xs: 2, sm: 0 }, // Add horizontal padding on small screens
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
          Liza is a skilled photographer based in Sanduksy County, Ohio, specializing in
          landscape and architecture imagery, primarily working with black and white photos to
          capture polished and detailed results. She brings a professional eye for detail to every
          project, ensuring high-quality and visually striking outcomes.
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
          px: { xs: 2, sm: 0 }, // Add horizontal padding on small screens
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

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mb-12 gap-6 mt-12 px-4"
      >
        {/* First Name and Last Name Fields */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-2xl">
          <div className="flex flex-col flex-1">
            <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
              First Name *
            </label>
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={handleInputChange(setFirstName, "firstName")}
              className={inputClass(errors.firstName)}
            />
            {errors.firstName && <ErrorMessage />}
          </div>

          <div className="flex flex-col flex-1">
            <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
              Last Name *
            </label>
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={handleInputChange(setLastName, "lastName")}
              className={inputClass(errors.lastName)}
            />
            {errors.lastName && <ErrorMessage />}
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
            onChange={handleInputChange(setEmail, "email")}
            className={inputClass(errors.email)}
          />
          {errors.email && <ErrorMessage />}
        </div>

        {/* Subject Field */}
        <div className="flex flex-col w-full max-w-2xl">
          <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
            Subject *
          </label>
          <Input
            placeholder="Enter Your Subject"
            value={subject}
            onChange={handleInputChange(setSubject, "subject")}
            className={inputClass(errors.subject)}
          />
          {errors.subject && <ErrorMessage />}
        </div>

        {/* Address Field */}
        <div className="flex flex-col w-full max-w-2xl">
          <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
            Address *
          </label>
          <Input
            placeholder="Enter Your Address"
            value={address}
            onChange={handleInputChange(setAddress, "address")}
            className={inputClass(errors.address)}
          />
          {errors.address && <ErrorMessage />}
        </div>

        {/* Message Field */}
        <div className="flex flex-col w-full max-w-2xl">
          <label className="mb-1 text-sm font-medium text-black-700 font-playfair">
            Message *
          </label>
          <textarea
            placeholder="Enter Your Message"
            value={message}
            onChange={handleInputChange(setMessage, "message")}
            className={`${inputClass(errors.message)} h-32`}
          ></textarea>
          {errors.message && <ErrorMessage />}
        </div>

        {/* Send Button */}
        <Button
          type="submit"
          className="w-full max-w-2xl border border-black rounded-none px-2 py-2 text-sm font-playfair text-white bg-black mb-[20px]"
        >
          Send
        </Button>
      </form>

      {/* Footer */}
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
