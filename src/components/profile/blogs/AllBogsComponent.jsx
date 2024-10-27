import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../reuseable/cards/BlogCard";
import NotFound from "../../../assets/images/NotFound.svg";

const AllBogsComponent = () => {
  const { blogs } = useSelector((state) => state.dashboard);

  return (
    <Stack padding={"3em 2em"} spacing={4}>
      <Typography variant="h4" color={"#344054"}>
        All Blogs
      </Typography>
      <Grid container xs={12}>
        {blogs && blogs.blogs.length > 0 ? (
          blogs?.blogs.slice(0, 3).map((item, key) => {
            return (
              <Grid item xs={12} sm={4} lg={4}>
                <BlogCard key={key} item={item} />
              </Grid>
            );
          })
        ) : (
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent="center"
            alignItems="center"
          >
            <img src={NotFound} alt="" />
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};

export default AllBogsComponent;
