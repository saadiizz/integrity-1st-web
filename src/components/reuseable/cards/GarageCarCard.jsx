import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  createTheme,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  Badge,
  Select,
  MenuItem,
} from "@mui/material";
import { Stack, ThemeProvider } from "@mui/system";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import TaxiAlertIcon from "@mui/icons-material/TaxiAlert";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import React, { useEffect, useState } from "react";
import {
  NonPlatinumButton,
  PlatinumButton,
  RedLinearButton,
} from "../button/Buttons";
import ReuseableModal from "../ReuseableModal";
import { serviceTasks } from "../../../data/data";
import GetPlatinum from "../../../assets/images/getplatinum.svg";
import Price from "../../../assets/images/Price.svg";
import ServiceTask from "../../../assets/images/service-task.svg";
import Delete from "../../../assets/images/delete.svg";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteVehicle, getCars, serviceDue } from "../../../store/garage/actions";
import "../../../utils/css/styles.css";

const GarageCarCard = ({ cardData, key }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [deleteCar, setDeleteCar] = useState(false);

  const handleOpenDelete = () => setDeleteCar(true);
  const handleCloseDelete = () => {
    setDeleteCar(false);
    const payload = {
      reason: reason,
      otherReason: otherReason,
    };
    dispatch(deleteVehicle(payload, cardData._id));
  };

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      anger: createColor("#D23852"),
    },
  });

  //Get Non-Platinum Content
  const [openPlat, setOpenPlat] = useState({
    nonPlat: false,
    plat: false,
    booked: false,
  });
  const handleOpenNonPlat = () =>
    setOpenPlat((prevState) => ({
      ...prevState,
      nonPlat: true,
    }));
  const handleCloseNonPlat = () => {
    setOpenPlat((prevState) => ({
      ...prevState,
      nonPlat: false,
      booked: false,
    }));
  };

  //Get Platinum Content
  const handleOpenPlat = () =>
    setOpenPlat((prevState) => ({
      ...prevState,
      plat: true,
    }));
  const handleClosePlat = () =>
    setOpenPlat((prevState) => ({
      ...prevState,
      plat: false,
    }));

  const [reason, setReason] = useState("SOLD");
  const [otherReason, setOtherReason] = useState("");
  const handleReason = (e) => {
    setReason(e.target.value);
  };
  const [mileageValue, setMileageValue] = useState(cardData.mileage);
  const [mileageModal, setMileageModal] = useState(false);
  const handleMilageOpen = () => setMileageModal(true);
  const handleMilageClose = () => setMileageModal(false);
  const handleServiceDue = () => {
    if (cardData.mileage === 0) {
      handleMilageOpen();
    } else {
      nav(`/garage/service-due/${cardData?._id}`);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMileageValue(event.target[0].value);
    event.target.reset();
    handleMilageClose();
  };
  useEffect(() => {
    const payload = {
      vehicleId: cardData?._id,
    };
    if (mileageValue) {
      payload["mileage"] = mileageValue;
    }
    dispatch(serviceDue(payload));
    dispatch(getCars());
  }, [mileageValue]);

  const handleRoute = () => {
    handleClosePlat();
    handleCloseNonPlat();
    nav("/appointment", {
      state: {
        selectedCar: cardData._id,
        pageName: "PLATINUM_TAB",
      },
    });
  };

  // date convertion formula
  const dateString = cardData.isPremium && cardData.premiumEndAt.split("T")[0];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const year = date.getFullYear();
  const formattedDate = `${month} ${year}`;
  const formattedDayDate = `${month} ${day}, ${year}`;

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          minWidth: "17em",
          width: "17em",
          minHeight: "21em",
          height: "21em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
        key={key}
      >
        <CardHeader
          title={`${cardData.tekmetricRaw.year} ${cardData.tekmetricRaw.make} ${cardData.tekmetricRaw.model}`}
          titleTypographyProps={{ variant: "caption", textAlign: "center" }}
        />
        <IconButton
          aria-label="settings"
          sx={{ position: "absolute", top: 2, right: 2 }}
          onClick={() => handleOpenDelete()}
        >
          <img src={Delete} alt="" width={"80%"} />
        </IconButton>
        <CardMedia
          component="img"
          height="145"
          marginTop="12px"
          image={cardData.imageURL}
          alt="Paella dish"
        />
        <Divider sx={{ width: "80%", marginTop: "12px" }} />
        <CardActions
          disableSpacing
          sx={{
            width: "100%",
            justifyContent: "space-around",
            marginTop: "12px",
            paddingX: "1em",
            paddingY: 0,
          }}
        >
          <Stack alignItems={"center"}>
            <Badge badgeContent={0}>
              <Button
                variant="outlined"
                color="anger"
                onClick={() => nav(`/garage/service-history/${cardData?._id}`)}
                sx={{
                  width: "2.6875em",
                  height: "2.75em",
                  minWidth: "fit-content",
                  padding: "8px 10px",
                }}
                aria-label="delete"
              >
                <ManageHistoryIcon />
              </Button>
            </Badge>
            <Typography variant="caption" textAlign={"center"}>
              Service History
            </Typography>
          </Stack>
          <Stack alignItems={"center"}>
            <Badge badgeContent={0}>
              <Button
                variant="outlined"
                color="anger"
                onClick={() => nav(`/garage/recommended/${cardData?._id}`)}
                sx={{
                  width: "2.6875em",
                  height: "2.75em",
                  minWidth: "fit-content",
                  padding: "8px 10px",
                }}
                aria-label="delete"
              >
                <ThumbUpAltOutlinedIcon />
              </Button>
            </Badge>
            <Typography variant="caption" textAlign={"center"}>
              Recently Recommended
            </Typography>
          </Stack>

          <Stack alignItems={"center"}>
            <Badge badgeContent={cardData.servicesDueCount}>
              <Button
                variant="outlined"
                color="anger"
                onClick={() => handleServiceDue()}
                sx={{
                  width: "2.6875em !important",
                  height: "2.75em !important",
                  minWidth: "fit-content",
                  padding: "8px 10px",
                }}
                aria-label="delete"
              >
                <TaxiAlertIcon />
              </Button>
            </Badge>
            <Typography variant="caption" textAlign={"center"}>
              Services Due
            </Typography>
          </Stack>
        </CardActions>
        {cardData.isPremium ? (
          <PlatinumButton
            text={`Platinum Member Expires ${formattedDate}`}
            handler={handleOpenPlat}
          />
        ) : (
          <NonPlatinumButton
            text="Add Platinum Member"
            handler={handleOpenNonPlat}
          />
        )}

        {/* Set Milage Modal */}
        <ReuseableModal
          handleClose={handleMilageClose}
          open={mileageModal}
          width={"40%"}
        >
          <form onSubmit={handleSubmit}>
            <Stack alignItems={"center"} spacing={3} width={"100%"}>
              <img src={cardData.imageURL} alt="" width={"100%"} />
              <Typography variant="h5">
                Update Milage for {cardData.name}{" "}
              </Typography>
              <TextField
                id="outlined-basic"
                label=" Enter the current milage in KMs"
                variant="outlined"
                fullWidth
                // value={mileageValue}
                // onChange={(e) => setMileageValue(e.target.value)}
              />
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
      </Card>
      {/* Delete Car Modal */}
      <ReuseableModal
        handleClose={() => setDeleteCar(false)}
        open={deleteCar}
        width={"30%"}
      >
        <img src={cardData.imageURL} alt="" width={150} />
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
      {/* //Platinum Member Modal */}
      <ReuseableModal handleClose={handleClosePlat} open={openPlat.plat}>
        <img
          src={GetPlatinum}
          alt=""
          style={{
            objectFit: "cover",
            width: "7.114375rem",
            height: "7.114375rem",
          }}
        />
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Platinum Member
        </Typography>
        <Typography
          variant="caption"
          marginTop={"-1.3em"}
          color={"#F83D4B"}
          textAlign="center"
          maxWidth={400}
        >
          {`Your Membership is ending on ${formattedDayDate}`}
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            position: "relative",
            overflow: "auto",
            // maxHeight: 300,
            "& ul": { padding: 0 },
            "& li": { padding: 0 },
          }}
        >
          {serviceTasks.map((task) => {
            return (
              <ListItem>
                <ListItemIcon>
                  <img src={ServiceTask} alt="" />
                </ListItemIcon>
                <ListItemText primary={task} />
              </ListItem>
            );
          })}
        </List>
        <RedLinearButton
          text="Book Appointment"
          width={"100%"}
          variant="outlined"
          handleClose={handleRoute}
        />
        <Typography variant="caption" textAlign={"center"} maxWidth={360}>
          ARK Commercial Services’ buy Executive Team unique background in
          chemical stop appleformulations.
        </Typography>
      </ReuseableModal>
      {/* //NON Platinum Member Modal */}
      <ReuseableModal handleClose={handleCloseNonPlat} open={openPlat.nonPlat}>
        <img src={GetPlatinum} alt="" width={100} />
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Why become a Platinum Member
        </Typography>
        <Typography
          variant="caption"
          marginTop={"-1.3em"}
          color={"inherit"}
          textAlign="center"
          maxWidth={400}
        >
          Best for medium agency
        </Typography>
        <img src={Price} alt="" />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            position: "relative",
            overflow: "auto",
            // maxHeight: 300,
            "& ul": { padding: 0 },
            "& li": { padding: 0 },
          }}
        >
          {serviceTasks.map((task) => {
            return (
              <ListItem>
                <ListItemIcon>
                  <img src={ServiceTask} alt="" />
                </ListItemIcon>
                <ListItemText primary={task} />
              </ListItem>
            );
          })}
        </List>
        <Button
          sx={{
            background:
              "linear-gradient(80.67deg, #c42e66 27.97%, #d23852 96.9%)",
            color: "white",
            borderRadius: "54.6591px",
            p: 2,
          }}
          fullWidth
          onClick={handleRoute}
        >
          Book Appointment
        </Button>
        <Typography variant="caption" textAlign={"center"} maxWidth={360}>
          ARK Commercial Services’ buy Executive Team unique background in
          chemical stop appleformulations.
        </Typography>
      </ReuseableModal>
    </ThemeProvider>
  );
};

export default GarageCarCard;
