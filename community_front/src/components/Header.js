import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="webname">
        <Link to="/">
          <span className="link">Reframery Community Currency</span>
        </Link>
      </div>
      <div className="header-links">
        <Link to="/signin">
          <span className="link">Sign In</span>
        </Link>
        <Link to="/cart">
          <span className="link">Cart</span>
        </Link>
      </div>
    </header>
  );
}
