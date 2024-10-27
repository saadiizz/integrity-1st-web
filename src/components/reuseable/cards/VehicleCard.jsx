import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../../utils/css/styles.css";

const VehicleCard = ({ image, text, selected, handler, index, width }) => {
  return (
    <Card
      sx={{
        bgcolor: "transparent",
        marginRight: 2,
        overflow: "unset",
        height: "11.4375em",
        width: "15.4375em",
      }}
      className={selected ? "selectedCar" : ""}
      onClick={() => {
        handler(index);
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          objectFit: "cover",
          width: width || "13.40375em",
          height: "6.8125em",
        }}
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant={"caption"}
          color={selected ? "inherit" : "#667085"}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
