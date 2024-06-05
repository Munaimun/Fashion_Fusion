import React from "react";

import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        {/* FORM FILEDS */}
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          {/* TERM & CONDITION */}
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing, I agree to the terms and policy</p>
          </div>

          <button>Submit</button>

          <div className="loginsignup-login">
            Already have an account?{" "}
            <button className="login-button">Login Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
