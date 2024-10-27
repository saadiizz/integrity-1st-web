import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/reuseable/Breadcrumb";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { changePassword } from "../../../store/auth/actions";

const ChangePassword = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    const { oldPassword, newPassword, confirmPassword } = data;

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords didn't match!");
    }

    const payload = {
      oldPassword,
      newPassword,
    };

    dispatch(changePassword(payload, nav));
  };

  const breadcrumbs = [
    <Typography
      variant="body1"
      key="3"
      color="text.primary"
      to="/account"
      sx={{ cursor: "pointer" }}
      onClick={() => nav("/account")}
    >
      Account
    </Typography>,
    <Typography variant="body1" key="3" color="text.primary">
      Change Password
    </Typography>,
  ];
  return (
    <>
      <Stack width={"100%"} overflow={"auto"}>
        <Stack padding={"3em 2em"} spacing={4}>
          <Breadcrumb breadcrumbs={breadcrumbs} />
          <Typography variant="h5" color={"#344054"}>
            Change Password
          </Typography>

          <Toaster position="top-center" reverseOrder={false} />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <TextField
                  variant="standard"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  label="Current Password"
                  {...register("oldPassword", { required: true })}
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
              </Grid>

              <Grid item xs={8}>
                <TextField
                  className="TextField-without-border-radius"
                  variant="standard"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  label="New Password"
                  {...register("newPassword", { required: true })}
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
              </Grid>

              <Grid item xs={8}>
                <TextField
                  className="TextField-without-border-radius"
                  variant="standard"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  label="Confirm Password"
                  {...register("confirmPassword", { required: true })}
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
              </Grid>

              <Grid item xs={6}></Grid>

              <Grid item xs={6}>
                <Button
                  variant="text"
                  type="submit"
                  style={{
                    textTransform: "none",
                    fontFamily: "Inter",
                    color: "#FF1543",
                    marginRight: "35%",
                  }}
                >
                  Update Password
                </Button>
              </Grid>
            </Grid>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default ChangePassword;
