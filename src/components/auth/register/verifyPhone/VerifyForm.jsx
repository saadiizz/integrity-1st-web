import { Box, Button, FormHelperText, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getToken } from "firebase/messaging";
import { MuiOtpInput } from "mui-one-time-password-input";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { messaging } from "../../../../Firebase";
import { verifyPhone } from "../../../../store/auth/actions";

const VerifyForm = () => {
  const phoneNumber = sessionStorage.getItem("phoneNumber");
  const [token, setToken] = useState();
  const nav = useNavigate();
  const handleNav = () => {
    nav("/signup");
  };
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });
  const onSubmit = (data) => {
    const payload = {
      phoneNumber: phoneNumber,
      code: data.otp,
      tokenData: {
        fcmToken: token,
        osName: "WEB",
      },
      deviceType: "web",
    };
    dispatch(verifyPhone(payload, nav));
  };
  useEffect(() => {
    const generateToken = async () => {
      setToken(
        await getToken(messaging, {
          vapidKey:
            "BPIe4y7X7YGHebIVwb3742KD5RDLqlJJ_N4tlWs6lbeKGkHs1nYgpWDXG4C5OgfYRve7iuAoSuiAiiheir1xNO4",
        })
      );
    };
    generateToken();
  }, []);

  return (
    <>
      <Typography variant="h5" fontWeight={"bold"} lineHeight={"1.3"}>
        Enter 6-digit code we sent
        <br />
        to your Phone Number
      </Typography>
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
          Continue
        </Button>
        {/* handler={handleNav} */}
      </form>
      <Stack direction={"row"} justifyContent={"space-between"} paddingTop={4}>
        <Typography alignSelf={"center"}>
          Didn't get OTP?{" "}
          <Link href="/#" color={"#F83D4B"} underline="none">
            Send Again
          </Link>
        </Typography>
        <Typography>Change Phone Number?</Typography>
      </Stack>
    </>
  );
};

export default VerifyForm;
