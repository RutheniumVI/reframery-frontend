import React from "react";
import ListItem from "../components/ListItem";
export default function Itemspage() {
  return (
    <div className="home-container">      
      <div className="list-products" >
        <ListItem mainCategory="products" />
      </div>
      <div className="list-services" >
        <ListItem mainCategory="services" />
      </div>
      <div className="list-expertises">
        <ListItem mainCategory="expertises" />
      </div>
    </div>
  );
}
