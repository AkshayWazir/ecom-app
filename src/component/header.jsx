import React from "react";
import "./styles.css";
import AppLogo from "../assets/app-logo.png";
import Cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(props) {
  const navigateTo = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="header-container">
      <img src={AppLogo} className="app-logo" onClick={() => navigateTo("/")} />
      <span className="cart-icon-container" onClick={() => navigateTo("/cart")}>
        <img src={Cart} className="cart-logo" />
        <p className="cart-counter">{cartItems.length}</p>
      </span>
    </div>
  );
}
