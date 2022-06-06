import React from "react";
import "./styles.css";
import AppLogo from "../assets/app-logo.png";
import Cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { updateSearch } from "../redux/search";

export default function Header(props) {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { searchField } = useSelector((state) => state.search);

  function search(event) {
    // * search Value = event.target.value
    dispatch(updateSearch(event.target.value));
  }

  return (
    <div className="header-container">
      <img src={AppLogo} className="app-logo" onClick={() => navigateTo("/")} />
      <TextField id="filled-basic" style={{ width: "40vw" }} label="Search" variant="filled" onChange={search} value={searchField} />
      <span className="cart-icon-container" onClick={() => navigateTo("/cart")}>
        <img src={Cart} className="cart-logo" />
        <p className="cart-counter">{cartItems.length}</p>
      </span>
    </div>
  );
}
