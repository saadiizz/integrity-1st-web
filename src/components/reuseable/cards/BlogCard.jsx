import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { RedSolidButton } from "../../reuseable/button/Buttons";
import DefaultImage from "../../../assets/images/DefaultImage.svg";
import { useNavigate } from "react-router";
import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "red", // your hover styles here
  },
}));
const BlogCard = ({ header, content, cardImage, key, item }) => {
  const nav = useNavigate();
  const handleNav = (ctaKind, ctaValue) => {
    if (ctaKind === "APPOINTMENT") nav("/appointment");
    else if (ctaKind === "URL") window.open(ctaValue, "_blank");
  };
  return (
    <Card
      key={key}
      elevation={0}
      sx={{
        minWidth: 100,
        background: "inherit",
        marginRight: "0.3em",
      }}
    >
      <CardMedia
        sx={{
          backgroundImage: `url(${item.imageURL}), url(${DefaultImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "10em",
          borderRadius: "10px",
        }}
        component="div"
      />
      <CardContent sx={{ padding: "4px 0" }}>
        <Typography
          gutterBottom
          variant="body1"
          fontWeight={"600"}
          component="div"
        >
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${item.description.slice(0, 200)}...`}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "4px 0" }}>
        <CustomButton
          sx={{
            width: "fit-content",
            borderRadius: "54.6591px",
            bgcolor: "#F83D4B",
            color: "white",
            fontSize: "small",
            p: 2,
          }}
          onClick={() => handleNav(item.ctaKind, item.ctaValue)}
        >
          Read More
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
