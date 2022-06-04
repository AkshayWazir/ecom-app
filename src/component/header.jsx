import React from "react";
import "./styles.css";
import AppLogo from "../assets/app-logo.png";
import Cart from "../assets/cart.png";

export default function Header(props) {
  let quantity = 0;
  return (
    <div className="header-container">
      <img src={AppLogo} className="app-logo" />
      <span className="cart-icon-container">
        <img src={Cart} className="cart-logo" />
        <p className="cart-counter">{quantity}</p>
      </span>
    </div>
  );
}
