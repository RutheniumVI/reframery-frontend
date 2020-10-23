import React, { Component } from 'react';
import data from '../data'


class OrderPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // product: data.products.find(x => x._id === 1),
            // product: data.products.filter(x => x._id === 1),

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
                address: "100 Main St. S. Toronto ON L3P5H8"
            },

        };

    }

    render() {
        return (
            <div>

                <div>
                    <div>My regramery {">"} Purchase recoreds {">"}  Order detail</div>
                </div>

                <div>
                    <div>Order Number: P0000000000000000001</div>
                    <div>Status: Pay Succes</div>
                </div>

                <div>
                    <p>Order</p>
                    <div className="seller-detail">
                        <div>
                            Seller details
                        </div>
                        <div>
                            <ul>
                                <li> Contact Name:   </li>
                                <li> Address:   </li>
                                <li> Mobile:   </li>
                            </ul>
                        </div>
                    </div>


                    <div className="order-table">
                        <table>
                            <tr>
                                <td>Item Details</td>
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

