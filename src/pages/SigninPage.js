import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import WellcomeComponent from "../components/WellcomeComponent";


export default function Signin(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const redirect = '/home';

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
      if(userInfo.user.admin || userInfo.user.manager){
        navigate('/admin');
      }else{
        navigate(`/${userInfo.user.email}`);
      }
    }
  }, [navigate, userInfo]);

  return (
    <div className="wellcome-container">
      <WellcomeComponent />
      <div className="form" >
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
          <div className="admin-checkbox">
            <input className="box" type="checkbox" />Sign in as an administrator
          </div>
          <div className="submit-button">
            <input type="submit" className="submit"></input>
          </div>
          <div className="message">
            Don't have account? <Link to="/register" className="linkto">&nbsp;Register</Link>
          </div>

        </form>
      </div>
    </div>
  );
}

