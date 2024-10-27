import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppointmentCard from "../../reuseable/cards/AppointmentCard";
import AppointmentServices from "./AppointmentServices";
import DateTimePicker from "./DateTimePicker";
import { RedLinearButton } from "../../reuseable/button/Buttons";
import AppointmentCars from "./AppointmentCars";
import { useForm } from "react-hook-form";
import { timeSlots } from "../../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { appontment, getAppontment } from "../../../store/appointments/actions";
import { useLocation, useNavigate } from "react-router";

var index = 0;
const AppointmentComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [timeValue, setTimeValue] = useState(timeSlots[0]);
  const location = useLocation();
  const [outerTimeStamps, setOuterTimeStamps] = useState({
    isEarlyBird: false,
    isAfterHours: false,
  });

  const [serviceType, setServiceType] = useState();
  const [description, setDescription] = useState("");

  const [selectedCar, setSelectedCar] = useState();

  const dispatch = useDispatch();
  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}:00`;
  };
  const { appointments } = useSelector((state) => state.appointments);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      appointmentAt: "",
      description: "",
      isEarlyBird: false,
      isAfterHours: false,
      vehicle: "",
      appointmentReason: "",
      pageName: "APPOINTMENT_TAB",
    },
  });
  const onSubmit = (data) => {
    const time = convertTime12to24(timeValue);

    let convTime = new Date(startDate).toISOString().split("T")[0];
    convTime = `${convTime}T${time}`;

    let payload = {};
    if (selectedCar) {
      payload = {
        appointmentAt: convTime && convTime,
        description: description,
        isEarlyBird: outerTimeStamps.isEarlyBird,
        isAfterHours: outerTimeStamps.isAfterHours,
        appointmentReason: serviceType,
        pageName: location?.state?.pageName
          ? location.state.pageName
          : "APPOINTMENT_TAB",
        vehicle: selectedCar,
      };
    } else {
      payload = {
        appointmentAt: convTime && convTime,
        description: description,
        isEarlyBird: outerTimeStamps.isEarlyBird,
        isAfterHours: outerTimeStamps.isAfterHours,
        appointmentReason: serviceType,
        pageName: location?.state?.pageName
          ? location.state.pageName
          : "APPOINTMENT_TAB",
      };
    }
    dispatch(appontment(payload, nav));
  };
  // useEffect(() => {
  //   dispatch(getAppontment());
  // }, [appointments]);

  const nav = useNavigate();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        padding={"3em 2em"}
        spacing={4}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack spacing={4} width={"100%"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h4" color={"#344054"}>
              Book Appoinment
            </Typography>
            <Link
              onClick={() => nav("/appointment/all-appointments")}
              underline="hover"
              alignSelf={"center"}
              sx={{ color: "#F83D4B" }}
            >
              All Appointments
            </Link>
          </Stack>
          <AppointmentCars
            index={index + 1}
            setSelectedCar={setSelectedCar}
            selectedCar={selectedCar}
          />
          <DateTimePicker
            startDate={startDate}
            setStartDate={setStartDate}
            timeValue={timeValue}
            setTimeValue={setTimeValue}
            outerTimeStamps={outerTimeStamps}
            setOuterTimeStamps={setOuterTimeStamps}
            index={index + 2}
          />
          <AppointmentServices
            serviceType={serviceType}
            setServiceType={setServiceType}
          />
        </Stack>
        <TextField
          id="outlined-multiline-static"
          label="Anything else we should know? (optional)"
          multiline
          rows={4}
          sx={{ bgcolor: "#ffffff" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
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
          Complete Booking
        </Button>
      </Stack>
    </form>
  );
};

export default AppointmentComponent;
