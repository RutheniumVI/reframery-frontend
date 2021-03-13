import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function CreatedItem(props) {
    const { item } = props;
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    console.log("Item id: "+item.id);
    console.log("category: " + item.category);
    
    return (
        <div className="product">
            {userInfo ? (<Link to={(item.category === "products") ? "/"+ item.community + "/products/" + item.id :
                (item.category === "services") ? "/"+ item.community + "/services/" + item.id :
                "/"+ item.community + "/expertises/" + item.id}>
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
                {userInfo ? (<Link to={(item.category === "products") ? "/"+ item.community + "/products/" + item.id :
                        (item.category === "services") ? "/"+ item.community + "/services/" + item.id :
                        "/"+ item.community + "/expertises/" + item.id}>
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
                    Remove
                  </button>
                </form>

        </div>
    )
}
