import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">

        <div> <Link to="/mywallet" className="link">My Wallet</Link></div>

        <div><Link to="./my-item" className="link"> My Items </Link></div>

        <div > <Link to="./user-profile" className="link"> My Profile</Link></div>

        <div><Link to="/myreframery/records" className="link"> My History </Link></div>

    </div>
  );
}
