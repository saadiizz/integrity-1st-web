import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import AllBogsComponent from "../../../components/profile/blogs/AllBogsComponent";

const AllBlogsScreen = () => {
  const nav = useNavigate();
  const breadcrumbs = [
    <Typography
      key="1"
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      onClick={() => nav("/dashboard")}
    >
      Dashboard
    </Typography>,
    <Typography variant="body1" key="3" color="text.primary">
      All Blogs
    </Typography>,
  ];
  return (
    <Stack width={"100%"} overflow={"auto"}>
      <AllBogsComponent />
    </Stack>
  );
};

export default AllBlogsScreen;
