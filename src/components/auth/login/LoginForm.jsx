import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TelInput from "../../reuseable/TelInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/auth/actions";

const LoginForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
  });
  const nav = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let phone = data.phone;
    phone = `+1${phone.replace(/[^0-9]/g, "")}`;
    const payload = {
      phoneNumber: phone,
      password: data.password,
    };

    
    dispatch(loginUser(payload, nav));
  };
  const handleNav = () => {
    nav("/register");
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography variant="h5" fontWeight={"bold"} lineHeight={"1.3"}>
        Welcome to
        <br />
        Integrity 1st Automotive!
      </Typography>
      <Stack color={"#848FAC"} spacing={2}>
        <Typography alignSelf={"start"}>Sign in your account</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <Stack direction={"row"}>
              <TelInput
                name="phone"
                type="tel"
                label="Phone Number"
                className="fullWidthField"
                control={control}
                rules={{ required: true }}
              />
            </Stack>
            <TextField
              className="TextField-without-border-radius"
              type={showPassword ? "text" : "password"}
              fullWidth
              label="Password"
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
            <Link
              onClick={() => nav("/password")}
              component="button"
              variant="body1"
              display={"flex"}
              alignSelf={"end"}
              underline="none"
              color={"#475467"}
            >
              Forgot Password?
            </Link>
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
              Login
            </Button>
          </Stack>
        </form>

        <Typography alignSelf={"center"}>
          Don’t have any acount?{" "}
          <Link
            component="button"
            variant="body1"
            onClick={() => handleNav()}
            color={"#F83D4B"}
            underline="none"
          >
            Register
          </Link>
        </Typography>
      </Stack>
    </>
  );
};

export default LoginForm;
