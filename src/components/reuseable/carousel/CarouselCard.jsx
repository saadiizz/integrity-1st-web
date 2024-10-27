import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import dashcard from "../../../assets/images/dashcard.svg";
import BMW from "../../../assets/images/BMWi8.svg";
import DefaultImage from "../../../assets/images/DefaultImage.svg";
import "../../../utils/css/styles.css";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const CarouselCard = () => {
  const [index, setIndex] = useState(0);
  const { offers } = useSelector((state) => state.dashboard);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const nav = useNavigate();
  const handleNav = (ctaKind) => {
    if (ctaKind === "APPOINTMENT") nav("/appointment");
    else nav(ctaKind);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      {offers &&
        offers?.offers.slice(0, 3).map((item, key) => {
          return (
            <Carousel.Item key={key} style={{ height: "100% !important" }}>
              {/* <img
                className="d-block w-100"
                src={item.imageURL}
                alt="First slide"
                width={60}
              /> */}
              <Stack
                direction="horizontal"
                className="position-absolute top-0 bottom-0 ps-5 pt-5  m-0"
                sx={{
                  backgroundImage: `url(${item.imageURL}), url(${DefaultImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "rgb(0 0 0 / 35%) 0px 108px 100px 5px inset",
                }}
                width={"100%"}
              >
                <Carousel.Caption color="white">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    variant="text"
                    sx={{ width: "fit-content", padding: 0 }}
                    onClick={() => handleNav(item.ctaKind)}
                  >{`Learn more>>`}</Button>
                </Carousel.Caption>
                {/* <img src={item.imageURL} width={"50%"} /> */}
              </Stack>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default CarouselCard;
