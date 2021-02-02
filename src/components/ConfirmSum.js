import React from "react";

class ConfirmSum extends React.Component {
    render (){
        return (
            <div className="confirm">
                <div className="card confirm-wallet">
                    <header className="card-header">
                        <p className="is-size-5">Wallet Balance</p>
                    </header>
                    <div className="card-content has-text-centered">
                        <p className="title">
                            $100
                        </p>
                    </div>

                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Charge</a>
                        <a href="#" className="card-footer-item">View Details</a>
                    </footer>
                </div>

                <div className="totals">
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
                    <a href="/payment">
                        <button className="button is-primary is-medium">
                            Proceed to Payment
                        </button>
                    </a>

                    <a href="/address-form">
                        <button className="button is-text is-normal">
                            Edit Information
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default ConfirmSum;