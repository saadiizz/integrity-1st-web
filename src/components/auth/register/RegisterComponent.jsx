import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import { useNavigate } from "react-router";
import { RedLinearButton } from "../../reuseable/button/Buttons";
import ReuseableModal from "../../reuseable/ReuseableModal";
import sadEmoji from "../../../assets/images/sad-emoji.svg";
import RegisterForm from "./RegisterForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../../../store/auth/actions";

const RegisterComponent = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNav = () => {
    dispatch(clearData(null));
    nav("/");
  };
  const handleClearData = () => {
    handleClose();
    dispatch(clearData(null));
  };

  const nav = useNavigate();

  useEffect(() => {
    if (errorMessage !== null) {
      handleOpen();
    }
  }, [errorMessage]);

  return (
    <>
      <Grid container spacing={1} height={"100%"}>
        <Grid item xs="6">
          <LeftSection />
        </Grid>
        <Grid item xs="6" display={"flex"} justifyContent={"center"}>
          <RightSection>
            <RegisterForm />
          </RightSection>
        </Grid>
      </Grid>
      {errorMessage && (
        <ReuseableModal handleClose={handleClose} open={open}>
          <img alt="" src={sadEmoji} width={100} />
          <Typography color={"#D23852"} fontWeight={"600"}>
            Already Exist!
          </Typography>
          <Typography textAlign={"center"} color="#667085">
            Sorry! provided phone number is already registered with Integrity
            1st Automotive. Change phone number of Login to your account.
          </Typography>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <RedLinearButton
              handler={handleClearData}
              width={"49%"}
              text="Change Phone"
            />
            <RedLinearButton handler={handleNav} width={"49%"} text="Login" />
          </Stack>
        </ReuseableModal>
      )}
    </>
  );
};

export default RegisterComponent;
