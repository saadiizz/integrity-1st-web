import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signupUser } from "../../../store/auth/actions";

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      deviceType: "web",
    },
  });
  const nav = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    var payload = {
      fullName: data.fullName,
      email: data.email,
      deviceType: "web",
    };
    if (data.referralCode !== "") payload["referralCode"] = data.referralCode;
    dispatch(signupUser(payload, nav));
  };
  return (
    <>
      <Typography variant="h5" fontWeight={"bold"} lineHeight={"1.3"}>
        Welcome to
        <br />
        Integrity 1st Automotive!
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack color={"#848FAC"} spacing={2}>
          <Typography alignSelf={"start"}>Sign in your account</Typography>
          <TextField
            className="TextField-without-border-radius"
            type={"text"}
            label="Full Name"
            {...register("fullName", { required: true })}
          />
          {errors.name?.type === "required" && (
            <Typography color={"red"}>Full Name is Required</Typography>
          )}
          <TextField
            className="TextField-without-border-radius"
            type={"email"}
            label="Email Address"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <Typography color={"red"}>Email is Required</Typography>
          )}
          <TextField
            className="TextField-without-border-radius"
            type={"text"}
            label="Referral code if Any"
            {...register("referralCode", { required: false })}
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
            Complete Setup
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default SignupForm;
