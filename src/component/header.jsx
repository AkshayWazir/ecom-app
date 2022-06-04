import React from "react";
import "./styles.css";
import AppLogo from "../assets/app-logo.png";
import Cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigateTo = useNavigate();
  let quantity = 0;
  return (
    <div className="header-container">
      <img src={AppLogo} className="app-logo" onClick={() => navigateTo("/")} />
      <span className="cart-icon-container" onClick={() => navigateTo("/cart")}>
        <img src={Cart} className="cart-logo" />
        <p className="cart-counter">{quantity}</p>
      </span>
    </div>
  );
}
