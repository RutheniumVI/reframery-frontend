import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function Signin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    // TODO
  };

  return (
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
          <div className="checkbox"><input type="checkbox" />Sign in as an administrator</div>
           <div><input type="submit" className="submit"></input></div>
          <div className="message">Don't have account? <Link to="/register" className="linkto">&nbsp;Register</Link></div>
      </form>
    </div>
  );
}

