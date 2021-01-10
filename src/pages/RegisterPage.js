import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { createUser } from "../actions/userActions";
import WellcomeComponent from "../components/WellcomeComponent";

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [communityName, setCommunityName] = useState('Canada');
    const [confirmPassword, setConfirmPassword] = useState('');
    const redirect = '/signin';

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password are different')
        } else {
            const confirm = window.confirm("Are you sure to create the account?");
            if(confirm){
                dispatch(createUser(username, email, password, communityName));
                navigate(redirect);
            }else{
                window.location.reload();
            }            
        }
    };

    return (
        <div className="wellcome-container">
            <WellcomeComponent />
            <div className="form">
                <form className="Register" onSubmit={submitHandler}>
                    <div>
                        <h3>Create New Account</h3>
                    </div>
                    <div>
                        <label >User Name </label>
                        <input type="text" id="name" required onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Email Address </label>
                        <input type="email" id="email" required onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Password </label>
                        <input type="password" id="password" required onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Comfirm Password </label>
                        <input type="password" id="confirmPassword" required onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Community  </label>
                        <select value={communityName} className="select-box" onChange={e => setCommunityName(e.target.value)}>
                            <option key="Canada" value="Canada">Canada</option>
                            <option key="USA" value="USA">USA</option>
                            <option key="Brazil" value="Brazil">Brazil</option>
                        </select>
                    </div>


                    <div className="terms">By continuing, you agree to Reframery's <Link to="/term-and-condition">Term and Condition</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.</div>

                    <div className="button">
                        <input type="submit" className="submit"></input>
                    </div>
                    <div className="message">Already have account?
                    <Link to="/signin" className="linkto">&nbsp;Sign in</Link>
                    </div>


                </form>
            </div>
        </div>
    );
}