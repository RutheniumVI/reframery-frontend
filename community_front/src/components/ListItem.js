import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useData } from "../data/useData";
import Rating from "./Rating";


export default function ListItem({ mainCategory }) {
  let navigate = useNavigate();
  const { data } = useData();
  // the category of the item
  const loweredCate = mainCategory.toLowerCase();
  return (
    <div>
      <p className="home-category">
        {loweredCate.charAt(0).toUpperCase() + loweredCate.slice(1)}
      </p>
      <ul className="items">
        {data[loweredCate].map((item) => (
          <li key={item._id}>
            <div className="item">

              <img
                className="item-image"
                src={item.image}
                onClick={() => {(loweredCate==="products")? navigate(`/product/${item._id}`):
                                 (loweredCate==="services")? navigate(`/service/${item._id}`):
                                 navigate(`/expertise/${item._id}`)}}
                alt={item.name}
              ></img>

              <div className="item-name">
                
                <Link to={(loweredCate==="products")? "/product/"+ item._id:
                                 (loweredCate==="services")? "/service/"+ item._id:
                                 "/expertise/"+ item._id}>
                  <span className="link">{item.name}</span>
                </Link>

                {/* <Link to={"/product/" + item._id}>
                  <span className="link">{item.name}</span>
                </Link> */}
              </div>
              <div className="item-price">${item.price}</div>
              <div className="item-rating"><Rating rating={item.rating} numOfReviews= {item.numOfReviews}></Rating></div>
              <div className="item-city">{item.city}, {item.community} </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
