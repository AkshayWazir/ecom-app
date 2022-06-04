import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./component";
import { Dashboard, Cart } from "./screens";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
}
