import {
  Card,
  CardHeader,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ServiceTask from "../../../assets/images/service-task.svg";
import Alert from "../../../assets/images/alert.svg";
import NotFound from "../../../assets/images/NotFound.svg";

const ServiceDueCard = ({ serviceData, bgcolor, isDue, selectedCar }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          textAlign={"center"}
          variant={"h5"}
          fontWeight={"600"}
        >{`Due at ${selectedCar[0].mileage} miles`}</Typography>
      </Grid>
      {serviceData ? (
        <Grid container xs={12}>
          {Object.keys(serviceData).map(function (key, index) {
            const data = { ...serviceData[key] };
            return (
              <Grid item xs={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      minWidth: "fit-content",
                      mr: "6px",
                    }}
                  >
                    <img src={ServiceTask} alt="" />
                  </ListItemIcon>
                  <ListItemText primary={data.desc} />
                </ListItem>
              </Grid>
            );
          })}
        </Grid>
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
    </>
  );
};

export default ServiceDueCard;
