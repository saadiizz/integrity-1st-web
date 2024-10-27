import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import logoWhite from "../../../assets/images/logoWhite.svg";
import carousal1 from "../../../assets/images/carousal1.svg";
import SliderRectangle from "../../../assets/images/SliderRectangle.svg";
import SliderEllipse from "../../../assets/images/SliderEllipse.svg";
import TelInput from "../../reuseable/TelInput";
import { useNavigate } from "react-router";
import { RedSolidButton } from "../../reuseable/button/Buttons";
import AuthCarousel from "../../reuseable/carousel/AuthCarousel";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../store/auth/actions";

const ForgotPassword = () => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/password/otp");
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let phone = data.phone;
    phone = `+1${phone.replace(/[^0-9]/g, "")}`;
    const payload = {
      phoneNumber: phone,
    };
    dispatch(resetPassword(payload, nav));
  };
  return (
    <>
      <Grid container spacing={1} height={"100%"}>
        <Grid item xs="6">
          <LeftSection />
        </Grid>
        <Grid item xs="6" display={"flex"} justifyContent={"center"}>
          <RightSection>
            <Typography variant="h5" fontWeight={"bold"} lineHeight={"1.3"}>
              Enter your Phone Number to
              <br />
              Recover your Password
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack color={"#848FAC"} spacing={2}>
                <TelInput
                  name="phone"
                  type="tel"
                  className="fullWidthField"
                  control={control}
                  rules={{ required: true }}
                />
                {errors.phone?.type === "required" && (
                  <Typography color={"red"}>
                    Phone Number is Required
                  </Typography>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  sx={{
                    borderRadius: "54.6591px",
                    bgcolor: "#F83D4B",
                    fontSize: "small",
                    p: 2,
                    width: "100%",
                  }}
                >
                  Send OTP
                </Button>
              </Stack>
            </form>
          </RightSection>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
