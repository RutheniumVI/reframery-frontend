import React from "react";
import { Link } from "react-router-dom";
export default function Register() {

    return (
        <div className="form">
            <form className="Register">
                <ul>
                    <li><h3>Register</h3></li>
                    <li><label >Name: </label></li>
                    <li><input type="name" name="name" id="name"></input></li>
                    <li><label >Email Address: </label></li>
                    <li><input type="email" name="email" id="email" ></input></li>
                    <li><label >Password </label></li>
                    <li><input type="password" id="password" name="password"></input></li>
                    <li><label >Re-type password </label></li>
                    <li><input type="password" id="repassword" name="password"></input></li>
                    <li><input type="submit" className="submit"></input></li>
                    <li className="message">Already have account? <Link to="/signin" className="linkto">&nbsp;Signin</Link></li>
                </ul>
            </form>
        </div>


    );
}