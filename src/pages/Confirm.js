import React from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/SideBar";
import Footer from "components/Footer";
import ConfirmSum from "components/ConfirmSum";

class Confirm extends React.Component {
    render (){
        return (
            <div>
                <Navbar />
                <div className="container confirm-container">
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <Sidebar />
                        </div>

                        <div className="column is-half">
                            <h1 className="title is-1">Confirm Information</h1>
                            <progress class="progress" value="75" max="100">75%</progress>
                            
                            <div className="panel is-info">
                                <p className="panel-heading">
                                    Shipping Details
                                </p>

                                <div className="panel-body">
                                    <dl className="dl-horizontal">
                                        <dt>Name</dt>
                                        <dd>Micheal Lee</dd>
                                        <dt>Address</dt>
                                        <dd>16 Stroud Rd, Hamilton, ON, CA</dd>
                                        <dt>Phone Number</dt>
                                        <dd>08077237890</dd>
                                        <dt>Email Address</dt>
                                        <dd>reframery@gmail.com</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="panel is-info">
                                <p className="panel-heading">
                                    Billing Address
                                </p>

                                <div className="panel-body">
                                    <dl className="dl-horizontal">
                                        <dt>Name</dt>
                                        <dd>Reframery</dd>
                                        <dt>Address</dt>
                                        <dd>1280 Main St. W., Hamilton, ON, CA</dd>
                                        <dt>Phone Number</dt>
                                        <dd>12345678</dd>
                                        <dt>Email Address</dt>
                                        <dd>reframery2@gmail.com</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="panel is-info">
                                <p className="panel-heading">
                                    Services / Products / Expertises
                                </p>

                                <div className="table-container confirm-table">
                                    <table className="table is-hoverable is-fullwidth">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                                <th>Number</th>
                                                <th>Sum</th>
                                                <th>Discount</th>
                                                <th>Tax</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="has-text-centered">
                                                <th>Birthday Cake</th>
                                                <td>$45</td>
                                                <td>2</td>
                                                <td>$90</td>
                                                <td>-$20</td>
                                                <td>+$10</td>
                                                <td><strong>$80</strong></td>
                                            </tr>

                                            <tr className="has-text-centered">
                                                <th>Birthday Cake</th>
                                                <td>$45</td>
                                                <td>2</td>
                                                <td>$90</td>
                                                <td>-$20</td>
                                                <td>+$10</td>
                                                <td><strong>$80</strong></td>
                                            </tr>

                                            <tr className="has-text-centered">
                                                <th>Birthday Cake</th>
                                                <td>$45</td>
                                                <td>2</td>
                                                <td>$90</td>
                                                <td>-$20</td>
                                                <td>+$10</td>
                                                <td><strong>$80</strong></td>
                                            </tr>

                                            <tr className="has-text-centered">
                                                <th>Birthday Cake</th>
                                                <td>$45</td>
                                                <td>2</td>
                                                <td>$90</td>
                                                <td>-$20</td>
                                                <td>+$10</td>
                                                <td><strong>$80</strong></td>
                                            </tr>

                                            <tr className="has-text-centered">
                                                <th>Birthday Cake</th>
                                                <td>$45</td>
                                                <td>2</td>
                                                <td>$90</td>
                                                <td>-$20</td>
                                                <td>+$10</td>
                                                <td><strong>$80</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                       
                            </div>

                        </div>

                        <div className="column is-one-quarter">
                            <ConfirmSum />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Confirm;