import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getNewestItems, getItemsOfCategory } from "../actions/itemActions";
import { useData } from "../data/useData";
import Item from "./Item";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import Rating from "./Rating";


export default function ListItem(props) {
  //get items from data.json
  const { community, mainCategory, itemList } = props;
  
  // const dispatch = useDispatch();
  // const itemsGet = useSelector((state) => state.itemsGet);
  // const { loading, error, items } = itemsGet;
  

  // console.log("testing");
  // console.log(itemList);
  // console.log(mainCategory);
  // console.log(community);

  return (

    <div className="itemlist-container">
      <div className="home-category">
        {/* {loweredCate.charAt(0).toUpperCase() + loweredCate.slice(1)} */}
      </div>
      <div className="list-items">
        {itemList.map((item) => (
          <Item key={item.id} item={item} community={community}></Item>
        ))}

      </div>

    </div>


  );
}
