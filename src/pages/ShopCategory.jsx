import React, { useContext } from "react";

import { shopContext } from "../context/ShopContext";

import "./CSS/ShopCategory.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
    </div>
  );
};

export default ShopCategory;
