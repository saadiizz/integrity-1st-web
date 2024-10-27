import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";

import AccountCard from "../../reuseable/cards/AccountCard";
import Account from "../../../assets/images/account.svg";
import PersonalInfoLogo from "../../../assets/images/personal-info.logo.svg";
import MembershipLogo from "../../../assets/images/membership.logo.svg";
import SecurityLogo from "../../../assets/images/security.logo.svg";
import PrivacyLogo from "../../../assets/images/privacy.logo.svg";

const AccountComponent = () => {
  const nav = useNavigate();

  const { keys } = useSelector((state) => state.dashboard);

  const contactUsURL = keys
    .filter((k) => k.key === "ContactUs")
    .map((k) => k.value);

  return (
    <>
      <Stack padding={"3em 2em"} spacing={4}>
        <Stack spacing={4}>
          <Typography variant="h4" color={"#344054"}>
            Account
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(contactUsURL, "_blank");
              }}
            >
              <AccountCard
                image={Account}
                text="Executive Team unique background in chemical stop appleformulat book. "
                title="Contact Us"
                handler={() => {}}
              />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                nav("/account/appointment-history");
              }}
            >
              <AccountCard
                image={MembershipLogo}
                text="Executive Team unique background in chemical stop appleformulat book. "
                title="Appointment History"
                handler={() => {}}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                nav("/account/membership");
              }}
            >
              <AccountCard
                image={MembershipLogo}
                text="Executive Team unique background in chemical stop appleformulat book. "
                title="Platinum Membership(s)"
                handler={() => {}}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                nav("/account/change-password");
              }}
            >
              <AccountCard
                image={SecurityLogo}
                text="Executive Team unique background in chemical stop appleformulat book. "
                title="Change Password"
                handler={() => {}}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                nav("/account/personal-info");
              }}
            >
              <AccountCard
                image={PersonalInfoLogo}
                text="Executive Team unique background in chemical stop appleformulat book. "
                title="Personal Info"
                handler={() => {}}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  "https://www.integrity1auto.com/privacy-policy",
                  "_blank"
                );
              }}
            >
              <AccountCard
                image={PrivacyLogo}
                text="Executive Team unique background in chemical stop appleformulat book. "
                title="Privacy"
                handler={() => {}}
              />
            </div>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default AccountComponent;
