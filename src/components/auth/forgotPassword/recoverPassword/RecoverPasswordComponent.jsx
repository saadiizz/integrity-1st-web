import {
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LeftSection from "../../LeftSection";
import RightSection from "../../RightSection";
import carousal1 from "../../../../assets/images/carousal1.svg";
import SliderRectangle from "../../../../assets/images/SliderRectangle.svg";
import SliderEllipse from "../../../../assets/images/SliderEllipse.svg";
import logoWhite from "../../../../assets/images/logoWhite.svg";
import { useNavigate } from "react-router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { RedSolidButton } from "../../../reuseable/button/Buttons";
import AuthCarousel from "../../../reuseable/carousel/AuthCarousel";

const RecoverPasswordComponent = () => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/");
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
              Create your New
              <br />
              Password
            </Typography>
            <Stack color={"#848FAC"} spacing={2}>
              <Typography>Sign in your account</Typography>
              <TextField
                className="TextField-without-border-radius"
                type={showPassword ? "text" : "password"}
                label="Create Password"
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
              <TextField
                className="TextField-without-border-radius"
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
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
              <RedSolidButton handler={handleNav} text="Complete Setup" />
            </Stack>
          </RightSection>
        </Grid>
      </Grid>
    </>
  );
};

export default RecoverPasswordComponent;
