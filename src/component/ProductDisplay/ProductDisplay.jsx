import React, { useContext } from "react";

import start_icon from "../Assets/Assets/star_icon.png";
import start_dull_icon from "../Assets/Assets/star_dull_icon.png";
import { shopContext } from "../../context/ShopContext";

import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(shopContext);

  return (
    <div className="productdisplay">
      {/* LEFT DIV */}
      <div className="productdisplay-left">
        {/* div fot the image list */}
        <div className="productdiplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      {/* RIGHT DIV */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />

          <p>(122)</p>
        </div>

        {/* DIV FOR THE PRICES */}
        <div className="productdisplay-right-prices">
          {/* DIV FOR OLD PRICE */}
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>

          {/* DIV FOR THE NEW PRICE */}
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>

          <div className="productdisplay-right-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            accusantium explicabo ad consequuntur ipsa voluptatum rerum ab quam,
            sint illo neque dolorem, id ut quidem facere saepe pariatur minima
            nulla.
          </div>

          <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-sizes">
              <div>Small</div>
              <div>Medium</div>
              <div>Large</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add To Cart
          </button>
          <p className="productdisplay-right-category">
            <span>Category :</span>Women, T-shirt, Crop-Top
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span>Modern, latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
