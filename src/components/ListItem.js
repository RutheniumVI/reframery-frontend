import React from "react";
import Item from "./Item";

export default function ListItem(props) {
  const { community,itemList } = props;
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
