import {
  Card,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ServiceTask from "../../../assets/images/service-task.svg";
import Alert from "../../../assets/images/alert.svg";

const RecommendedCard = ({ serviceData, bgcolor, isDue }) => {
  return (
    <Stack position={"relative"}>
      <Card
        sx={{ minWidth: 275, bgcolor: bgcolor || "#F2F4F7", marginRight: 2 }}
      >
        <CardHeader
          title={`Milage (${serviceData.due_mileage})`}
          titleTypographyProps={{ variant: "body1" }}
        />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: bgcolor || "#F2F4F7",
            position: "relative",
            overflow: "auto",
            // maxHeight: 300,
            "& ul": { padding: 0 },
            "& li": { padding: "2px 12px" },
          }}
        >
          {serviceData.parts &&
            serviceData.parts.map((task) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    {/* {isDue ? (
                      <img src={Alert} alt="" />
                    ) : ( */}
                    <img src={ServiceTask} alt="" />
                    {/* )} */}
                  </ListItemIcon>
                  <ListItemText primary={task.desc} />
                </ListItem>
              );
            })}
        </List>
        {isDue && (
          <Chip
            label="Services Due"
            sx={{
              bgcolor: "#F63D68",
              position: "absolute",
              top: "-5%",
              right: "1%",
              zIndex: "1000",
              border: "2px solid white",
            }}
          />
        )}
      </Card>
    </Stack>
  );
};

export default RecommendedCard;
