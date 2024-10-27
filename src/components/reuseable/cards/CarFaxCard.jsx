import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Delete from "../../../assets/images/delete.svg";
import ServiceDueCard from "./ServiceDueCard";
import RecentlyRecomendedCard from "./RecentlyRecomendedCard";
import ServiceHistoryCard from "./ServiceHistoryCard";
import { useNavigate } from "react-router";
import NotFound from "../../../assets/images/NotFound.svg";
import { useDispatch } from "react-redux";
import { deleteVehicle } from "../../../store/garage/actions";
import ReuseableModal from "../ReuseableModal";

const CarFaxCard = ({ serviceData, selectedCar, serviceType }) => {
  const nav = useNavigate();
  const handleRoute = () => {
    if (serviceType === "Service History") {
      nav(`/garage/service-due/${selectedCar[0]._id}`);
    } else if (serviceType === "Recently Recommended") {
      nav("/appointment", {
        state: {
          selectedCar: selectedCar[0]._id,
          pageName: "RECENTLY_RECOMMENDED",
        },
      });
    }
  };
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
            height: "10.088125em",
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
            variant={"caption"}
            marginTop={-1}
            color={"text.secondary"}
          >
            {serviceType}
          </Typography>
          <Button
            sx={{
              display: serviceType === "Service Due" ? "none" : "inherit",
              minWidth: "15em",
              background:
                "linear-gradient(80.67deg, #C42E66 27.97%, #D23852 96.9%)",
              color: "white",
              fontSize: "small",
              p: 2,
              borderRadius: "54.6591px",
            }}
            onClick={() => handleRoute()}
          >
            {serviceType === "Recently Recommended"
              ? "Book Appointment Now"
              : serviceType === "Service History"
              ? "View Service Due"
              : ""}
          </Button>
          <Grid
            container
            bgcolor={"#F2F4F7"}
            mt="1.5em !important"
            rowSpacing={1}
            paddingY={"1rem"}
          >
            {serviceData && serviceData.length !== 0 ? (
              serviceData.map((item) => {
                return (
                  <Grid item xs={12} paddingLeft={"1.5625em"}>
                    {serviceType === "Recently Recommended" ? (
                      <RecentlyRecomendedCard
                        serviceData={item}
                        serviceType={serviceType}
                      />
                    ) : serviceType === "Service History" ? (
                      <ServiceHistoryCard
                        serviceData={item}
                        serviceType={serviceType}
                      />
                    ) : (
                      <ServiceDueCard
                        serviceData={item}
                        serviceType={serviceType}
                      />
                    )}
                  </Grid>
                );
              })
            ) : (
              <Grid
                item
                xs={12}
                textAlign={"center"}
                justifyContent="center"
                alignItems="center"
              >
                <img src={NotFound} alt="" />
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
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

export default CarFaxCard;
