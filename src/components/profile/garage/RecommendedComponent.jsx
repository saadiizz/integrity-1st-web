import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { recommended } from "../../../store/garage/actions";
import Breadcrumb from "../../reuseable/Breadcrumb";
import CarFaxCard from "../../reuseable/cards/CarFaxCard";

const RecommendedComponent = ({ text }) => {
  const { id } = useParams();
  const { carsList } = useSelector((state) => state.garage);

  const selectedCar = carsList.filter((item) => item._id === id);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { recommendedData } = useSelector((state) => state.garage);
  useEffect(() => {
    if (selectedCar) dispatch(recommended(selectedCar[0]?._id));
  }, []);
  const breadcrumbs = [
    <Typography
      key="1"
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      onClick={() => nav("/garage")}
    >
      Garage
    </Typography>,
    <Typography variant="body1" key="3" color="text.primary">
      Recently Recommended
    </Typography>,
  ];
  return (
    <Stack padding={"3em 2em"} spacing={4}>
      <Stack spacing={4}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" color={"#344054"}>
          Recently Recommended
        </Typography>
        <Stack>
          <CarFaxCard
            selectedCar={selectedCar}
            serviceType="Recently Recommended"
            serviceData={recommendedData}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RecommendedComponent;
