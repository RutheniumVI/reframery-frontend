import React from "react";
import ListItem from "../components/ListItem";

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
      <ListItem mainCategory="products" />
      <ListItem mainCategory="services" />
      <ListItem mainCategory="expertises" />
    </div>
  );
}
