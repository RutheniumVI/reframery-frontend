import React from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/SideBar";
import CartCard from "components/CartCard";
import CartSum from "components/CartSum";
import Footer from "components/Footer";

class Cart extends React.Component {
    render (){
        return (
            <div>
                <div className="container cart">
                    <div className="columns">

                        <div className="column is-one-quarter">
                        </div>

                        <div className="column　is-half cart-body">
                            <h1 className="title is-1">Shopping Cart</h1>
                            <progress class="progress" value="25" max="100">25%</progress>
                            <div className="columns is-multiline cart-items">
                                <div className="column is-full">
                                    <CartCard />
                                </div>

                                <div className="column is-full">
                                    <CartCard />
                                </div>

                                <div className="column is-full">
                                    <CartCard />
                                </div>

                                <div className="column is-full">
                                    <CartCard />
                                </div>

                                <div className="column is-full">
                                    <CartCard />
                                </div>

                                <div className="column is-full">
                                    <CartCard />
                                </div>

                                <div className="column is-full">
                                    <CartCard />
                                </div>

                                <div className="column is-full">
                                    <CartCard />
                                </div>

                                <div className="column is-full">
                                    <CartCard />
                                </div>
                            </div>
                        </div>

                        <div className="column is-one-quarter">
                            <CartSum />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;