import React from "react";
import "./homepage.css";
import HomeSlider from "../../Component/carousel/homeSlider";
import Header from "../../Component/header/Header";
import Banner1 from "../../assets/img/grow-1.jpg";
import Homecard from "../../Component/homecard/homecard";
function homePage() {
  return (
    <div className="home-page ">
     
      <HomeSlider />
      <Homecard />
      
      
    </div>
  );
}

export default homePage;
