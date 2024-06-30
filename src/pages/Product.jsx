import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import Breadcrum from "../component/Breadcrums/Breadcrum";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../component/DescriptionBox/DescriptionBox";
import RelatedProduct from "../component/RelatedProduct/RelatedProduct";

const Product = () => {
  const { all_products } = useContext(shopContext);
  // getting the id from the params
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId)); // converting the string value to number

  return (
    <div>
      {product ? <Breadcrum product={product} /> : <div>Product not found</div>}
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
