import { Breadcrumbs, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/reuseable/Breadcrumb";
import MembershipCard from "../../../components/reuseable/cards/MembershipCard";
import membershipcar from "../../../assets/images/membershipcar.svg";
import { userPersonalDetails } from "../../../data/data";
import { useSelector } from "react-redux";

const PersonalInfo = () => {
  const nav = useNavigate();
  const {
    user: {
      fullName,
      email,
      phoneNumber,
      shopId: { name: shopName },
    },
  } = useSelector((state) => state.auth);

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
      Personal Info
    </Typography>,
  ];
  return (
    <Stack width={"100%"} overflow={"auto"}>
      <Stack padding={"3em 2em"} spacing={4}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" color={"#344054"}>
          Personal info
        </Typography>
        <Stack spacing={3}>
          <TextField
            disabled
            variant="standard"
            label={
              <Typography variant="h6" color={"#475467"}>
                Full Name
              </Typography>
            }
            defaultValue={fullName}
            sx={{ width: "50%" }}
          />
          <TextField
            disabled
            variant="standard"
            label={
              <Typography variant="h6" color={"#475467"}>
                Email Address
              </Typography>
            }
            defaultValue={email}
            sx={{ width: "50%" }}
          />
          <TextField
            disabled
            variant="standard"
            label={
              <Typography variant="h6" color={"#475467"}>
                Phone Number
              </Typography>
            }
            defaultValue={phoneNumber}
            sx={{ width: "50%" }}
          />
          <TextField
            disabled
            variant="standard"
            label={
              <Typography variant="h6" color={"#475467"}>
                Shop Address
              </Typography>
            }
            defaultValue={shopName}
            sx={{ width: "50%" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PersonalInfo;
