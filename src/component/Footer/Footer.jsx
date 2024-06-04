import React from "react";

import footer_logo from "../Assets/Assets/logo_big.png";
import instagram_icon from "../Assets/Assets/instagram_icon.png";
import pinterest_icon from "../Assets/Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/Assets/whatsapp_icon.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>FashionFusion</p>
      </div>

      {/* ALL THE LINKS */}
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* ALL THE SOCIAL MEDIAS */}
      <div className="footer-social-icon">
        {/* ALL THE ICONS */}
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>

      {/* THE COPYRIGHT DIV */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
