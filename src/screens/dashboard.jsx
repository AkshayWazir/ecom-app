import React from "react";
import "./styles.css";
import { ItemCard } from "../component";

export default function Dashboard(props) {
  const content = [
    { id: 1, title: "Shoes", price: "1452" },
    { id: 2, title: "Pants", price: "2000" },
    { id: 3, title: "Shirts", price: "800" },
  ];
  return (
    <div className="dashboard-container">
      {content.map((item) => (
        <ItemCard data={item} key={item.id} />
      ))}
    </div>
  );
}
