import React, { useState } from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";
import Rating from '../components/Rating';
import { Link } from "react-router-dom";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer'
import { useSelector } from 'react-redux';


export default function ItemDetails() {
    console.log("testing---------------------------------")
    const { data } = useData();
    const { category, id } = useParams();
    console.log(data);
    console.log(category);
    //console.log(data[category]);
    const item = data[category].find(x => x._id === id);
    console.log("testing")
    console.log(item)
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;


    //get user form the key userID of the item and then get addresses from the key addressID of user 
    const user = data["users"].find(x => x.email === item.userID);
    console.log(user.email)

    const [quantity, setQuantity] = useState(1);

    const addToCartHandler = () => {
        // TODO
    }
    if (!item) {
        return <div> Item Not Found</div>
    }
    return (
        <div>
            <Header />
            <div className="sidebar-content">
                {userInfo ? <SideBar /> : null}
                <div className="container">
                    <div className="item-page">
                        <div className="details">
                            <div className="details-c1">
                                <div>
                                    <h1>{item.name}</h1>
                                </div>
                                <div className="details-image">
                                    <img src={item.image} alt="product"></img>
                                </div>
                                <div className="details-buttons">
                                    <div>
                                        <button className="button-addToCart" onClick={addToCartHandler}><Link to="/cart"><h3>Add to Cart</h3></Link></button>
                                    </div>
                                </div>
                                <div className="details-buttons">
                                    <button className="button-addToCart" onClick={addToCartHandler}><Link to="/payment"><h3>Buy Item</h3></Link></button>
                                </div>
                                <div>
                                    <Link to="/home"><h3 className="back-to-mar">Back to marketplace</h3></Link>
                                </div>
                            </div>

                            <div className="details-information">
                                <div>
                                    <div className="details-title">
                                        <h1>Item Details</h1>
                                    </div>
                                    <ul>
                                        <li >Rating:<Rating rating={5} numOfReviews={1}></Rating></li>
                                        <li> Price: ${item.price}</li>
                                        <li> Address: <span>{user.address ? (user.address, user.city, user.province, user.postcode, user.country) : ""}</span></li>
                                        <li>
                                            <div className="row">
                                                <div>Status:</div>
                                                <div>{item.stock > 0 ? (<span className="sucess">In Stock</span>) :
                                                    (<span className="danger">Out of Stock</span>)}
                                                </div>
                                            </div>
                                        </li>

                                        <li className="details-description">Description: <p className="details-description-content">{item.description}</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

