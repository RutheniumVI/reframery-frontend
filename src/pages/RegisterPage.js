import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { createUser } from "../actions/userActions";
import WellcomeComponent from "../components/WellcomeComponent";
import Footer from 'components/Footer'

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [communityName, setCommunityName] = useState('Canada');
    const [confirmPassword, setConfirmPassword] = useState('');
    const redirect = '/signin';

    // check if the password contains at least one upper case letter and one lowercase letter and one number
    const isValidPassord = (str) => {
        const reContainUppercase = new RegExp('^.*[A-Z].*$');
        const reContainLowercase = new RegExp('^.*[a-z].*$');
        const reContainNumer = new RegExp('^.*[0-9].*$');
        const reLength = new RegExp('^.{6,}$');
        return reContainUppercase.test(str) && reContainLowercase.test(str) && reContainNumer.test(str) && reLength.test(str)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!isValidPassord(password)) {
            alert('The password should contain at least one uppercase, one lowercase and a number')
        } 
        else if(username ==="" || email === "" || password === "" || confirmPassword === ""){
            alert('Please fill the form')
        } 
        else if(password !== confirmPassword){
            alert('Password and confirm password are different')
        }        
        else {
            const confirm = window.confirm("Are you sure to create the account?");
            if (confirm) {
                dispatch(createUser(username, email, password, communityName));
                navigate(redirect);
            } else {
                window.location.reload();
            }
        }
    };

    return (
        <div>
            <div className="wellcome-container">
                <WellcomeComponent />
                <div className="form">
                    <form className="Register">
                        <div>
                            <h3>Create New Account</h3>
                        </div>
                        <div>
                            <label >User Name </label>
                            <input type="text" id="username" value={username} required onChange={(e) => setUsername(e.target.value)}></input>
                        </div>
                        <div>
                            <label >Email Address </label>
                            <input type="email" id="email" value={email} required onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <label >Password </label>
                            <input type="password" id="password" value={password} required onChange={e => setPassword(e.target.value)}></input>
                            <div className="password-warning"> <i className="far fa-bell"></i> At least 6 characters and contains at least one uppercase, one lowercase and a number</div>
                        </div>
                        <div>
                            <label >Comfirm Password </label>
                            <input type="password" id="confirmPassword" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}></input>
                        </div>
                        <div>
                            <label >Community  </label>
                            <select value={communityName} className="select-box" onChange={e => setCommunityName(e.target.value)}>
                                <option key="Canada" value="Canada">Canada</option>
                                <option key="USA" value="USA">USA</option>
                                <option key="Brazil" value="Brazil">Brazil</option>
                                <option key="Mexico" value="Mexico">Mexico</option>
                            </select>
                        </div>

                        <div className="terms">By continuing, you agree to Reframery's <Link to="/term-and-condition" className="link">Term and Condition</Link> and <Link to="/privacy-policy" className="link">Privacy Policy</Link>.</div>

                        <div className="submit-button">
                            <button className="button is-primary is-rounded" onClick={submitHandler}>
                                <span className="icon">
                                    <i className="fas fa-sign-in-alt"></i>
                                </span>
                                <span> Submit  </span>
                            </button>
                        </div>
                        <div className="message">Already have account?
                    <Link to="/signin" className="link">&nbsp;Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}