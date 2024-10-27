import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TelInput from "../../reuseable/TelInput";
import StoreLocation from "./StoreLocation";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getShops, registerUser } from "../../../store/auth/actions";

const RegisterForm = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { shops } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
      conformPassword: "",
      shopId: "",
    },
  });
  const onSubmit = (data) => {
    let phone = data.phone;
    phone = `+1${phone.replace(/[^0-9]/g, "")}`;
    const payload = {
      phoneNumber: phone,
      password: data.password,
      shopId: data.shopId,
    };
    dispatch(registerUser(payload, nav));
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    dispatch(getShops());
  }, []);
  return (
    <>
      <Typography variant="h5" fontWeight={"bold"} lineHeight={"1.3"}>
        Welcome to
        <br />
        Integrity 1st Automotive!
      </Typography>
      <Stack color={"#848FAC"} spacing={2}>
        <Typography className="fullWidthField" alignSelf={"start"}>
          Register your account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StoreLocation
            className="fullWidthField"
            name="shopId"
            shops={shops}
            control={control}
            rules={{ required: true }}
            label="Select Store"
            errors
          />
          {errors.shopId?.type === "required" && (
            <Typography color={"red"}>Store Location is Required</Typography>
          )}
          <TelInput
            name="phone"
            type="tel"
            className="fullWidthField"
            control={control}
            rules={{ required: true }}
          />
          {errors.phone?.type === "required" && (
            <Typography color={"red"}>Phone Number is Required</Typography>
          )}
          <TextField
            name="password"
            className="TextField-without-border-radius fullWidthField"
            type={showPassword ? "text" : "password"}
            label="Create Password"
            {...register("password", { required: true })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors.password?.type === "required" && (
            <Typography color={"red"}>Password is Required</Typography>
          )}

          <TextField
            name="confirmPassword"
            className="TextField-without-border-radius fullWidthField"
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            {...register("conformPassword", { required: true })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors.conformPassword?.type === "required" && (
            <Typography color={"red"}>Password is Required</Typography>
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
            Continue
          </Button>
        </form>
        <Typography alignSelf={"center"}>
          Already have an account?{" "}
          <Link to={"/"} style={{ color: "#F83D4B", textDecoration: "none" }}>
            Login
          </Link>
        </Typography>
      </Stack>
    </>
  );
};

export default RegisterForm;
