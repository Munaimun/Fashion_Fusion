import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/Assets/logo.png";
import cart_icon from "../Assets/Assets/cart_icon.png";

import "./Navbar.css";

const Navbar = () => {
  // initailising the state as "shop"
  const [menu, setMenu] = useState("shop");

  return (
    // DIV FOR THE FULL NAVBAR
    <div className="navbar">
      <div className="nav-logo">
        <Link className="nav-logo-link nav-logo" to="/">
          <img src={logo} alt="" />
          <p>ShopApp</p>
        </Link>
      </div>

      {/* MENU LIST */}
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link className="nav-logo-link" to="/">
            Home
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link className="nav-logo-link" to="/men">
            Men
          </Link>{" "}
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link className="nav-logo-link" to="/women">
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link className="nav-logo-link" to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      {/* CART LOGO */}
      <div className="nav-login-cart">
        <Link className="nav-logo-link" to="/login">
          <button>Login</button>
        </Link>
        <Link className="nav-logo-link" to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
