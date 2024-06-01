import React from "react";

import exclusive from "../Assets/Assets/exclusive_image.png";

import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      {/* LEFT OFFER DIV */}
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>

      {/* RIGHT OFFER DIV */}
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
