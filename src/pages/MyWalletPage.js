import React from "react";
import { useData } from "../data/useData";
import { Link } from "react-router-dom";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer'

function Currency() {
    return (
        <div >
            <h2>Your current balance</h2>
            <div className="currency-box">
                <h1>RCC$ 25</h1>
            </div>
        </div>
    );
}

function TransactionHistory() {
    const { data } = useData();
    return (

        <div className="wallet-container">
            <h2>Transaction History</h2>
            <table className="transaction">
                {data.transactions.map((transaction) => (
                    <tr>
                        <td className="trans-text">
                            <ul>
                                <li>ID: {transaction._id}</li>
                                <li>From: {transaction.senderID}</li>
                                <li>To: {transaction.receiverID}</li>
                                <li>Date: {transaction.createdAt}</li>
                            </ul>
                        </td>
                        <td className="trans-price">RRC${transaction.creditUnit}</td>
                    </tr>
                ))}

            </table>
            <div className="view-more">
                <Link to="/myreframery/records"><h4>View more transactions &gt;&gt; </h4></Link>
            </div>
        </div>
    );
}

function Main() {
    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                <div className="wallet-container">
                    <div className="wallet">
                        <div className="wallet-page">
                            <div className="wallet-c1">
                                <Currency />
                            </div>
                            <div className="wallet-c2">
                                <TransactionHistory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Main;