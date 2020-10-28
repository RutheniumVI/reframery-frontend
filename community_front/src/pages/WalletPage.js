import React, { Component } from "react";

//import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'


function Currency() {
    return <span><h3>Your current balance: </h3><h1>RCC$ 40</h1></span>;
}

function TransactionHistory() {
    return (
        <div>
            <h3>Past Transactions</h3>
            <ul>
                <li><span>2020.10.19 - Product Transaction<p>+RCC$ 20</p></span></li>
                <li><span>2020.10.22 - Service Transaction<p>-RCC$ 10</p></span></li>
            </ul>
        </div>
    );
}

function Main() {
    return (
        <div className="wallet-page">
            My Reframery {">"} My Wallet
            <Currency />
            <TransactionHistory />
        </div>

    );
}

export default Main;
