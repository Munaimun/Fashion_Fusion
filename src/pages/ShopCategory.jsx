import React, { useContext } from "react";

import { shopContext } from "../context/ShopContext";
import Item from "../component/Item/Item";

import "./CSS/ShopCategory.css";

const ShopCategory = (props) => {
  const { all_products } = useContext(shopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />

      {/* 1st div */}
      <div className="shopcategpry-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products{" "}
        </p>
        <div className="shopcategory-sort">
          <select className="dropdown" value="sort by">
            <option>Sort</option>
            <option>Low to High price</option>
            <option>Date</option>
            <option>Size</option>
          </select>
        </div>
      </div>

      {/* 2nd div */}
      <div className="shopcategory-products">
        {all_products.map((item) =>
          props.category === item.category ? (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
