import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import { Stack } from "@mui/system";
import sadEmoji from "../../../assets/images/sad-emoji.svg";
import ReuseableModal from "../../reuseable/ReuseableModal";
import { useNavigate } from "react-router";
import { RedLinearButton } from "../../reuseable/button/Buttons";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { clearData } from "../../../store/auth/actions";

const LoginComponent = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const nav = useNavigate();
  const handleNav = () => {
    dispatch(clearData(null));
    nav("/register");
  };
  const handleClearData = () => {
    handleClose();
    dispatch(clearData(null));
  };

  useEffect(() => {
    if (errorMessage !== null) {
      handleOpen();
    }
  }, [errorMessage]);

  return (
    <>
      <Grid container spacing={1} height={"100%"}>
        <Grid
          item
          xs="6"
          display={"flex"}
          justifyContent={"center"}
          width={"100% !important"}
          
        >
          <LeftSection />
        </Grid>
        <Grid item xs="6" display={"flex"} justifyContent={"center"}>
          <RightSection>
            <LoginForm />
          </RightSection>
        </Grid>
      </Grid>
      {errorMessage && (
        <ReuseableModal handleClose={handleClose} open={open}>
          <img alt="" src={sadEmoji} width={100} />
          <Typography color={"#D23852"} fontWeight={"600"}>
            Credentials Not Found
          </Typography>
          <Typography textAlign={"center"} color="#667085">
            Sorry! we can't find an account with this phone number in that
            location. 'Please double-check your' location selection and phone
            number and try again!
          </Typography>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            {/* <RedLinearButton
              handler={handleClearData}
              width={"49%"}
              text="Try Again"
            /> */}
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                borderRadius: "54.6591px",
                background:
                  "linear-gradient(80.67deg, #C42E66 27.97%, #D23852 96.9%)",
                fontSize: "small",
                p: 2,
                width: "49%",
              }}
              onClick={() => handleClearData()}
            >
              Try Again
            </Button>
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                borderRadius: "54.6591px",
                background:
                  "linear-gradient(80.67deg, #C42E66 27.97%, #D23852 96.9%)",
                fontSize: "small",
                p: 2,
                width: "49%",
              }}
              onClick={() => handleNav()}
            >
              Continue
            </Button>
          </Stack>
        </ReuseableModal>
      )}
    </>
  );
};

export default LoginComponent;
