import React from "react";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer'


export default function MyhistoryPage() {
    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                <div className="history-container">
                    TODO
                 </div>
            </div>
            <Footer />
        </div>
    );
}

