import React from "react";

import hand_icon from "../Assets/Assets/hand_icon.png";
import arrow_icon from "../Assets/Assets/arrow.png";
import hero_img from "../Assets/Assets/hero_image.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>

          <p>Collections</p>
          <p>for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Home;
