import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  let navigate = useNavigate();
  return (
    <header className="header">
      <div>
        <img
          className="logo"
          src="/logo_small.png"
          onClick={() => navigate(`/`)}
          alt="logo"
          width="50"
        ></img>
      </div>
      <SearchBar />
      <div className="header-links">
        <Link to="/signin">
          <span className="link">Sign In</span>
        </Link>
        <Link to="/register">
          <span className="link">Register</span>
        </Link>
        <Link to="/cart">
          <span className="link">Cart</span>
        </Link>
      </div>
    </header>
  );
}
