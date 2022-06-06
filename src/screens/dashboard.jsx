import React from "react";
import "./styles.css";
import { ItemCard } from "../component";
import { useSelector } from "react-redux";

export default function Dashboard(props) {
  const { searchField } = useSelector((state) => state.search);

  const content = [
    { id: 1, title: "Shoes", price: "1452" },
    { id: 2, title: "Pants", price: "2000" },
    { id: 3, title: "Shirts", price: "800" },
    { id: 4, title: "Kurta", price: "1452" },
    { id: 5, title: "Shorts", price: "2000" },
    { id: 6, title: "T-Shirts", price: "800" },
    { id: 7, title: "Sneakers", price: "1452" },
    { id: 8, title: "Cap", price: "2000" },
    { id: 9, title: "Gym Wear", price: "800" },
    { id: 10, title: "Jeggings", price: "1452" },
    { id: 11, title: "Mobile", price: "2000" },
    { id: 12, title: "watch", price: "800" },
  ];
  return (
    <div className="dashboard-container">
      {searchField.length === 0
        ? content.map((item) => <ItemCard data={item} key={item.id} />)
        : content.filter((item) => item.title.includes(searchField)).map((item) => <ItemCard data={item} key={item.id} />)}
    </div>
  );
}
