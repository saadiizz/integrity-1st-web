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
import Alert from "../../../assets/images/alert.svg";
import NotFound from "../../../assets/images/NotFound.svg";

const RecentlyRecomendedCard = ({
  serviceData,
  bgcolor,
  isDue,
  serviceType,
}) => {
  const dateString = serviceData.tekmetricRaw.authorizedDate.split("T")[0];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <Grid item xs={4}>
      <ListItem>
        <ListItemIcon
          sx={{
            minWidth: "fit-content",
            mr: "6px",
          }}
        >
          <img src={Alert} alt="" />
        </ListItemIcon>
        <ListItemText primary={serviceData.title} />
      </ListItem>
    </Grid>
  );
};

export default RecentlyRecomendedCard;
