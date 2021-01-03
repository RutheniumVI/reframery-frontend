import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useData } from "../data/useData";
import Rating from "./Rating";


export default function ListItem({ mainCategory }) {
  //get items from data.json
  const { data } = useData();

  //get the current sign in user information
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  // the category of the item
  const loweredCate = mainCategory.toLowerCase();
  return (
    <div className="itemlist-container">
      <div className="home-category">
        {loweredCate.charAt(0).toUpperCase() + loweredCate.slice(1)}
      </div>
      <div className="list-items">
        {data[loweredCate].map((item) => (
          <div className="item">
            <div className="image">
              {userInfo ? (<Link to={(loweredCate === "products") ? "/product/" + item._id :
                (loweredCate === "services") ? "/service/" + item._id :
                  "/expertise/" + item._id}>
                <img
                  className="item-image"
                  src={item.image}
                  alt={item.name}
                ></img>
              </Link>) : (<Link to="/signin">
                <img
                  className="item-image"
                  src={item.image}
                  alt={item.name}
                ></img>
              </Link>)}
            </div>
            <div className="item-info">
              <div className="item-name">
                {userInfo ? (<Link to={(loweredCate === "products") ? "/product/" + item._id :
                  (loweredCate === "services") ? "/service/" + item._id :
                    "/expertise/" + item._id}>
                  <span className="link">{item.name}</span>
                </Link>) : (<Link to="/signin">
                  <span className="link">{item.name}</span>
                </Link>)}
              </div>
              <div className="item-price">${item.price}</div>
              <div className="item-rating"><Rating rating={5} numOfReviews={1}></Rating></div>
              <div className="item-city">Hamilton, ON</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
