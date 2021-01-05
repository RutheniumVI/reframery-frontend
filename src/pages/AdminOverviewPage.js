import React from 'react';
import { useData } from "../data/useData";
import AdminMenu from '../components/AdminSidebar';

export default function OverviewPage() {
    const { data } = useData();
    const users = data["users"].filter(x => x.admin === false && x.superAdmin === false)
    const validatedUsers = data["users"].filter(x => x.validateStatus === true)
    return (
        <div className="admin-container">
            <AdminMenu />
            <div className="admin-table">
                <div className="table">
                    <div className="title">
                        <div className="column1"> All Users</div>
                        <div className="column2"> Awaiting Validation</div>
                        <div className="column"> Validated Users</div>
                    </div>

                    <div className="row">
                        <div className="column1"> {users.length} </div>
                        <div className="column2"> {users.length - validatedUsers.length} </div>
                        <div className="column3">{validatedUsers.length}</div>
                    </div>

                </div>
            </div>
        </div>

    );

}
