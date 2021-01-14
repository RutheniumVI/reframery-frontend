import React from "react";
import { useData } from "../data/useData";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';


function Currency() {
    return (
        <div >
            <h3>Your current balance</h3>
            <div className="currency-box">
                <h1>RCC$ 25</h1>
            </div>
        </div>
    );
}

function TransactionHistory() {
    const { data } = useData();
    return (
        
            <div >
                <h3>Past Transactions</h3>
                <table className="transaction">
                    {data.products.map((product) => (
                        <tr>
                            <td className="trans-text">P-000000-000000{product._id} - RRC${product.price}</td>
                        </tr>
                    ))}

                </table>
                <div className = "button-more">
                    <button className="view-more">
                        <Link to = "/myreframery/records"><h4>View more transactions</h4></Link>
                    </button>
                </div>
            </div>
          
        
            );
        }

function Main() {
        return (
            <div>
                <div className = "back-to-reframery">
                    <Link to = "/">My Reframery</Link> {">>>"} My Wallet
                </div>
                <div className = "wallet">
                    <div>
                        <SideBar />
                    </div>
                    <div className="wallet-page">
                        <Currency />
                        <TransactionHistory />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }

export default Main;