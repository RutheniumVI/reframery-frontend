import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";


export default function ProductPage() {
    let navigate = useNavigate();
    const { data } = useData();
    let { id } = useParams();
    let product = data["products"].find(x => x._id === id)
    
    return (
        <div className="product-page">
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>

                <div className="details-information">
                    <div>
                        <ul>
                            <li> <h4>{product.name}</h4> </li>
                            <li> Rating: {product.rating} Stars</li>
                            <li> Price: ${product.price}</li>
                            <li> Address: <span>{product.address}</span></li>
                            <li className="details-description">Description: <p className="details-description-content">{product.description}</p></li>
                        </ul>
                    </div>
                </div>

                <div className="details-action">
                    <ul>
                        <li className="price">RCC$: {product.price}</li>
                        {/* if the stock is greater than 0 , show instock, else,  */}
                        <li>Status: {product.quantity > 0 ? "In Stock" : "Out of Stock"}</li>
                        <li>Quantity:
                    <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </li >

                        <li><button className="button-addToCart" onClick={() => navigate(`/cart`)}>Add to Cart</button></li>
                        <li><button className="button-buy" onClick={() => navigate(`/payment`)}>Buy Now</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

