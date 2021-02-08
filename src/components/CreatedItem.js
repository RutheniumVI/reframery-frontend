import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function CreatedItem(props) {
    const { category, item } = props;
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    console.log(category);
    return (
        <div className="product">
            {userInfo ? (<Link to={(category === "products") ? "/products/" + item._id :
                ((category === "services") ? "/services/" + item._id :
                    "/expertises/" + item._id)}>
                <img
                    className="img-thumbnail"
                    src={item.image}
                    alt={item.name}
                ></img>
            </Link>) : (<Link to="/signin">
                <img
                    className="img-thumbnail"
                    src={item.image}
                    alt={item.name}
                ></img>
            </Link>)}

            <h2>
                {userInfo ? (<Link to={(category === "products") ? "/products/" + item._id :
                        (category === "services") ? "/services/" + item._id :
                            "/expertises/" + item._id}>
                        <span className="link">{item.name.toUpperCase()}</span>
                    </Link>) : (<Link to="/signin">
                        <span className="link">{item.name.toUpperCase()}</span>
                    </Link>)}
            </h2>
            <form>
                <h1>${item.price}</h1>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </form>

        </div>
    )
}
