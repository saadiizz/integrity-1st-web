import { Stack } from "@mui/material";
import React from "react";
import AllAppointmentsComponent from "../../../components/profile/appointment/AllAppointmentsComponent";

const AllAppointmentsScreen = () => {
  return (
    <>
      <Stack width={"100%"} overflow={"auto"}>
        <AllAppointmentsComponent />
      </Stack>
    </>
  );
};

export default AllAppointmentsScreen;
