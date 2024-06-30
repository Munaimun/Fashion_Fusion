import React from "react";
import data_product from "../Assets/Assets/data";
import Item from "../Item/Item";

import "./RelatedProduct.css";

const RelatedProduct = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Product</h1>
      <hr />
      <div className="relatedproducts-item">
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

export default RelatedProduct;
