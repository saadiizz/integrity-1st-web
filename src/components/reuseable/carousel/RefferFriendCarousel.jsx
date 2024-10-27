import React, { useState } from "react";
import rf1 from "../../../assets/images/rf1.svg";
import rf2 from "../../../assets/images/rf2.svg";
import rf3 from "../../../assets/images/rf3.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RefferFriendCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // dotsClass: "centered_button__bar",
    // arrows: false,
    // cssEase: "linear",
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="d-block"
              src={rf1}
              alt="First slide"
              style={{
                objectFit: "cover",
                width: "20.98875em",
                height: "10.088125em",
              }}
            />
          </div>
          {/* <div>
            <img
              className="d-block"
              src={rf2}
              alt="First slide"
              width={"20%"}
              height={"20%"}
            />
          </div> */}
          {/* <div>
            <img
              className="d-block"
              src={rf1}
              alt="First slide"
              width={"80%"}
              height={"80%"}
            />
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default RefferFriendCarousel;
