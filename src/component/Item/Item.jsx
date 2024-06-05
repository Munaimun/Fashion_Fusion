import React from "react";

import { Link } from "react-router-dom";

import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      {/* wrapping the image with link, and giving the id from the props */}
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>

        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
