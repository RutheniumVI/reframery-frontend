import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signin } from "../actions/userActions";


export default function Signin(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = '/home';

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo, loading, error } = userSignin;


  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
    // TODO
  };

  useEffect(() => {
    // if the user sign in sucessfully, go to the redirect link
    if (userInfo) {
      // props.history.push(redirect);
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="form" >
      <div>
        <Link to="/home"><span>back to home</span></Link>
      </div>
      <form className="signin" onSubmit={submitHandler}>
          <div> 
            <h3 className="signin-text">Sign In</h3>
          </div>
          <div>
            <label >Email </label>
            <input type="email" id="email" required onChange={e => setEmail(e.target.value)} />
          </div>  
          <div>
            <label >Password </label>
            <input type="password" id="password" required onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="checkbox"><input type="checkbox" />Sign in as an administrator</div>
           <div><input type="submit" className="submit"></input></div>
          <div className="message">Don't have account? <Link to="/register" className="linkto">&nbsp;Register</Link></div>
      </form>
    </div>
  );
}

