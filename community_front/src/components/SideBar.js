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
        <Link to="./user-profile">
          <li>My Profile</li>
        </Link>
        <li>My History</li>
      </ul>
    </div>
  );
}
