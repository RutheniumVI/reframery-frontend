import React from 'react';
import Header from 'components/Header';
import SideBar from "components/AdminSidebar";
import Footer from 'components/Footer'

export default function OverviewPage() {
    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                <div className="container admin-container">
                    <div className="admin-table">
                        <div className="table">
                            <div className="title-table">
                                <div className="column1"> All Users</div>
                                <div className="column2"> Awaiting Validation</div>
                                <div className="column3"> Validated Users</div>
                            </div>

                            <div className="row">
                                <div className="column1"> TODO </div>
                                <div className="column2"> TODO </div>
                                <div className="column3">TODO</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );

}
