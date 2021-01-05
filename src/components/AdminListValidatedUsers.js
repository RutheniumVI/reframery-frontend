import React from 'react';
import { useData } from "../data/useData";

export default function ListValidateUser() {
    const { data } = useData();
    const users = data["users"].filter(x => x.admin===false && x.superAdmin===false)
    return (

        <div className="admin-table">
            <div className="table">
            <div className="title">
                        <div className="userid"> User ID</div>
                        <div className="username"> User Name</div>
                        <div className="email"> Email</div>
                        <div className="request"> Request Time </div>
                        <div className="validate"> Validate Time </div>
                        <div className="initalcredit">Initial Credit</div>
                    </div>
                    {
                        users.map((user) => (user.validateStatus && 
                        <div className="row">
                            <div className="userid"> {user._id} </div>
                            <div className="username"> {user.firstName} {user.lastName} </div>
                            <div className="email">{user.email}</div>
                            <div className="request">{user.registerTime.slice(0,10)} </div>
                            <div className="validate">{user.validateTime.slice(0,10)}</div>
                            <div className="initalcredit">25</div>
                        </div>))
                    }
            </div>
            
        </div>        
    );
}
