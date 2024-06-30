import React, { useContext } from "react";

import { shopContext } from "../../context/ShopContext";
import removeIcon from "../Assets/Assets/cart_cross_icon.png";
import removeFromCart from "../../context/ShopContext";

import "./CartItems.css";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(shopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Prize</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />
    </div>
  );
};

export default CartItems;
