import React from "react";
export default function CreateNewAminAccount() {
    return (
        <div className="register-container">
            <div className="form">
                <form className="Register">
                    <ul>
                        <li><h3>Create A New Admin</h3></li>
                        <li><label >Email Address </label></li>
                        <li><input type="email" name="email" id="email" ></input></li>
                        <li><label >User Name </label></li>
                        <li><input type="name" name="name" id="name"></input></li>
                        <li><label >Password </label></li>
                        <li><input type="password" id="password" name="password"></input></li>
                        <li><label >Comfirm Password </label></li>
                        <li><input type="password" id="repassword" name="password"></input></li>
                        <li className="checkbox"><input type="checkbox" />Super Administrator</li>
                        <li><input type="submit" className="submit"></input></li>
                        
                        
                    </ul>
                </form>

            </div>
            
        </div>


    );
}