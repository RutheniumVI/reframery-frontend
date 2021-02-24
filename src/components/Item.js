import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Item(props) {
    const { item, community } = props;
    //get the current sign in user information
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const category = item.category
    // console.log(category);
    // console.log(community);
    return (
        <div key={item.id} className="item">
            <div className="image">
                <Link to={(category === "Products") ? "/" + community + "/products/" + item.id :
                    ((category === "Services") ? "/" + community + "/services/" + item.id :
                        "/" + community + "/expertises/" + item.id)}>
                    <img
                        className="item-image"
                        src={item.imageURL}
                        alt={item.name}
                    ></img>
                </Link>
            </div>
            <div className="item-info">
                <div className="item-name">
                    <Link to={(category === "Products") ? "/" + community + "/products/" + item.id :
                        (category === "Services") ? "/" + community + "/services/" + item.id :
                            "/" + community + "/expertises/" + item.id}>
                        <span className="link">{item.name}</span>
                    </Link>
                </div>
                <div className="item-price">${item.price}</div>
                <div className="item-rating"><Rating rating={item.averageRating} numOfReviews={item.numberOfFeedbacks}></Rating></div>
                <div className="item-city">{item.city}, {item.province}</div>
            </div>
        </div>
    )
}
