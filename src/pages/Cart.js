import React from "react";
import Sidebar from "components/SideBar";
import CartCard from "components/CartCard";
import CartSum from "components/CartSum";
import Header from "components/Header";
import NewSidebar from "components/NewSidebar";
import axios from "commons/axios";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart_cards: [],
        }
        this.updateCart = this.updateCart.bind(this);
        this.deleteCart = this.deleteCart.bind(this);
    }

    // set initial variables for summation
    sum = 0;
    num = 0;

    // get shopping cart contents from the backend
    componentDidMount (){
        axios.get("/cart").then(res => {
            this.setState({
                cart_cards: res.data
            })
        })  
    }

    // function to update the cart when the user adjust the number of certain items in the cart
    updateCart = (new_cart_card) => {
        // copy the current shopping cart
        const new_cart_cards = this.state.cart_cards;
        // Find the corresponding cart item that has been changed
        const _index = new_cart_cards.findIndex(card => card.id === new_cart_card.id);
        // Update this cart item
        new_cart_cards.splice(_index, 1, new_cart_card);
        // Set it to state so that the page gets rendered again
        this.setState({
            cart_cards: new_cart_cards
        })
    }

    // function to update the cart when the user delete certain item in the shopping cart
    deleteCart(deleted_card){
        // filter out the deleted card
        const deleted_cart_cards = this.state.cart_cards.filter(card => card.id !== deleted_card.id);
        // Set it to state so that the page gets rendered again
        this.setState({
            cart_cards: deleted_cart_cards
        })
    }

    render (){
        // set variables for summation
        let sum = 0;
        let num = 0;

        return (
            <div>
                <Header />
                <div className="container cart">
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <NewSidebar />
                        </div>

                        <div className="column　is-half cart-body">
                            <h1 className="title is-1">Shopping Cart</h1>
                            <progress class="progress" value="25" max="100">25%</progress>
                            <div className="columns is-multiline cart-items">

                                {this.state.cart_cards.map(cart_card => {
                                    sum += cart_card.price * cart_card.amount;
                                    num += cart_card.amount;
                                    return (
                                        <div className="column is-full" key={cart_card.id}>
                                            <CartCard card_item={cart_card} update={this.updateCart} delete={this.deleteCart} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="column is-one-quarter">
                            <CartSum sumPrice={sum} itemNum={num} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;