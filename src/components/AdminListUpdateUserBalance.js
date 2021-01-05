import React from 'react';
import { useData } from "../data/useData";

export default function ListUpdateUserBalance() {
    const { data } = useData();
    const users = data["users"].filter(x => x.admin===false && x.superAdmin===false)
    return (
        <div className="admin-table">
            <div className="table">
            <div className="title">
                        <div className="userid"> User ID</div>
                        <div className="email"> Email</div>
                        <div className="currentbalance"> Current balance </div>
                        <div className="button"> &nbsp;</div>
                    </div>
                    {
                        users.map((user) => (!user.validateStatus && 
                        <div className="row">
                            <div className="userid"> {user._id} </div>
                            <div className="email">{user.email}</div>
                            <div className="request">{user.balance} </div>
                            <div className="button"><button className="button-validate">Update Balance</button></div>
                        </div>))
                    }
            </div>            
        </div>  
    );
}
