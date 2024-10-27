import { Stack } from "@mui/material";
import React from "react";
import logoWhite from "../../assets/images/logoWhite.svg";
import AuthCarousel from "../reuseable/carousel/AuthCarousel";

const LeftSection = () => {
  return (
    <Stack
      paddingLeft={3}
      paddingTop={3}
      height={"100%"}
      justifyContent={"space-between"}
      bgcolor={"#FAFAFA"}
      width={"100%"}
    >
      <img alt="" src={logoWhite} style={{ width: "15vw", height: "5vh" }} />
      <Stack
        paddingX={"10%"}
        justifyContent={"space-around"}
        height={"90vh"}
      >
        <AuthCarousel />
      </Stack>
    </Stack>
  );
};

export default LeftSection;
