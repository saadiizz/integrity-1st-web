import * as React from "react";
import "../../../utils/css/styles.css";
import { MenuItem, Select } from "@mui/material";
import { useController } from "react-hook-form";

const StoreLocation = ({ shops, control, name, rules, errors, label }) => {
  const { field } = useController({
    name,
    rules,
    control,
  });
  return (
    <Select
      {...field}
      sx={{ width: "100%", borderRadius: "54.6591px !important", my: "0.5em" }}
      label={label}
    >
      {shops &&
        shops.map((address, index) => {
          return (
            <MenuItem value={address._id} key={index}>
              {address.address.fullAddress}
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default StoreLocation;
