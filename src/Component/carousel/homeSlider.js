
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function homeSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg?t=st=1683129275~exp=1683129875~hmac=2d3d4f5430b343805af77d7e123df6efa6ad399a3950f0e2d53445ce4ba0bc73"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg?t=st=1683129275~exp=1683129875~hmac=2d3d4f5430b343805af77d7e123df6efa6ad399a3950f0e2d53445ce4ba0bc73"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg?t=st=1683129275~exp=1683129875~hmac=2d3d4f5430b343805af77d7e123df6efa6ad399a3950f0e2d53445ce4ba0bc73"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default homeSlider;