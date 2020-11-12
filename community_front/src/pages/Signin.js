import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signin() {
  let navigate = useNavigate();
  return (
    <div className="form">
      <form className="signin">
        <ul className="input">
          <li> <h3 className="signin-text">Sign In</h3></li>
          <li><label >Email </label></li>
          <li>
            <input type="email" name="email" id="email" /></li>
          <li><label >Password </label></li>
          <li>
            <input type="password" name="password" id="password" /></li>
          <li className="checkbox"><input type="checkbox" />Sign in as an administrator</li>
          <li className="checkbox"><input id="checkid1" type="checkbox" /><label for="checkid1" >Keep me signed in</label></li>
          <li><input type="submit" className="submit" value="Sign in" onClick={() => navigate(`/`)}></input></li>
          <li className="message">Don't have account? <Link to="/register" className="linkto">&nbsp;Register</Link></li>
        </ul>
      </form>
    </div>
  );
}

