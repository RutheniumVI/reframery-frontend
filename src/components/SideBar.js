import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="head">
          <Link className="link" to="/home">
            <img className="logo" src="/images/logo.png" alt="logo" width="100" ></img >
          </Link>
          <Link className="link" to="/home"><div className="marketplace"> Marketplace</div></Link>
        </div>

        <div className="middle">
          <div className="menu">
            <div className="row"> <Link to="/mywallet" className="link">- MY WALLET</Link></div>

            <div className="row"><Link to="./user-profile" className="link">- MY PROFILE </Link></div>

            <div className="row"> <Link to="./my-item" className="link"> - MY ITEM</Link></div>

            <div className="row"><Link to="/myreframery/records" className="link"> - MY HISTORY </Link></div>
            <div className="cart">
              <div>
                <img src="/images/cart.png" alt="cart" ></img>
              </div>
              <div > <Link to="/cart" className="link">MY CART</Link></div>
            </div>
          </div>
        </div>
        </div>


        {/* <div className="image">
          <img src="/images/signup.png" alt="background" ></img>
        </div> */}

      </div>
  );
}
