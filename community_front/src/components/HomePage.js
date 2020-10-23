import React , { Component } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';


class HomePage extends Component {
    render() {
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
                            data.services.map(service =>
                                <li key={service._id}>
                                    <div className="product">
                                        <Link to={'/product/' + service._id}><img className="product-image" src={service.image} alt="product"></img></Link>
    
                                        <div className="product-name">
                                            <Link to={'/product/' + service._id}>{service.name}</Link>
                                        </div>
                                        <div className="product-price">${service.price}</div>
                                        <div className="product-rating">{service.rating} Stars</div>
                                        <div className="product-city">{service.city} </div>
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
                            data.competences.map(competences =>
                                <li key={competences._id}>
                                    <div className="product">
                                        <Link to={'/product/' + competences._id}><img className="product-image" src={competences.image} alt="product"></img></Link>
    
                                        <div className="product-name">
                                            <Link to={'/product/' + competences._id}>{competences.name}</Link>
                                        </div>
                                        <div className="product-price">${competences.price}</div>
                                        <div className="product-rating"> {competences.rating}</div>
                                        <div className="product-city">{competences.city} </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
    
    
            </div>
    
        );
    }
    
}
export default HomePage;
