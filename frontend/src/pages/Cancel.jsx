import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Button } from "@/components/ui/button";

const CancelTransaction = () => {
  return (
    <>
      {/* Cancel Transaction Section */}
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
          Transaction Canceled
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
          Your transaction has been canceled. If you have any questions or need
          further assistance, please feel free to reach out to us.
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

        {/* Contact Support Button */}
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
            Browse Products
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
            marginBottom: "40px",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "14px",
            fontStyle: "italic",
            fontWeight: 300,
            color: "#666",
          }}
        >
          All purchases are secure and appreciated. Thank you for your support.
        </Typography>
      </Box>
    </>
  );
};

export default CancelTransaction;
