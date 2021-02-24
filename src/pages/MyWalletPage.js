import React, { useEffect } from "react";
import { useData } from "../data/useData";
import { Link } from "react-router-dom";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { getUser } from 'actions/userActions';
import { getTransaction } from 'actions/transactionActions';

function Currency() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const userSignin = useSelector(state => state.userSignin);
    useEffect(() => {          
        dispatch(getUser(id));
    }, [dispatch, id]);
    const { userInfo } = userSignin;
    return (
        <div >
            <h2>Your current balance</h2>
            <div className="currency-box">
                <h1>{userInfo.currentCredit}</h1>
            </div>
        </div>
    );
}

function TransactionHistory() {
    const { data } = useData();
    const { id } = useParams();
    const dispatch = useDispatch(); 
    
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const transactionGet = useSelector(state => state.transactionGet);
    const { transactionInfo } = transactionGet;
    useEffect(() => {          
        dispatch(getUser(id));
    }, [dispatch, id]);
    useEffect(() => {          
        dispatch(getTransaction(id));
    }, [dispatch, id]);
    //console.log(transaction.receiverEmail);
    return (

        <div className="wallet-container">
            <h2>Transaction History</h2>
            <table className="transaction">
                {data.transactions.map((transaction) => (
                    <tr>
                        <td className="trans-text">
                            <ul>
                                <li>
                                    <img src={userInfo.userImage} alt="User Image"></img>
                                </li>
                                <li>Transaction ID: {transaction.transactionToken}</li>
                                <li>From: {userInfo.email}</li>
                                <li>To: {transaction.receiverEmail}</li>
                                <li>Date: {transaction.createdTime}</li>
                            </ul>
                        </td>
                        <td className="trans-price">RRC${transaction.creditUnit}</td>
                    </tr>
                ))}

            </table>
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