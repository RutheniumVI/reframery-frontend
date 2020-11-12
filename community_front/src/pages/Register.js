import React from "react";
import { Link } from "react-router-dom";
export default function Register() {

    return (
        <div className="register-container">
            <div className="form">
                <form className="Register">
                    <ul>
                        <li><h3>Register</h3></li>
                        <li><label >Email Address </label></li>
                        <li><input type="email" name="email" id="email" ></input></li>
                        <li><label >User Name </label></li>
                        <li><input type="name" name="name" id="name"></input></li>
                        <li><label >Password </label></li>
                        <li><input type="password" id="password" name="password"></input></li>
                        <li><label >Comfirm Password </label></li>
                        <li><input type="password" id="repassword" name="password"></input></li>
                        <li><label >Community  </label></li>
                        <li ><select className="select-box">
                            <option>Canada</option>
                            <option>USA</option>
                            <option>Brazil</option>
                        </select></li>
                        <li className="checkbox"><input type="checkbox" />Register as an administrator</li>

                        <li><input type="submit" className="submit"></input></li>
                        <li className="message">Already have account? <Link to="/signin" className="linkto">&nbsp;Signin</Link></li>
                    </ul>
                </form>

            </div>
            <div className="register-description">
                <p>Your request for registration will be submittd to an admin. Once approved, you will receive an inital RCC $ 25 </p>
            </div>
        </div>


    );
}