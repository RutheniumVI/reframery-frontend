import React from 'react';
import { useSelector } from 'react-redux';
import { useData } from "../data/useData";

export default function ListAwaitingValidation() {
    const { data } = useData();
    const users = data["users"].filter(x => x.admin===false && x.superAdmin===false)

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <div className="admin-table">
            <div className="table">
            <div className="title">
                        <div className="userid"> User ID</div>
                        <div className="username"> User Name</div>
                        <div className="email"> Email</div>
                        <div className="request"> Request Time </div>
                        <div className="status"> Status</div>
                        <div className="button"> &nbsp;</div>
                    </div>
                    {
                        users.map((user) => (user.validateStatus === false && 
                        <div className="row">
                            <div className="userid"> {user._id} </div>
                            <div className="username"> {user.firstName} {user.lastName} </div>
                            <div className="email">{user.email}</div>
                            <div className="request">{user.registerTime.slice(0,10)} </div>
                            <div className="status">pending</div>
                            <div className="button"><button className="button-validate">Validate</button></div>
                        </div>))
                    }
            </div>
        </div>
    );
}

