import React, { Component } from 'react';
import data from '../data'


class OrderPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product:
            {
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
            },
            user:
            {
                name: 'TechTerms',
                address: '100 Main Street South Hamilton, ON L3P 5H8 Canada',
                email: 'techterms@gmail.com',
                mobile: 'TechTerms '
            }

        };

    }

    render() {
        return (
            <div className="order-details">
                <div className="order-path">
                    <div>My Reframery {">"} Purchase Records {">"}  Order Details</div>
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
                            Seller Information
                        </h4>
                        <div>
                            <ul>
                                <li> Contact Name:  {this.state.user.name} </li>
                                <li> Address:   {this.state.user.address}</li>
                                <li> Email:   {this.state.user.email}</li>
                                <li> Mobile:   {this.state.user.mobile}</li>
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
                                        <td > <img className="order-image" src={this.state.product.image} alt="product"></img></td>
                                        <td ><span className="order-product-name">{this.state.product.name}</span></td>
                                    </div>
                                    {/* </table> */}

                                </td>
                                <td>Price: ${this.state.product.price}</td>
                                <td>1</td>
                                <td>RCC$ {this.state.product.price}</td>
                                <td>Pay Success</td>
                            </tr>


                        </table>
                    </div>
                </div>

            </div>
        );
    }
}
export default OrderPage

