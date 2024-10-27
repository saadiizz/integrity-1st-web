import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import VehicleCard from "../../reuseable/cards/VehicleCard";
import NewCar from "../../../assets/images/new_car.svg";
import { Button, TextField, Typography } from "@mui/material";
import ReuseableModal from "../../reuseable/ReuseableModal";
import { useSelector } from "react-redux";
import AppointmentCard from "../../reuseable/cards/AppointmentCard";
import { useController } from "react-hook-form";
import { useLocation } from "react-router-dom";

const AppointmentCars = ({ index, setSelectedCar, selectedCar }) => {
  const { carsList } = useSelector((state) => state.garage);

  const [appointmentCars, setAppointmentCars] = useState(carsList);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previewImage, setPreviewImage] = useState("");
  const [inputVal, setInputVal] = useState("");
  const location = useLocation();

  const handleCarSelected = (index) => {
    setSelectedCar(index);
    setNewCarSelected(false);
  };

  const [newCarSelected, setNewCarSelected] = useState(false);
  const handleNewCarSelected = (index) => {
    setNewCarSelected(true);
    setSelectedCar(false);
  };
  useEffect(() => {
    if (location?.state?.selectedCar)
      setSelectedCar(location.state.selectedCar);
  }, []);

  return (
    <AppointmentCard>
      <Typography>{`${index}. Select a Vehicle`}</Typography>
      <Stack
        direction={"row"}
        overflow={"scroll"}
        py={"2px"}
        width={"100%"}
      >
        {appointmentCars &&
          appointmentCars.map((car) => {
            return (
              <VehicleCard
                image={car.imageURL}
                text={car.name}
                index={car._id}
                handler={handleCarSelected}
                selected={car._id === selectedCar ? true : false}
                width="100%"
              />
            );
          })}
        <VehicleCard
          image={NewCar}
          text="New Car"
          handler={handleNewCarSelected}
          selected={newCarSelected}
          width="100%"
        />
      </Stack>
    </AppointmentCard>
  );
};

export default AppointmentCars;
