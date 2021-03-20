import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addBalanceToUser, deductBalanceToUser } from "../actions/transactionActions";
import { banUser, getUser, unBanUser } from "../actions/userActions";
import Header from 'components/Header';
import SideBar from "components/AdminSidebar";
import Footer from 'components/Footer'
import { adminAddCreditToUser, adminDeductCreditFromUser } from "actions/transactionActions";

export default function UpdateBalancePage() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(false);
    const [searchUserEmail, setSearchUserEmail] = useState('');
    const [creditUnit, setCreditUnit] = useState(0);

    //get the admin user information
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const senderEmail = userInfo.email;

    //get the receiver information
    const userGet = useSelector(state => state.userGet);
    const { user } = userGet;
    const searchUserHandler = (e) => {
        e.preventDefault();
        setSearch(true);
        dispatch(getUser(searchUserEmail));
    };

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
            dispatch(banUser(user.email));
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

    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                <div className="container admin-container">
                    <div className="admin-table">
                        <div className="table">
                            <h1 className="title-table">Search a User By Email</h1>
                            <div>Please Enter the User Email: <input type="email" onChange={(e) => setSearchUserEmail(e.target.value)}></input>
                                <button className="button is-primary is-rounded" onClick={searchUserHandler}> <span>Search</span></button>
                            </div>
                            {search ?
                                (user ?
                                    (user.validateStatus ?
                                        (<div className="search-user-table">
                                            <div className="title">
                                                <div className="email"> Email</div>
                                                <div className="currentbalance"> Current Credit </div>
                                                <div className="status"> Status </div>
                                                <div className="div-button"> Lock/Unlock </div>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="email">{user.email}</div>
                                                    <div className="currentbalance">{user.currentCredit}</div>
                                                    <div className="status">{user.banned ? "locked" : "unlocked"}</div>
                                                    <div className="div-button">
                                                        <button className="button is-primary is-rounded" onClick={banUserHandler}>Lock </button>
                                                        <button className="button is-primary is-rounded" onClick={unBanUserHandler}>UnLock</button></div>
                                                </div>
                                                <div >
                                                    <div className="title"> Update the user Credit</div>
                                                    <div>
                                                        <div >Number of Credit: <input className="credit-input" type="number" onChange={(e) => setCreditUnit(e.target.value)}></input>
                                                            <button className="button is-primary is-rounded" onClick={addBalanceHandler}>Add</button>
                                                            <button className="button is-primary is-rounded"
                                                                onClick={deductBalanceHandler}>Deduct</button>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        ) : (
                                            <div>User not found!</div>)
                                    ) : (<div>User not found!</div>)
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
