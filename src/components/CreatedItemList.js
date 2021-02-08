import React from "react";
import { useData } from "../data/useData";
import CreatedItem from "./CreatedItem";



export default function CreatedItemList({ mainCategory }) {
    //get items from data.json
    const { data } = useData();


    const loweredCate = mainCategory.toLowerCase();
    const items = data[loweredCate];


    return (

        <div className="products-list">
            <div className="myitems-header">
                {loweredCate.charAt(0).toUpperCase() + loweredCate.slice(1)}
            </div>
            <ul className="products">
                {items.map((item) => (
                    <li key={item._id}>
                        <CreatedItem key={item._id} item={item} category={loweredCate}></CreatedItem>
                    </li>
                ))}


            </ul>

        </div>

    );
}
