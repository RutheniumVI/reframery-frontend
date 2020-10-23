import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data'


function ProductPage(props) {
    //read data from data.js
    console.log(props.match.params.id)
    const product = data.products.find(x => x._id === props.match.params.id)


    const handleAddToCart = () => {
        props.history.push("/cart")
      }
      const handleBuy = () => {
        props.history.push("/payment")
      }  

    return (
        <div>

            <div className="details">

                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                    <p className="decription">Description: {product.description}</p>
                </div>

                <div className="details-information">
                    <div>
                        <ul>
                            <li> <h4>{product.name}</h4> </li>
                            <li> Rating: {product.rating} Stars</li>
                            <li> Price: ${product.price}</li>
                            <li> Address: <span>{product.address}</span></li>
                        </ul>
                    </div>
                    <div>
                    <button className="button-buy" onClick={ handleBuy }>Buy Now</button>
                    <button className="button-addToCart" onClick={ handleAddToCart }>Add to Cart</button>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}
export default ProductPage;