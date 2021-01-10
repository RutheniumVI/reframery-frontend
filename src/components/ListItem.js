import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getNewestItems, getItemsOfCategory } from "../actions/itemActions";
import { useData } from "../data/useData";
import Item from "./Item";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import Rating from "./Rating";


export default function ListItem({ mainCategory }) {
  //get items from data.json
  const { data } = useData();
  
  // const dispatch = useDispatch();
  // const itemsGet = useSelector((state) => state.itemsGet);
  // const { loading, error, items } = itemsGet;
  // console.log(items);

  // the category of the item
  const loweredCate = mainCategory.toLowerCase();
  const items = data[loweredCate];


  //send the request to the backend
  // useEffect(() => {
  //   dispatch(getNewestItems());
  // }, [dispatch]);

  return (

    <div className="itemlist-container">
      <div className="home-category">
        {loweredCate.charAt(0).toUpperCase() + loweredCate.slice(1)}
      </div>
      <div className="list-items">
        {items.map((item) => (
          <Item key={item._id} item={item} category={loweredCate}></Item>
        ))}

      </div>

    </div>


  );
}
