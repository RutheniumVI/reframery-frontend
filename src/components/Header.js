import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../actions/userActions'

export default function Header() {
  const navigate = useNavigate();
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    const r = window.confirm("Do you want to Sign Out?");
    if (r) {
      dispatch(signout());
      navigate('/home');
      window.location.reload();
    }
  }
  return (
    <header >
      <div className="header-container">
        <div className="nav-menu">
          <div className="nav-item">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Contact</div>
        </div>
        <SearchBar />
        <div className="header-links">
          {/* if the user sign in, then show the user name, else show the link of sign in */}
          {
            userInfo ? (
              <div className="dropdown">
                {
                  userInfo.user.admin ?
                    (
                      <Link to="/admin">{userInfo.user.username} <i className="fa fa-caret-down"></i></Link>
                    ) : (
                      <Link to="/home">{userInfo.user.username} <i className="fa fa-caret-down"></i></Link>)
                }
                <ul className="dropdown-content">
                  <Link className="link" to="/home" onClick={signoutHandler}>Sign out</Link>
                </ul>
              </div>
            ) : (
                <Link to="/signin">
                  <span className="link" onClick={signoutHandler}></span>
                </Link>
              )}
        </div>
      </div>
    </header>
  );
}
