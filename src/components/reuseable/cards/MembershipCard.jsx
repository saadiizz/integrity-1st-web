import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MembershipCard = ({ title = "", bgImage }) => {
  return (
    <>
      <Paper
        elevation={1}
        sx={{
          maxWidth: 430,
          minWidth: 400,
          marginRight: 2,
          marginTop: 4,
          padding: 1,
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
            <Typography color={"#3D3D3D"} variant={"subtitle2"}>
              Majority have suffered alteration in some form by injected humour
              or randomised words slightly believable
            </Typography>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"end"}
              color={"#3D3D3D"}
            >
              <Typography variant={"caption"}>july 25, 2020</Typography>
              <Typography variant={"caption"}>03:00 PM</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default MembershipCard;
