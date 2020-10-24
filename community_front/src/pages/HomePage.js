import React from "react";
import ListProduct from "../components/ListProduct";

export default function Homepage() {
  return (
    <div>
      <ListProduct mainCategory="products" />
      <ListProduct mainCategory="services" />
      <ListProduct mainCategory="competences" />
    </div>
  );
}
