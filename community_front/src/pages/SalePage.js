import React from 'react';
import { Link } from "react-router-dom";

export default function SalePage() {
    const product = {
        _id: '1',
        category: 'Products',
        name: 'Birthday Cake',
        image: '/images/product_cake.jpg',
        price: 20,
        quantity: 20,
        rating: 5,
        description: "Homebaked Cakes - ideal for Birthdays and Special Occasions. ",
        city: "Hamilton",
        address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    }
    const user = {
        name: 'TechTerms',
        address: '100 Main Street South Hamilton, ON L3P 5H8 Canada',
        email: 'techterms@gmail.com',
        mobile: 'TechTerms '
    }

    return (
        <div className="order-details">
            <div className="order-path">
                <div><Link to="/">My Reframery</Link> {">"} <Link to="/myreframery/records">Records {">"} </Link> <Link to="/myreframery/records">Sale Records</Link> {">"}  Sale Details</div>
            </div>

            <div className="order-overview">
                <h4>
                    Order Overview
                        </h4>
                <ul>
                    <li>Order # P-000000-0000001</li>
                    <li>Order on October 20, 2020</li>
                    <li>Status: Pay Success</li>
                </ul>
            </div>

            <div className="order-information">
                <div className="seller-detail">
                    <h4>
                        Buyer Information
                        </h4>
                    <div>
                        <ul>
                            <li> Contact Name:  {user.name} </li>
                            <li> Email:   {user.email}</li>
                            <li> Mobile:   {user.mobile}</li>
                        </ul>
                    </div>
                </div>


                <div className="order-table">
                    <h4>
                        Item Details
                        </h4>
                    <table>
                        <tr>
                            <td>Item</td>
                            <td>Price Per Unit</td>
                            <td>Quantity</td>
                            <td>Total</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>
                                {/* <table className="order-inner-table"> */}
                                <div className="order-inner-table">
                                    <td > <img className="order-image" src={product.image} alt="product"></img></td>
                                    <td ><span className="order-product-name">{product.name}</span></td>
                                </div>
                                {/* </table> */}

                            </td>
                            <td>Price: ${product.price}</td>
                            <td>1</td>
                            <td>RCC$ {product.price}</td>
                            <td>Pay Success</td>
                        </tr>


                    </table>
                </div>
            </div>

        </div>
    );
}


