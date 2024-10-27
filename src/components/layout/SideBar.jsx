import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { sideBarLIst, timeSheet } from "../../data/data";
import ReuseableModal from "../reuseable/ReuseableModal";
import "../../utils/css/styles.css";
import { useLocation, useNavigate } from "react-router";
import storage from "redux-persist/lib/storage";
import { useSelector } from "react-redux";
import googlemaps from "../../assets/images/google-maps.svg";

const SideBar = () => {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useSelector((state) => state.auth);

  const location = useLocation();
  const handlePath = (path) => {
    if (path === "/") {
      storage.removeItem("persist:root");
      sessionStorage.clear();
    }
    nav(path);
  };
  const newTimeSheet = timeSheet.map((item, index) => {
    return {
      day: item.day,
      startTime: user?.shopId?.openingHours[index]?.from,
      endTime: user?.shopId?.openingHours[index]?.till,
    };
  });
  const date = new Date(); // replace this with your desired date
  const options = { weekday: "long" };
  const currentHour = date.getHours();
  const dayName = date.toLocaleDateString("en-US", options);

  return (
    <>
      <Stack width={"30%"} sx={{ backgroundColor: "#ffffff" }}>
        <Drawer
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              position: "inherit",
              borderRight: "0px",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Avatar sx={{ bgcolor: "#F83D4B" }}>
              {user?.fullName.charAt(0)}
            </Avatar>
            <Typography
              fontWeight={"600"}
              color={"#475467"}
              textAlign={"center"}
            >
              {currentHour >= 1 && currentHour <= 3
                ? `Good Night ${user?.fullName}!`
                : currentHour >= 4 && currentHour <= 11
                ? `Good Morning ${user?.fullName}!`
                : currentHour >= 12 && currentHour <= 16
                ? `Good Afternoon ${user?.fullName}!`
                : currentHour >= 17 && currentHour <= 24
                ? `Good Evening ${user?.fullName}!`
                : ``}
            </Typography>
            <Typography
              textAlign={"center"}
              onClick={() =>
                window.open(user?.shopId?.googleMapsLink, "_blank")
              }
              sx={{ cursor: "pointer" }}
            >
              {`${user?.shopId?.address?.fullAddress}`}
              <img src={googlemaps} alt="" width={"7%"} />
            </Typography>
            <Link
              color={"secondary"}
              component={Button}
              onClick={() => handleOpen()}
            >
              View opening hours
            </Link>
          </Stack>
          <Divider />
          <List>
            {sideBarLIst.map(({ icon, text, path }, index) => (
              <ListItem key={text} sx={{ paddingY: "8px", paddingX: "8px" }}>
                <ListItemButton
                  sx={{ marginInlineStart: 1, marginInlineEnd: 1 }}
                  onClick={() => handlePath(path)}
                  className={
                    text === "Logout"
                      ? "logoutStyles"
                      : path === location.pathname
                      ? "sidebarStyle"
                      : ""
                  }
                >
                  <ListItemIcon
                    sx={{
                      color:
                        text === "Logout"
                          ? "white"
                          : path === location.pathname
                          ? "#f83d4b"
                          : "inherit",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <ReuseableModal handleClose={handleClose} open={open} width={"40%"}>
          <Typography variant="h4" fontWeight={"600"}>
            Opening Hours
          </Typography>
          <MenuList sx={{ width: "100%" }}>
            {newTimeSheet.map(({ day, startTime, endTime }, key) => {
              return (
                <>
                  <MenuItem
                    key={key}
                    sx={{ width: "100%" }}
                    className={dayName === day ? "selectedTime" : ""}
                  >
                    <ListItemText sx={{ flex: "2 1 auto" }}>{day}</ListItemText>
                    {startTime === "" || endTime === "" ? (
                      <ListItemText
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flex: "1 1 auto",
                        }}
                      >
                        Close
                      </ListItemText>
                    ) : (
                      <ListItemText
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          flex: "1 1 auto",
                        }}
                      >{`${startTime} - ${endTime}`}</ListItemText>
                    )}
                  </MenuItem>
                  <Divider />
                </>
              );
            })}
          </MenuList>
        </ReuseableModal>
      </Stack>
    </>
  );
};

export default SideBar;
