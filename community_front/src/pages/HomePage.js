import React from "react";
import ListProduct from "../components/ListProduct";

export default function Homepage() {
  return (
    <div>
      <div> Current Community : 
        <select>
          <option>Canada</option>
          <option>USA</option>
          <option>Brazil</option>
        </select>
      </div>
      <ListProduct mainCategory="products" />
      <ListProduct mainCategory="services" />
      <ListProduct mainCategory="competences" />
    </div>
  );
}
