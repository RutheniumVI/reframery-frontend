import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>My Wallet</li>
        <Link to="./my-item">
          <li>My Items</li>
        </Link>
          <li>My Profile</li>
          <ul>
          <li > <Link to="./user-profile"> User</Link></li>
          <li > <Link to="/myadmin/overview"> Admin</Link></li>
        </ul>
        <li>My History</li>
      </ul>
    </div>
  );
}
