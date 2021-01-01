import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../actions/userActions'

export default function Header() {
  let navigate = useNavigate();
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  // console.log(userInfo);
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  }
  return (
    <header className="header">
      <div>
        <img
          className="logo"
          src="/logo_small.png"
          onClick={() => navigate(`/home`)}
          alt="logo"
          width="50"
        ></img>
      </div>
      <SearchBar />
      <div className="header-links">
        {/* if the user sign in, then show the user name, else show the link of sign in */}
        {
        userInfo ? (
          <div className="dropdown">
          <Link to="#">{userInfo.username} <i className="fa fa-caret-down"></i>
          </Link>
          <ul className= "dropdown-content">
            <Link to="/home" onClick={signoutHandler}>Sign out</Link>
          </ul>
          </div>
        ) :(
          <Link to="/signin">
          <span className="link">Sign In</span>
        </Link>
        )}
        <Link to="/cart">
          <span className="link">Cart</span>
        </Link>
      </div>
    </header>
  );
}
