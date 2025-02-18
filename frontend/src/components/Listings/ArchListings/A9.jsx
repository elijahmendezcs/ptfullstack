// BW7.jsx
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// 1) Import the image directly from src/images:
import arch1 from "../../../images/Architecture/arch9.jpg";

// 2) Styled component for the expand icon (if needed).
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: { transform: "rotate(0deg)" },
    },
    {
      props: ({ expand }) => !!expand,
      style: { transform: "rotate(180deg)" },
    },
  ],
}));

// 3) Main component
export default function BW7() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 0, // Square corners
        border: "0.5px solid lightgray", // Minimal light gray border
      }}
    >
      <CardMedia
        component="img"
        // 4) Use the imported variable for the image prop
        image={arch1}
        alt="Black and White Print"
        // You can still set width/height
        sx={{ width: 400, height: 300 }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "text.primary",
            marginBottom: 2,
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: 22,
          }}
        >
          Rosary Cathedral
        </Typography>
        <Typography
          align="center"
          variant="body2"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "text.secondary",
            marginTop: -2,
            fontSize: 16,
            marginBottom: -2,
          }}
        >
          Starting at: $25
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Link to="archpage9">
        <Button
          variant="contained"
          sx={{
            width: 300,
            backgroundColor: "black",
            borderRadius: 0,
            fontFamily: "'Cormorant Garamond', serif",
            textTransform: "none",
            "&:hover": {                                       
              backgroundColor: "black",
            },
            marginBottom: 2,
            fontSize: 16,
            marginLeft: .5, 
          }}
        >
          Buy Now
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
