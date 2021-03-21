import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function CreatedItem(props) {
    const { item } = props;
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    console.log("Image: " + JSON.stringify(item));

    return (
        <div className="item">
            {userInfo ? (<Link to={(item.category === "products") ? "/" + item.community + "/products/" + item.id :
                (item.category === "services") ? "/" + item.community + "/services/" + item.id :
                    "/" + item.community + "/expertises/" + item.id}>
                <img
                    className="item-image"
                    src={item.imageURL}
                    alt={item.name}
                ></img>
            </Link>) : (<Link to="/signin">
                <img
                    className="item-image"
                    src={item.imageURL}
                    alt={item.name}
                ></img>
            </Link>)}

            <div className="item-info">
                <form>
                    <h2>
                        {userInfo ? (<Link to={(item.category === "products") ? "/" + item.community + "/products/" + item.id :
                            (item.category === "services") ? "/" + item.community + "/services/" + item.id :
                                "/" + item.community + "/expertises/" + item.id}>
                            <span className="link">{item.name.toUpperCase()}</span>
                        </Link>) : (<Link to="/signin">
                            <span className="link">{item.name.toUpperCase()}</span>
                        </Link>)}
                    </h2>
                    <div className="item-price">${item.price}</div>
                    <button
                        type="submit"
                        className="button is-primary"
                    >
                        Remove
            </button>
                </form>
            </div>


        </div>
    )
}
