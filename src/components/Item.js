import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Item(props) {
    const { category, item } = props;
    //get the current sign in user information
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    console.log(category);
    return (
        <div key={item._id} className="item">
            <div className="image">
                {userInfo ? (<Link to={(category === "products") ? "/products/" + item._id :
                    ((category === "services") ? "/services/" + item._id :
                        "/expertises/" + item._id)}>
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
                    {userInfo ? (<Link to={(category === "products") ? "/products/" + item._id :
                        (category === "services") ? "/services/" + item._id :
                            "/expertises/" + item._id}>
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
    )
}
