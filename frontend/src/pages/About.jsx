import React from "react";
import TextField from "@mui/material/TextField";


const About = () => {
  return (
    <div className="flex justify-center items-center mb-24 gap-10 mt-24">
      <TextField
        variant="outlined"
        placeholder="Enter Your First Name"
        sx={{
          width: "250px",
          "& .MuiOutlinedInput-root": {
            height: "50px",
            fontSize: "16px",
            borderRadius: "0px", // Removed rounded corners
            "& fieldset": {
              borderColor: "#555",
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: "#333",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#111",
              borderWidth: "1px",
            },
            "&.Mui-focused": {
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            },
            "& input": {
              fontFamily: "'Playfair Display', serif",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            fontFamily: "'Playfair Display', serif",
            color: "#555",
            fontSize: "14px",
          },
        }}
      />

      <TextField
        variant="outlined"
        placeholder="Enter your last name"
        sx={{
          width: "250px",
          "& .MuiOutlinedInput-root": {
            height: "50px",
            fontSize: "16px",
            borderRadius: "0px", // Removed rounded corners
            "& fieldset": {
              borderColor: "#555",
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: "#333",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#111",
              borderWidth: "1px",
            },
            "&.Mui-focused": {
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            },
            "& input": {
              fontFamily: "'Playfair Display', serif",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            fontFamily: "'Playfair Display', serif",
            color: "#555",
            fontSize: "14px",
          },
        }}
      />

    </div>
  );
};

export default About;
