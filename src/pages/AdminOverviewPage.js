import React from 'react';
import { useData } from "../data/useData";
import AdminMenu from '../components/AdminSidebar';
import Header from 'components/Header';
import SideBar from "components/AdminSidebar";
import Footer from 'components/Footer'

export default function OverviewPage() {
    const { data } = useData();
    const users = data["users"].filter(x => x.admin === false && x.superAdmin === false)
    const validatedUsers = data["users"].filter(x => x.validateStatus === true)
    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                <div className="admin-container">
                    <div className="admin-table">
                        <div className="table">
                            <div className="title-table">
                                <div className="column1"> All Users</div>
                                <div className="column2"> Awaiting Validation</div>
                                <div className="column3"> Validated Users</div>
                            </div>

                            <div className="row">
                                <div className="column1"> {users.length} </div>
                                <div className="column2"> 1 </div>
                                <div className="column3">1</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );

}
