import React from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import Breadcrumb from "../../reuseable/Breadcrumb";
import { useNavigate } from "react-router";
import NotFound from "../../../assets/images/NotFound.svg";
import DefaultImage from "../../../assets/images/DefaultImage.svg";

const Root = styled("div")({
  flexGrow: 1,
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: "red",
}));

function GridSystem() {
  const { offers } = useSelector((state) => state.dashboard);
  const myArray = [];
  if (offers.total > 0) {
    let i = 0;
    while (true) {
      if (i % 5 < 3) {
        myArray.push({
          _id: offers.offers[i]?._id,
          title: offers.offers[i]?.title,
          ctaKind: offers.offers[i]?.ctaKind,
          imageURL: offers.offers[i]?.imageURL,
          description: offers.offers[i]?.description,
          width: 4,
        });
      } else {
        myArray.push({
          _id: offers.offers[i]?._id,
          title: offers.offers[i]?.title,
          ctaKind: offers.offers[i]?.ctaKind,
          imageURL: offers.offers[i]?.imageURL,
          description: offers.offers[i]?.description,
          width: 6,
        });
      }
      i++;

      if (myArray.length === offers.total) {
        break;
      }
    }
  }

  const nav = useNavigate();
  const handleNav = (ctaKind, ctaValue) => {
    if (ctaKind === "APPOINTMENT") nav("/appointment");
    else if (ctaKind === "URL") window.open(ctaValue, "_blank");
  };
  const breadcrumbs = [
    <Typography
      key="1"
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      onClick={() => nav("/dashboard")}
    >
      Dashboard
    </Typography>,
    <Typography variant="body1" key="3" color="text.primary">
      All Offers
    </Typography>,
  ];
  return (
    <Stack padding={"3em 2em"} spacing={4}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Typography variant="h4" color={"#344054"}>
        All Offers
      </Typography>
      <Grid container xs={12} spacing={2} rowSpacing={1} columnSpacing={1}>
        {myArray.length > 0 ? (
          myArray.map((item) => (
            <Grid
              key={item._id}
              item
              xs={item.width}
              onClick={() => handleNav(item.ctaKind, item.ctaValue)}
            >
              <Stack
                sx={{
                  backgroundImage: `url(${item.imageURL}), url(${DefaultImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "16.125em",
                  borderRadius: "10px",
                  boxShadow: "rgb(0 0 0 / 35%) 0px 108px 100px 5px inset",
                  padding: "1em",
                  color: "white",
                }}
              >
                <Typography variant="body1" fontWeight={"bold"}>
                  {item.title}
                </Typography>
                <Typography variant="caption">{item.description}</Typography>
              </Stack>
            </Grid>
          ))
        ) : (
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent="center"
            alignItems="center"
          >
            <img src={NotFound} alt="" />
          </Grid>
        )}
      </Grid>
    </Stack>
  );
}

export default GridSystem;
