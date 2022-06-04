import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { ItemCard } from "../component";

export default function Cart(props) {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <ItemCard data={item} key={item.id} />
      ))}
    </div>
  );
}
