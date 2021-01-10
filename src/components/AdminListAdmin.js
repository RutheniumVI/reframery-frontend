import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchAdminUsers, updateUser } from "../actions/userActions";
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

export default function ListAdmin() {
    const dispatch = useDispatch();
    //get the list of admin users
    const adminUsers = useSelector((state) => state.adminUsers);
    const { loadingAdmin, error, admins } = adminUsers;
    console.log(admins);

    //button handler for promote a dmin to a manager
    const promoteHandler = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Are you sure to promote the current admin to a manager?");
        if (confirm) {
            const userEmail = e.target.value;
            const manager = true;
            dispatch(updateUser(userEmail, manager));
            window.location.reload();
        }
    };

    //update the admin information when getting the user details
    useEffect(() => {
        dispatch(searchAdminUsers());
    }, [dispatch]);

    return (
        <div>
            {loadingAdmin ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div className="admin-table">
                            <Link to="/admin/create-admin-account"><div className="create">Create a new administrator</div></Link>
                            <div className="table">
                                <div className="title">
                                    <div className="username"> Admin Name</div>
                                    <div className="email"> Email</div>
                                    <div className="request"> Register Time </div>
                                    <div className="button"> &nbsp;</div>
                                </div>
                                {
                                    admins.map((currentUser) => (
                                        <div className="row" key={currentUser.email}>
                                            <div className="username"> {currentUser.firstName} {currentUser.lastName} </div>
                                            <div className="email">{currentUser.email}</div>
                                            <div className="request">{currentUser.registerTime.slice(0, 10)} </div>
                                            <div className="button">
                                                {
                                                    currentUser.manager ? (
                                                        <div>&nbsp;</div>
                                                    ) : (
                                                            <button className="button-promote" value={currentUser.email} onClick={promoteHandler}>Promote As Manager</button>
                                                        )
                                                }
                                            </div>
                                        </div>))
                                }
                            </div>


                        </div>
                    )}
        </div>
    );
}