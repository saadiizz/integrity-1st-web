import React from "react";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import CalendarArrowIcon from "../../../assets/images/calendar-arrow.icon.svg";

import moment from "moment";

const PlatinumMembershipCard = ({
  bgImage = "",
  title = "",
  membershipTillDate = "",
  caption = "",
}) => {
  return (
    <>
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
                style={{ marginRight: 8, color: "#FF1543" }}
                src={CalendarArrowIcon}
                alt=""
                width={15}
              />

              <Typography
                style={{ marginRight: 10 }}
                color={"#FF1543"}
                variant={"subtitle2"}
              >
                {moment(membershipTillDate).format("ll")}
              </Typography>
            </div>

            <Stack
              direction={"row"}
              spacing={5}
              justifyContent={"start"}
              color={"#3D3D3D"}
            >
              <Typography style={{ color: "#FF1543" }} variant={"caption"}>
                <img
                  style={{ marginRight: 8, color: "#FF1543" }}
                  src={CalendarArrowIcon}
                  alt=""
                  width={15}
                />
                {caption}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default PlatinumMembershipCard;
