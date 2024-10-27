import { Grid, Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import BlogCard1 from "../../../assets/images/BlogCard1.svg";
import BlogCard from "../../reuseable/cards/BlogCard";
import RewardCard from "../../reuseable/cards/RewardCard";
import RefferCard from "../../reuseable/cards/RefferCard";
import CarouselCard from "../../reuseable/carousel/CarouselCard";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getOffers } from "../../../store/dashboard/actions";
import { getAppontment } from "../../../store/appointments/actions";

const DashboardComponent = () => {
  const { blogs } = useSelector((state) => state.dashboard);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
    dispatch(getBlogs());
    dispatch(getAppontment());
  }, []);

  return (
    <Stack padding={"3em 2em"} spacing={4}>
      <Stack spacing={4}>
        <Typography variant="h4" color={"#344054"}>
          Dashboard
        </Typography>
        <CarouselCard />
        <Link
          onClick={() => nav("/dashboard/all-offers")}
          underline="hover"
          alignSelf={"end"}
          sx={{ color: "#F83D4B" }}
        >
          See all Offers
        </Link>
        <Stack
          direction={{ lg: "row", md: "column" }}
          justifyContent={"space-between"}
        >
          <RewardCard />
          <RefferCard />
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"baseline"}
        >
          <Typography variant="h4" color={"#344054"}>
            Car care tips
          </Typography>
          <Typography
            component={Link}
            color={"#F83D4B"}
            sx={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => nav("/dashboard/all-blogs")}
          >
            View All Blogs
          </Typography>
        </Stack>
        <Grid container xs={12}>
          {blogs &&
            blogs?.blogs.slice(0, 3).map((item, key) => {
              return (
                <Grid item xs={12} sm={4} lg={4}>
                  <BlogCard
                    key={key}
                    header={item.title}
                    content={item.description}
                    cardImage={item.imageURL}
                    item={item}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default DashboardComponent;
