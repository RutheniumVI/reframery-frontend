import React, { useState } from "react";
import { useData } from "../data/useData";

export default function SearchBar() {
  const { data } = useData();
  const [input, setInput] = useState("");
  const categories = ["products", "competences", "services"];
  const sellingItems = categories
    .map((name) => data[name])
    .flat()
    .map((item) => item.name.toLowerCase());

  const [filterDisplay, setFilterDisplay] = useState([]);
  const onChangeInput = (e) => {
    if (e !== "") {
      let newList = [];
      setInput(e);
      newList = sellingItems.filter((name) =>
        name.includes(input.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay([]);
    }
  };
  return (
    <div>
      <div>
        <strong>Search </strong>
      Item Name <input onChange={(e) => onChangeInput(e.target.value)} />                    
      <select>
          <option>All Category</option>
          <option>Product</option>
          <option>Service</option>
          <option>Competence</option>
        </select>
        {filterDisplay.map((key, i) => {
          return (
            <div key={i}>
              <li>{key}</li>
            </div>
          );
        })}
      </div>


    </div>

  );
}
