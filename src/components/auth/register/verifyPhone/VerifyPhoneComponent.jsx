import { Grid } from "@mui/material";
import React from "react";
import LeftSection from "../../LeftSection";
import RightSection from "../../RightSection";
import VerifyForm from "./VerifyForm";

const VerifyPhone = () => {
  return (
    <>
      <Grid container spacing={1} height={"100%"}>
        <Grid item xs="6">
          <LeftSection />
        </Grid>
        <Grid item xs="6" display={"flex"} justifyContent={"center"}>
          <RightSection>
            <VerifyForm />
          </RightSection>
        </Grid>
      </Grid>
    </>
  );
};

export default VerifyPhone;
