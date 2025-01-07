import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

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
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{
      maxWidth: 345,
      borderRadius: 0, // Square corners
      border: '0.5px solid lightgray' // Minimal light gray border
    }}>
      <CardMedia
        component="img"
        height="194"
        image="/src/images/BlackandWhiteImages/blackandwhite7.jpg"
        alt="default card"
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "text.primary",
            marginBottom: 2,
            fontWeight: 500,
            fontStyle: "italic",
            paddingLeft: 1,
            fontSize: 22,
          }}
        >
          Black and White 7
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: 16, paddingLeft: 1 }}
        >
          2 hr 30 min
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginTop: 1, fontSize: 16, paddingLeft: 1 }}
        >
          $150
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            borderRadius: 0,
            fontFamily: "'Cormorant Garamond', serif",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "black",
            },
            marginBottom: 2,
            fontSize: 16,
            marginLeft: 2, 
          }}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
