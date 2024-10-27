import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Delete from "../../../assets/images/delete.svg";
import ServiceDueCard from "./ServiceDueCard";
import { Stack } from "@mui/system";
import ReuseableModal from "../ReuseableModal";
import {
  deleteVehicle,
  getCars,
  serviceDue,
} from "../../../store/garage/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  mileage: yup
    .number()
    .typeError("Enter Correct Mileage")
    .positive("MIleage should be greater than 0")
    .required(),
});
const ServiceCard = ({ serviceData, selectedCar, serviceType }) => {
  const nav = useNavigate();
  const groupedData = serviceData.reduce((result, current) => {
    const group = result[current.due_mileage] || [];
    group.push(current);
    result[current.due_mileage] = group;
    return result;
  }, {});
  const [mileageValue, setMileageValue] = useState(0);
  const [mileageModal, setMileageModal] = useState(false);
  const dispatch = useDispatch();
  const [deleteCar, setDeleteCar] = useState(false);
  const handleOpenDelete = () => setDeleteCar(true);
  const handleCloseDelete = () => {
    setDeleteCar(false);
    const payload = {
      reason: reason,
      otherReason: otherReason,
    };
    dispatch(deleteVehicle(payload, selectedCar[0]?._id));
  };
  const [reason, setReason] = useState("SOLD");
  const [otherReason, setOtherReason] = useState("");
  const handleReason = (e) => {
    setReason(e.target.value);
  };
  const handleMilageOpen = () => setMileageModal(true);
  const handleMilageClose = () => {
    setMileageModal(false);
  };

  useEffect(() => {
    if (mileageValue) {
      const payload = {
        vehicleId: selectedCar[0]?._id,
      };
      if (mileageValue) {
        payload["mileage"] = mileageValue;
      }
      dispatch(serviceDue(payload));
      dispatch(getCars());
    }
  }, [mileageValue]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setMileageValue(data.mileage);
    reset();
    handleMilageClose();
  };

  return (
    <>
      <Card
        sx={{
          bgcolor: "#FCFCFD",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingX: "1.375em",
          overflow: "auto",
        }}
      >
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              onClick={() => handleOpenDelete()}
            >
              <img src={Delete} alt="" />
            </IconButton>
          }
          sx={{ width: "100%" }}
        />
        <img
          src={selectedCar[0]?.imageURL}
          alt=""
          style={{
            objectFit: "cover",
            width: "20.98875em",
            height: "9.0881em",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant={"h5"} fontWeight={500}>
            {`${selectedCar[0]?.tekmetricRaw.year} ${selectedCar[0]?.tekmetricRaw.make} ${selectedCar[0]?.tekmetricRaw.model} `}
          </Typography>
          <Typography
            variant={"h6"}
            color={"text.secondary"}
            fontWeight={500}
            paddingBottom={"0.15em"}
          >
            {`${selectedCar[0]?.mileage} Miles`}
          </Typography>
          <Typography
            variant={"caption"}
            marginTop={-1}
            color={"text.secondary"}
          >
            {serviceType}
          </Typography>
          <Stack
            direction={"row"}
            spacing={"1em"}
            justifyContent="center"
            width={"100%"}
          >
            <Button
              sx={{
                minWidth: "15em",
                background:
                  "linear-gradient(80.67deg, #C42E66 27.97%, #D23852 96.9%)",
                color: "white",
                fontSize: "small",
                p: 2,
                borderRadius: "54.6591px",
              }}
              onClick={() =>
                nav("/appointment", {
                  state: {
                    selectedCar: selectedCar[0]._id,
                    pageName: "SERVICE_DUE",
                  },
                })
              }
            >
              Book Appointment Now
            </Button>
            <Button
              sx={{
                minWidth: "15em",
                background:
                  "linear-gradient(80.67deg, #C42E66 27.97%, #D23852 96.9%)",
                color: "white",
                fontSize: "small",
                p: 2,
                borderRadius: "54.6591px",
              }}
              onClick={() => handleMilageOpen()}
            >
              Update Milage
            </Button>
          </Stack>
          <Grid
            container
            bgcolor={"#F2F4F7"}
            mt="1.5em !important"
            rowSpacing={1}
            paddingY={"1rem"}
          >
            <ServiceDueCard
              serviceData={serviceData}
              selectedCar={selectedCar}
            />
          </Grid>
        </CardContent>
      </Card>
      <ReuseableModal
        handleClose={handleMilageClose}
        open={mileageModal}
        width={"40%"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack alignItems={"center"} spacing={3} width={"100%"}>
            <img
              src={selectedCar[0]?.imageURL}
              alt=""
              style={{
                objectFit: "cover",
                width: "20.98875em",
                height: "10.088125em",
              }}
            />
            <Typography variant="h5">
              Update Milage for{" "}
              {`${selectedCar[0]?.tekmetricRaw.year} ${selectedCar[0]?.tekmetricRaw.make} ${selectedCar[0]?.tekmetricRaw.model} `}
            </Typography>
            <TextField
              id="outlined-basic"
              label=" Enter the current milage in KMs"
              variant="outlined"
              fullWidth
              {...register("mileage")}
              // value={mileageValue}
              // onChange={(e) => setMileageValue(e.target.value)}
            />
            {errors.mileage && <span>{errors.mileage.message}</span>}
            <Stack width={"100%"} direction={"row"} spacing={2}>
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
                Update
              </Button>
              <Button
                onClick={() => {
                  handleMilageClose();
                }}
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "54.6591px",
                  bgcolor: "#667085",
                  fontSize: "small",
                  p: 2,
                  width: "100%",
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </ReuseableModal>
      {/* Delete Car Modal */}
      <ReuseableModal
        handleClose={() => setDeleteCar(false)}
        open={deleteCar}
        width={"30%"}
      >
        <img src={selectedCar[0].imageURL} alt="" width={150} />
        <Typography fontWeight={"bold"}>
          Do you want to delete your vehicle?
        </Typography>
        <Stack spacing={1} width={"100%"}>
          <Select
            labelId="delete-reason"
            id="delete-reason"
            value={reason}
            onChange={(e) => handleReason(e)}
            sx={{ width: "100%", color: "black" }}
          >
            <MenuItem value={"SOLD"}>SOLD VEHICLE</MenuItem>
            <MenuItem value={"NOT IN SERVICE"}>VEHICLE NOT IN SERVICE</MenuItem>
            <MenuItem value={"Other"}>Other(Please Specify)</MenuItem>
          </Select>
          {reason === "Other" ? (
            <TextField
              id="outlined-multiline-static"
              label="Reason to delete vehicle?"
              multiline
              value={otherReason}
              onChange={(e) => setOtherReason(e.target.value)}
              rows={4}
              fullWidth
            />
          ) : (
            ""
          )}
        </Stack>
        <Stack direction={"row"} width={"100%"} spacing={2}>
          <Button
            onClick={() => handleCloseDelete()}
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
            Yes, Delete
          </Button>
          <Button
            onClick={() => setDeleteCar(false)}
            variant={"contained"}
            sx={{
              borderRadius: "54.6591px",
              background: "#667085",
              fontSize: "small",
              p: 2,
              width: "inherit",
            }}
          >
            No, Cancel
          </Button>
        </Stack>
      </ReuseableModal>
    </>
  );
};

export default ServiceCard;
