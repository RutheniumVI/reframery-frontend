import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/userActions";

export default function CreateAdminPage() {
    const dispatch = useDispatch();

    //input from user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [communityName, setCommunityName] = useState('Canada');
    const [confirmPassword, setConfirmPassword] = useState('');
    //default attribute for the new created admin 
    const username = "";
    const admin = true;

    //button handler for create a admin
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password are different')
        } else {
            dispatch(createUser(username, email, password, communityName, admin));
            window.location.reload();
            alert('A new admin has been created successfully!')
        }
    };

    return (
        <div className="admin-container" >
            <div className="admin-table">
                <div className="table">
                    <div className="form">
                        <form className="Register" onSubmit={submitHandler}>
                            <div>
                                <h3>Create New Administrator</h3>
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
                            <div className="div-button">
                                <input type="submit" className="submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
