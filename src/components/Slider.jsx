import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Slider.scss";
import { useState } from "react";
import { sliderItems } from "../data";
import styled from "styled-components";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  //Slider Function
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  //Used styled components to pass the props
  const Wrapper = styled.div`
    transform: translateX(${(props) => props.slideIndex * -100}vw);

  `;

  return (
    <div className="container-slider">
      <div
        className="arrow"
        direction="left"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftIcon style={{border:"2px solid black", borderRadius:'50%'}}/>
      </div>
      <Wrapper
        slideIndex={slideIndex}
        className="wrapper"
        // style={{
        //   transform: `translateX(${props => props.slideIndex * -100}vw)`
        // }}
      >
        {sliderItems.map((items) => (
          <div className="slide" key={items.id}>
            <div className="img-container">
              <img src={items.img} alt="" />
            </div>
            <div className="info-container">
              <h1 className="info-title"> {items.title}</h1>
              <p className="info-description">{items.desc}</p>
              <button className="info-button">SHOP NOW</button>
            </div>
          </div>
        ))}
      </Wrapper>
      <div
        className="arrow"
        direction="right"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <ArrowRightIcon style={{border:"2px solid black", borderRadius:'50%'}}/>
      </div>
    </div>
  );
};

export default Slider;
