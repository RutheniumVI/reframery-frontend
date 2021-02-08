import React, { useState } from 'react';
import { useData } from "../data/useData";
import { Link, useParams } from "react-router-dom";
import CreatedItemList from "../components/CreatedItemList";

export default function MyItemPage() {
  const [ list, setList ] = useState({});
  

  const addItem = (e, item_id) => {
    e.preventDefault();
    var num = parseInt(document.getElementById(item_id).value);
    if (isNaN(num)) {
      console.log("Error");
    } else {
      const key = `${e.target.value}`;
      if (key in list) {
        const updateList = Object.assign({}, list);
        updateList[key] = updateList[key] + num;
        setList(updateList);
      } else {
        setList({ ...list, [key]: num });
      }
    }
  };
  
  return (
    <div className="container">
      <div className="item-main">
        <div className="myitems-header">
        <Link to="/create-item" className="link">Create Item >></Link>
        </div>


        <div className="list-products" >
          <CreatedItemList mainCategory="products" />
        </div>
        <div className="list-services" >
          <CreatedItemList mainCategory="services" />
        </div>
        <div className="list-expertises">
          <CreatedItemList mainCategory="expertises" />
        </div>

      </div>



    </div>
  );
}


