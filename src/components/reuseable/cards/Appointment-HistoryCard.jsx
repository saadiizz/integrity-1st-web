import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import CalendarIcon from "../../../assets/images/calendar.icon.svg";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import CornerRibbon from "react-corner-ribbon";
import moment from "moment";

const AppointmentHistoryCard = ({
  title = "",
  appointmentReason = "",
  appointmentDate = "",
  appointmentTime = "",
  bgImage = "",
}) => {
  return (
    <>
      {moment(appointmentDate).isSameOrAfter() ? (
        <Paper
          elevation={1}
          sx={{
            maxWidth: 430,
            minWidth: 400,
            marginRight: 2,
            marginTop: 2,
            padding: 1,
            borderRadius: "10px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          <div style={{ position: "relative" }}>
            <CornerRibbon
              position="top-right" // OPTIONAL, default as "top-right"
              fontColor="#FFFFFF" // OPTIONAL, default as "#f0f0f0"
              backgroundColor="#FF1543" // OPTIONAL, default as "#2c7"
              containerStyle={{}} // OPTIONAL, style of the ribbon
              style={{ fontFamily: "Helvetica", fontSize: 10 }} // OPTIONAL, style of ribbon content
              className="" // OPTIONAL, css class of ribbon
            >
              Upcoming
            </CornerRibbon>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack
                sx={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "50px",
                  width: "30%",
                }}
              />
              <Stack width={"65%"}>
                <Typography variant="h5" fontWeight={"600"}>
                  {title}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ marginRight: 8 }}
                    src={CalendarIcon}
                    alt=""
                    width={15}
                  />

                  <Typography
                    style={{ marginRight: 10 }}
                    color={"#FF1543"}
                    variant={"subtitle2"}
                  >
                    {moment(appointmentDate).format("ll")}
                  </Typography>

                  <AlarmOutlinedIcon
                    style={{ marginRight: 5, width: 18, color: "#FF1543" }}
                  />

                  <Typography color={"#FF1543"} variant={"subtitle2"}>
                    {appointmentTime}
                  </Typography>
                </div>
                <Stack
                  direction={"row"}
                  spacing={5}
                  justifyContent={"start"}
                  color={"#3D3D3D"}
                >
                  <Typography variant={"caption"}>
                    {appointmentReason}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Paper>
      ) : (
        <Paper
          elevation={1}
          sx={{
            maxWidth: 430,
            minWidth: 400,
            marginRight: 2,
            marginTop: 2,
            padding: 1,
            borderRadius: "10px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack
              sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                width: "30%",
              }}
            />
            <Stack width={"65%"}>
              <Typography variant="h5" fontWeight={"600"}>
                {title}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ marginRight: 8 }}
                  src={CalendarIcon}
                  alt=""
                  width={15}
                />

                <Typography
                  style={{ marginRight: 10 }}
                  color={"#FF1543"}
                  variant={"subtitle2"}
                >
                  {moment(appointmentDate).format("ll")}
                </Typography>

                <AlarmOutlinedIcon
                  style={{ marginRight: 5, width: 18, color: "#FF1543" }}
                />

                <Typography color={"#FF1543"} variant={"subtitle2"}>
                  {appointmentTime}
                </Typography>
              </div>
              <Stack
                direction={"row"}
                spacing={5}
                justifyContent={"start"}
                color={"#3D3D3D"}
              >
                <Typography variant={"caption"}>{appointmentReason}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      )}
    </>
  );
};

export default AppointmentHistoryCard;
