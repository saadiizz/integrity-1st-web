import { Card } from "@mui/material";
import React from "react";

const AppointmentCard = ({ children }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "#FFFFFF",
        width: "auto",
        minHeight: "18.4375em",
        paddingX: "2.3125em",
        paddingY: "2.625em",
        borderRadius: "10px",
      }}
    >
      {children}
    </Card>
  );
};

export default AppointmentCard;
