import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";

import Breadcrumb from "../../../components/reuseable/Breadcrumb";
import AppointmentHistoryCard from "../../../components/reuseable/cards/Appointment-HistoryCard";
import noContentFound from "../../../assets/images/no-content-found.svg";
import NewCar from "../../../assets/images/new_car.svg";

const AppointmentHistory = () => {
  const getAppointmentDate = (timestamp) => {
    timestamp = timestamp.split("T");

    return timestamp[0];
  };

  const getAppointmentTime = (timestamp) => {
    timestamp = timestamp.split("T");
    const timeWithMs = timestamp[1];
    let time = timeWithMs.split(".");
    time = time[0];

    return time;
  };

  const nav = useNavigate();

  const { appointments: appointmentsArray } = useSelector(
    (state) => state.appointments.appointments
  );

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
      Appointment History
    </Typography>,
  ];
  return (
    <>
      <Stack width={"100%"} overflow={"auto"}>
        <Stack padding={"3em 2em"} spacing={4}>
          <Breadcrumb breadcrumbs={breadcrumbs} />
          <Typography variant="h5" color={"#344054"}>
            Appointment History
          </Typography>
          {appointmentsArray.length ? (
            <Stack direction={"row"} flexWrap={"wrap"}>
              {appointmentsArray.map((appointment) => (
                <AppointmentHistoryCard
                  title={appointment?.vehicle?.name || "New Vehicle"}
                  appointmentReason={appointment.appointmentReason.title}
                  appointmentDate={getAppointmentDate(
                    appointment.appointmentAt
                  )}
                  appointmentTime={getAppointmentTime(
                    appointment.appointmentAt
                  )}
                  bgImage={appointment?.vehicle?.imageURL || NewCar}
                />
              ))}
            </Stack>
          ) : (
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent="center"
              alignItems="center"
            >
              <img src={noContentFound} alt="" />
            </Grid>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default AppointmentHistory;
