import React from "react";

import data_product from "../Assets/Assets/data";
import Item from "../Item/Item";

import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      {/* mapping the data, giving the props to the item compo */}
      <div className="popular-item">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
