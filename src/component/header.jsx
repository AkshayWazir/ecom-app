import React from "react";
import "./styles.css";
import AppLogo from "../assets/app-logo.png";
import Cart from "../assets/cart.png";

const Header = (props) => {
  return (
    <div>
      <img src={AppLogo} className="app-logo" />
      <img src={AppLogo} className="cart-logo" />
    </div>
  );
};

export default Header;
