import React, { useState } from "react";
import carousal1 from "../../../assets/images/carousal1.svg";
import carousal2 from "../../../assets/images/carousal2.svg";
import carousal3 from "../../../assets/images/carousal3.svg";
import SliderRectangle from "../../../assets/images/SliderRectangle.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AuthCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "button__bar",
    arrows: false,
    cssEase: "linear",
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Slider {...settings}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              gap: "20px",
            }}
          >
            <img
              className="d-flex"
              src={carousal1}
              alt="First slide"
              style={{ width: "70%", objectFit: "cover" }}
            />
            <div>
              <h4 style={{ color: "black" }}>Find your sweet Garage</h4>
              <p style={{ fontSize: "1em", width: "60%" }}>
                Schedule visit in just a few clicks visits in just a few clicks
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="d-flex"
                src={carousal2}
                alt="First slide"
                style={{ width: "70%", objectFit: "cover" }}
              />
              <h4 style={{ color: "black" }}>Find your sweet Garage</h4>
              <p style={{ fontSize: "1em", width: "60%" }}>
                Schedule visit in just a few clicks visits in just a few clicks
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="d-flex"
                src={carousal3}
                alt="First slide"
                style={{ width: "70%", objectFit: "cover" }}
              />
              <h4 style={{ color: "black" }}>Find your sweet Garage</h4>
              <p style={{ fontSize: "1em", width: "60%" }}>
                Schedule visit in just a few clicks visits in just a few clicks
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AuthCarousel;
