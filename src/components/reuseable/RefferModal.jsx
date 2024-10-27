import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../utils/css/styles.css";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { RedSolidButton } from "./button/Buttons";
import rf1 from "../../assets/images/rf1.svg";
import rf2 from "../../assets/images/rf2.svg";
import rf3 from "../../assets/images/rf3.svg";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";

const RefferModal = ({ handleClose, open, referralMessage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "centered_button__bar",
    arrows: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40%",
    minHeight: "70%",
    bgcolor: "#FFFFFF",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleCopyText = (text) => {
    copy(text);
    toast.success("Referral Code Copied Successfully");
    handleClose();
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <>
          <Stack
            sx={style}
            spacing="1em"
            width={"39.125em"}
            height={"39.5em"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Reffer a Friend
            </Typography>
            <div className="slick-container">
              <Slider {...settings}>
                <Stack
                  display={"flex !important"}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <img className="img-reffer" src={rf1} alt="Slider Image" />
                  <p
                    style={{
                      fontSize: "1em",
                      width: "60%",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Schedule visit in just a few clicks visits in just a few
                    clicks
                  </p>
                </Stack>
                <Stack
                  display={"flex !important"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <img className="img-reffer" src={rf2} alt="Slider Image" />
                  <p
                    style={{
                      fontSize: "1em",
                      width: "60%",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Schedule visit in just a few clicks visits in just a few
                    clicks
                  </p>
                </Stack>
                <Stack
                  display={"flex !important"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <img className="img-reffer" src={rf3} alt="Slider Image" />
                  <p
                    style={{
                      fontSize: "1em",
                      width: "60%",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Schedule visit in just a few clicks visits in just a few
                    clicks
                  </p>
                </Stack>
              </Slider>
            </div>
            <Button
              onClick={() => handleCopyText(referralMessage)}
              variant={"contained"}
              sx={{
                borderRadius: "54.6591px",
                background:
                  "linear-gradient(80.67deg, #c42e66 27.97%, #d23852 96.9%)",
                fontSize: "small",
                p: 2,
                width: "80%",
              }}
            >
              Reffer Now
            </Button>
          </Stack>
        </>
      </Modal>
    </>
  );
};

export default RefferModal;
