import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import GarageCarCard from "../../reuseable/cards/GarageCarCard";
import BMWi8 from "../../../assets/images/BMWi8.svg";
import NotFound from "../../../assets/images/NotFound.svg";

import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../../store/garage/actions";

const GarageComponent = () => {
  const dispatch = useDispatch();
  const { carsList } = useSelector((state) => state.garage);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <Stack padding={"3em 2em"} spacing={4}>
      <Stack spacing={4}>
        <Typography variant="h4" color={"#344054"}>
          Garage
        </Typography>
        <Stack direction={"row"} spacing={"2em"}>
          {carsList.length > 0 ? (
            carsList.map((item, key) => {
              return (
                <GarageCarCard
                  // cardImage={item.imageURL}
                  // cardButtontext="Platinum Member Expires Aug 2022"
                  // isPlatinum={item.isPremium}
                  // cardTitle={`${item.name}(${item.mileage} km)`}
                  key={key}
                  cardData={item}
                />
              );
            })
          ) : (
            <Stack width={"100%"} alignItems={"center"}>
              <img src={NotFound} alt="" />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GarageComponent;
