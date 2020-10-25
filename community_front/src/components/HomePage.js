import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomePage(props) {


    return (
        <div>
            <div>
                <p className="home-category">Products</p>
                <ul className="products" >
                    {
                        data.products.map(product =>
                            <li key={product._id}>
                                <div className="product">
                                    <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"></img></Link>

                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}><span className="link">{product.name}</span></Link>
                                    </div>
                                    <div className="product-price">${product.price}</div>
                                    <div className="product-rating">{product.rating} Stars</div>
                                    <div className="product-city">{product.city} </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div>
                <p className="home-category">Service</p>
                <ul className="products" >
                    {
                        data.services.map(product =>
                            <li key={product._id}>
                                <div className="product">
                                    <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"></img></Link>

                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                    <div className="product-price">${product.price}</div>
                                    <div className="product-rating">{product.rating} Stars</div>
                                    <div className="product-city">{product.city} </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div>
                <p className="home-category">Competence</p>
                <ul className="products" >
                    {
                        data.competences.map(product =>
                            <li key={product._id}>
                                <div className="product">
                                    <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"></img></Link>

                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                    <div className="product-price">${product.price}</div>
                                    <div className="product-rating"> {product.rating}</div>
                                    <div className="product-city">{product.city} </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>


        </div>

    );
}
export default HomePage;
