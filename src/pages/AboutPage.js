import React from "react";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer'
import { useSelector } from "react-redux";


export default function AboutPage() {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <div>
           <Header />
            <div className="sidebar-content">                
                {userInfo ? (userInfo.admin ? null : <SideBar />) : null}
                <div className="container">
                    This is About Page
                 </div>
            </div>
            <Footer />
        </div>
    );
}

