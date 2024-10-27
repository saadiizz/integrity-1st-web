import { Stack } from "@mui/system";
import React from "react";
import "../../utils/css/styles.css";

const RightSection = ({ children }) => {
  return (
    <Stack justifyContent={"center"} height={"97%"} width={"70%"} spacing={3}>
      {children}
    </Stack>
  );
};

export default RightSection;
