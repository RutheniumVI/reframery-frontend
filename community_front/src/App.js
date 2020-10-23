import React from 'react';
import ProductPage from "./components/ProductPage"
import { HashRouter as Router, Link, Route } from 'react-router-dom'
// import data from './data'

import './App.css';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';
import OrderPage from './components/OrderPage';


function App() {


  return (
    <Router>

      <div className="container">
        {/* header */}
        <header className="header">
          <div className="webname">
            <Link to="/"><span className="link">Reframery Community Currency</span></Link>
          </div>
          <div className="header-links">
            <Link to="/signin" > <span className="link">Sign In</span></Link>
            <Link to="/cart" > <span className="link">Cart</span></Link>
          </div>
        </header>

        <main className="main">

          {/* side bar */}
          <div className="sidebar">
            <ul>
              <li>My Wallet</li>
              <li>My Items</li>
              <li>My Profile</li>
              <li>My History</li>
            </ul>
          </div>

          {/* content */}
          <div className="content">
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/myreframery/purchase-records/order-details" component={OrderPage} />

          </div>
        </main>

        {/* footer */}
        <footer className="footer">  </footer>


      </div>



    </Router>
  )


}

export default App;
