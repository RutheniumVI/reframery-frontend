import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreateNewAminAccount() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [communityID, setCommunityID] = useState('5fe76baab69d0843c44af87e');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password are different')
        } else {
            // TODO
        }
    };
    return (
        <div className="admin-table">
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
                        <select value={communityID} className="select-box" onChange={e => setCommunityID(e.target.value)}>
                            <option key="Canada" value="5fe76baab69d0843c44af87e">Canada</option>
                            <option key="USA" value="5fe76baab69d0843c44af87f">USA</option>
                            <option key="Brazil" value="5fe76baab69d0843c44af880">Brazil</option>
                        </select>
                    </div>
                    <div className="button">
                        <input type="submit" className="submit"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}