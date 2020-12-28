import React, { useState } from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";
import Rating from '../components/Rating';


export default function ItemDetails({ category }) {
    const navigate = useNavigate();
    const { data } = useData();
    const { id } = useParams();
    const item = data[category].find(x => x._id === id);
    // get feedbacks for the item with a given item id
    const feedbacks = data["feedbacks"].filter(x => x.itemID === id);
    const numOfFeedbacks = feedbacks.length;
    const aveRating = numOfFeedbacks === 0 ? 0 : feedbacks.map(feedback => feedback.rating).reduce((sum, feedback) => sum + feedback) / numOfFeedbacks;
   
    //get user form the key userID of the item and then get addresses from the key addressID of user 
    const user = data["users"].find(x => x._id === item.userID);
    const address = data["addresses"].find(x => x._id === user.addressID);
    console.log(address)

    const [quantity, setQuantity] = useState(1);

    const addToCartHandler = () => {
        // TODO
    }
    if (!item) {
        return <div> Item Not Found</div>
    }
    return (
        <div className="item-page">
            <div className="details">
                <div className="details-image">
                    <img src={item.image} alt="product"></img>
                </div>

                <div className="details-information">
                    <div>
                        <ul>
                            <li> <h4>{item.name}</h4> </li>
                            <li > <Rating rating={aveRating} numOfReviews={numOfFeedbacks}></Rating></li>
                            <li> Price: ${item.price}</li>
                            <li> Address: <span>{address.address},{address.city},{address.province},{address.postcode} {address.country}</span></li>
                            <li className="details-description">Description: <p className="details-description-content">{item.description}</p></li>
                        </ul>
                    </div>
                </div>

                <div className="details-action">
                    <ul>
                        <li className="price">
                            <div className="row">
                                <div>Price</div>
                                <div>RCC$: {item.price}</div>
                            </div>
                        </li>
                        {/* if the stock is greater than 0 , show instock, else,  */}
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>{item.stock > 0 ? (<span className="sucess">In Stock</span>) :
                                    (<span className="danger">Out of Stock</span>)}
                                </div>
                            </div>
                        </li>
                        {
                            item.stock > 0 && (
                                <>
                                    <li>
                                        <div className="row">
                                            <div>Quantity</div>
                                            <div>
                                                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                                    {[...Array(item.stock).keys()].map(
                                                        x => <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </li >
                                    <li><button className="button-addToCart" onClick={addToCartHandler}>Add to Cart</button></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

