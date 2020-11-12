import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <ul>

        <li> <Link to="/mywallet" className="link">My Wallet</Link></li>

        <li><Link to="./my-item" className="link"> My Items </Link></li>

        <li > <Link to="./user-profile" className="link"> My Profile</Link></li>

        <li><Link to="/myreframery/records" className="link"> My History </Link></li>
      </ul>
    </div>
  );
}
