import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import Breadcrum from "../component/Breadcrums/Breadcrum";

const Product = () => {
  const { all_products } = useContext(shopContext);
  // getting the id from the params
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId)); // converting the string value to number

  return (
    <div>
      {product ? <Breadcrum product={product} /> : <div>Product not found</div>}
    </div>
  );
};

export default Product;
