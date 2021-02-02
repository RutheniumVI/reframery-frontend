import React from "react";

class CartSum extends React.Component {
    render (){
        return (
            <div className="cart-right">
                <div className="box totals">
                    <div className="totals-item">
                        <label>
                            Subtotal
                        </label>
                        <div className="totals-value is-size-5">$45</div>
                    </div>

                    <div className="totals-item" id="cart-subtotal">
                        <label>
                            Tax (13%)
                        </label>
                        <div className="totals-value is-size-5" id="cart-tax">$5</div>
                    </div>

                    <div className="totals-item">
                        <label>
                            Coupon Saved
                        </label>
                        <div className="totals-value is-size-5" id="cart-coupon">$5</div>
                    </div>

                    <div className="totals-item">
                        <label>
                            Grand Total
                        </label>
                        <div className="totals-value is-size-5" id="cart-total">
                            <strong>$45</strong>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <a href="/address-form">
                        <button className="button is-primary is-medium">
                            Check Out
                        </button>
                    </a>

                    <a href="/">
                        <button className="button is-text is-normal">
                            Continue Shopping
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default CartSum;