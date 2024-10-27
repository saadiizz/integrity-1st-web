import React from "react";
import { useSelector } from "react-redux";
import { Grid, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/reuseable/Breadcrumb";
import PlatinumMembershipCard from "../../../components/reuseable/cards/Platinum-MembershipCard";
import noContentFound from "../../../assets/images/no-content-found.svg";

const Membership = () => {
  const nav = useNavigate();
  const { carsList } = useSelector((state) => state.garage);

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
      Platinum Membership(s)
    </Typography>,
  ];
  return (
    <>
      <Stack width={"100%"} overflow={"auto"}>
        <Stack padding={"3em 2em"} spacing={4}>
          <Breadcrumb breadcrumbs={breadcrumbs} />
          <Typography variant="h5" color={"#344054"}>
            Platinum Membership(s)
          </Typography>
          {carsList.length ? (
            <Stack direction={"row"} flexWrap={"wrap"}>
              {carsList.map((car) =>
                car.isPremium === true ? (
                  <PlatinumMembershipCard
                    bgImage={car.imageURL}
                    title={car.name}
                    membershipTillDate={car.premiumEndAt}
                    caption={car.tekmetricRaw.model}
                  />
                ) : null
              )}
              {/* <MembershipCard bgImage={membershipcar} /> */}
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

export default Membership;
