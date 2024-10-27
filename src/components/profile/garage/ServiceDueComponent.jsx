import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCars, serviceDue } from "../../../store/garage/actions";
import Breadcrumb from "../../reuseable/Breadcrumb";
import CarFaxCard from "../../reuseable/cards/CarFaxCard";
import ServiceCard from "../../reuseable/cards/ServiceCard";

const ServiceDueComponent = ({ text }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { servicesDueData } = useSelector((state) => state.garage);
  const { id } = useParams();
  const { carsList } = useSelector((state) => state.garage);
  const selectedCar = carsList.filter((item) => item._id === id);

  useEffect(() => {
    if (selectedCar[0]?._id) {
      const payload = {
        vehicleId: selectedCar[0]?._id,
      };
      if (selectedCar[0]?.mileage) {
        payload["mileage"] = selectedCar[0]?.mileage;
      }
      dispatch(serviceDue(payload));
      dispatch(getCars());
    }
  }, []);
  const breadcrumbs = [
    <Typography
      key="1"
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      onClick={() => nav("/garage")}
    >
      Garage
    </Typography>,
    <Typography variant="body1" key="3" color="inherit">
      Service Due
    </Typography>,
  ];
  return (
    <Stack padding={"3em 2em"} spacing={4}>
      <Stack spacing={4}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" fontWeight={"600"} color={"#344054"}>
          Service Due
        </Typography>
        <Stack>
          <ServiceCard
            selectedCar={selectedCar}
            serviceType="Service Due"
            serviceData={servicesDueData}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServiceDueComponent;
