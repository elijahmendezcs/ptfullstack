import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <>
      {/* Thank You Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "40px",
          padding: "20px",
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
          Thank You for Your Support!
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
          We appreciate your trust and support. Your purchase means a lot to us.
          If you have any questions or need further assistance, please don't
          hesitate to reach out at luxecreativestudiophoto@gmail.com!
        </Typography>
      </Box>

      {/* Actions Section */}
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
            fontSize: "20px",
            fontStyle: "italic",
            fontWeight: 400,
            marginBottom: "20px",
          }}
        >
          
        </Typography>

        {/* Back to Homepage Button */}
        <Link to="/" style={{ textDecoration: "none", width: "100%", maxWidth: "600px" }}>
          <Button
            className="
              w-full
              border
              border-black
              rounded-none
              px-4
              py-2
              text-sm
              font-playfair
              text-white
              bg-black
              mb-4
              mt-10
            "
          >
            Go to Homepage
          </Button>
        </Link>

        {/* Browse More Products Button */}
        <Link to="/prints" style={{ textDecoration: "none", width: "100%", maxWidth: "600px" }}>
          <Button
            className="
              w-full
              border
              border-black
              rounded-none
              px-4
              py-2
              text-sm
              font-playfair
              text-black
              bg-white
              hover:bg-gray-100
            "
          >
            Browse More Products
          </Button>
        </Link>
      </Box>

      {/* Footer Section */}
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
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "14px",
            fontStyle: "italic",
            fontWeight: 300,
            color: "#666",
          }}
        >
          We value your feedback. Feel free to share your thoughts and help us
          improve!
        </Typography>
      </Box>
    </>
  );
};

export default ThankYou;
