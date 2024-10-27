import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import logoWhite from "../../../assets/images/logoWhite.svg";
import carousal1 from "../../../assets/images/carousal1.svg";
import SliderRectangle from "../../../assets/images/SliderRectangle.svg";
import SliderEllipse from "../../../assets/images/SliderEllipse.svg";
import { useNavigate } from "react-router";
import OTPInput from "../../reuseable/OTPInput";
import { RedSolidButton } from "../../reuseable/button/Buttons";
import AuthCarousel from "../../reuseable/carousel/AuthCarousel";
import { Controller, useForm } from "react-hook-form";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useDispatch } from "react-redux";
import { resetPasswordOTP } from "../../../store/auth/actions";

const ForgotPasswordOTPComponent = () => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/password/recover");
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const number = sessionStorage.getItem("resetPhone");
    const payload = {
      phoneNumber: number,
      code: data.otp,
    };
    dispatch(resetPasswordOTP(payload, nav));
    sessionStorage.removeItem("resetPhone");
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
              Enter 6-digit code we sent
              <br />
              to your Phone Number
            </Typography>
            <Stack color={"#848FAC"} spacing={2}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="otp"
                  control={control}
                  rules={{ validate: (value) => value.length === 6 }}
                  render={({ field, fieldState }) => (
                    <Box>
                      <MuiOtpInput sx={{ gap: 1 }} {...field} length={6} />
                      {fieldState.invalid ? (
                        <FormHelperText error>OTP invalid</FormHelperText>
                      ) : null}
                    </Box>
                  )}
                />
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
                  Reset
                </Button>
              </form>
            </Stack>
          </RightSection>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPasswordOTPComponent;
