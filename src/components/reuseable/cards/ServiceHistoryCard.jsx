import {
  Card,
  CardHeader,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ServiceTask from "../../../assets/images/service-task.svg";
import Alert from "../../../assets/images/alert.svg";
import NotFound from "../../../assets/images/NotFound.svg";

const ServiceHistoryCard = ({ serviceData, bgcolor, serviceType }) => {
  const dateString = serviceData.tekmetricRaw.createdDate.split("T")[0];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <Grid container xs={12}>
      {serviceData ? (
        serviceData.jobs.map((item) => {
          return (
            <Grid item xs={4}>
              <ListItem>
                <ListItemIcon
                  sx={{
                    minWidth: "fit-content",
                    mr: "6px",
                  }}
                >
                  {/* {isDue ? (
                        <img src={Alert} alt="" />
                      ) : ( */}
                  <img src={ServiceTask} alt="" />
                  {/* )} */}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
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
          className="test"
        >
          <img src={NotFound} alt="" />
        </Grid>
      )}
    </Grid>
  );
};

export default ServiceHistoryCard;
