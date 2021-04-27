import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { banUser, getUser, unBanUser } from "../actions/userActions";
import Header from 'components/Header';
import SideBar from "components/AdminSidebar";
import Footer from 'components/Footer'
import { adminAddCreditToUser, adminDeductCreditFromUser } from "actions/transactionActions";
import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function UpdateBalancePage() {
    const dispatch = useDispatch();
    const search = useLocation().search;
    const userEmail = new URLSearchParams(search).get('userEmail');

    const [creditUnit, setCreditUnit] = useState(0);

    //get the admin user information
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const senderEmail = userInfo.email;

    //get the receiver object
    const userGet = useSelector(state => state.userGet);
    const { loading, error, user } = userGet;

    // get the updated user object
    const userUpdate = useSelector(state => state.userUpdate);
    const { user: updatedUser } = userUpdate;

    // get the transaction status of adding credit to user
    const creditAdd = useSelector(state => state.creditAdd);
    const { transaction: transactionAdd } = creditAdd;

    // get the transaction status of deducting credit to user
    const creditDeduct = useSelector(state => state.creditDeduct);
    const { transaction: transactionDeduct } = creditDeduct;

    //button handler for add balance
    const addBalanceHandler = (e) => {
        e.preventDefault();
        if (creditUnit > 0 && creditUnit < 1000) {
            const confirm = window.confirm("Do you wish to add " + creditUnit + " credit to " + user.email + "?");
            if (confirm) {
                dispatch(adminAddCreditToUser(senderEmail, user.email, creditUnit));
            }
        } else {
            alert("The number should be greater than 0 and less than 1000!");
        }
    };

    //button handler for deduct balance
    const deductBalanceHandler = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Do you wish to deduct " + creditUnit + " credit from " + user.email + "?");
        if (confirm) {
            dispatch(adminDeductCreditFromUser(senderEmail, user.email, creditUnit));
        }
    };
    //button handler for locking the user
    const banUserHandler = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Do you wish to lock " + user.email + "?");
        if (confirm) {
            dispatch(banUser(user.email, true));
        }
    };
    //button handler for unlocking the user
    const unBanUserHandler = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Do you wish to unlock " + user.email + "?");
        if (confirm) {
            dispatch(unBanUser(user.email, false));
        }
    };

    useEffect(() => {
        dispatch(getUser(userEmail));

    }, [dispatch, userEmail, updatedUser, transactionAdd, transactionDeduct]);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
                    <Header />
                    <div className="sidebar-content">
                        <SideBar />
                        <div className="container admin-container">
                            <div className="admin-table">
                                <div className="table">
                                {/* check if the user's validation status, if the user has been validated, 
                                show the user detail information, else show the admin that the user has not been validate and provide the link to validation*/}
                                    {user.validateStatus ?
                                        (<div className="search-user-table">
                                            <div className="title">
                                                <div className="email"> Email</div>
                                                <div className="currentbalance"> Currency Balance </div>
                                                <div className="status"> Status </div>
                                                <div className="div-button"> Lock/Unlock </div>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="email">{user.email}</div>
                                                    <div className="currentbalance">{user.currentCredit}</div>
                                                    <div className="status">{user.banned ? "banned" : "unbanned"}</div>
                                                    <div className="div-button">
                                                        <button className="button is-primary is-rounded" onClick={banUserHandler}>Ban </button>
                                                        <button className="button is-primary is-rounded" onClick={unBanUserHandler}>Unban</button></div>
                                                </div>
                                                <div >
                                                    <div className="title"> Update user's Balance</div>
                                                    <div>
                                                        <div >Unit of Currency: <input className="credit-input" type="number" onChange={(e) => setCreditUnit(e.target.value)}></input>
                                                            <button className="button is-primary is-rounded" onClick={addBalanceHandler}>Add</button>
                                                            <button className="button is-primary is-rounded"
                                                                onClick={deductBalanceHandler}>Deduct</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        ) : (
                                        <div>
                                            <div>{user.email} has not been validated!</div>
                                            <div><Link className="link" to="/admin/awaiting-validation">Please validate the user!</Link></div> 
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>)}
        </div>
    );
}
