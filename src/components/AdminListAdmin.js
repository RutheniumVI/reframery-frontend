import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from "../data/useData";

export default function ListAdmin() {
    const { data } = useData();
    const users = data["users"].filter(x => (x.admin === true || x.superAdmin === true))
    return (
        <div className="admin-table">
            <Link to="/admin/create-admin-account"><div className="create">Create a new administrator</div></Link>
            <div className="table">
                <div className="title">
                    <div className="userid"> Admin ID</div>
                    <div className="username"> Admin Name</div>
                    <div className="email"> Email</div>
                    <div className="request"> Register Time </div>
                    <div className="button"> &nbsp;</div>
                </div>
                {
                    users.map((user) => (
                        <div className="row">
                            <div className="userid"> {user._id} </div>
                            <div className="username"> {user.firstName} {user.lastName} </div>
                            <div className="email">{user.email}</div>
                            <div className="request">{user.registerTime.slice(0, 10)} </div>
                            <div className="button"><button className="button-promote">Promote As Manager</button></div>
                        </div>))
                }
            </div>
            

        </div>
    );
}