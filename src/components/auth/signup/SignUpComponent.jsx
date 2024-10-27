import { Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import logoWhite from "../../../assets/images/logoWhite.svg";
import carousal1 from "../../../assets/images/carousal1.svg";
import SliderRectangle from "../../../assets/images/SliderRectangle.svg";
import SliderEllipse from "../../../assets/images/SliderEllipse.svg";
import "../../../utils/css/styles.css";
import { RedSolidButton } from "../../reuseable/button/Buttons";
import { useNavigate } from "react-router";
import AuthCarousel from "../../reuseable/carousel/AuthCarousel";
import SignupForm from "./SignupForm";

const SignUpComponent = () => {
  // login left section content

  const nav = useNavigate();
  const handleNav = () => {
    nav("/dashboard");
  };

  return (
    <>
      <Grid container spacing={1} height={"100%"}>
        <Grid item xs="6">
          <LeftSection />
        </Grid>
        <Grid item xs="6" display={"flex"} justifyContent={"center"}>
          <RightSection>
            <SignupForm />
          </RightSection>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpComponent;
