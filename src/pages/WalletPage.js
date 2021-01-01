import React from "react";
import { useData } from "../data/useData";



function Currency() {
    return (
        <div>
            <h3>Your current balance: </h3>
            <div className="currency-box">
                <h1>RCC$ 40</h1>
            </div>
        </div>
    );
}

function TransactionHistory() {
    const { data } = useData();
    return (
        
            <div>
                <h3>Past Transactions</h3>
                <table className="transaction">
                    {data.products.map((product) => (
                        <tr>
                            <td className="trans-text">P-000000-000000{product._id} - RRC${product.price}</td>
                        </tr>
                    ))}

                </table>
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
