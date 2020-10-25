import React, { Component } from "react";
import { HashRouter as useNavigate, Link } from "react-router-dom";

export default function EditProfilePage(){
    return(
        <div style={{textAlign: "center"}}> 
            <form className="block3">
                <label>
                    <h1>Edit your name:    <input type="text" name="name" placeholder="John Smith"/></h1> 
                </label>
            
                <label>
                    <h1>Edit your phone:    <input type="text" name="phone" placeholder="(365)-888-2410" /> </h1>
                </label>
                <label>
                    <h1>Edit your address:  <input type="text" name="address" placeholder="60 Longwood Rd S, Hamilton" /></h1>
                </label>
                <label>
                    <h1>Edit your Postal Code:  <input type="text" name="Postal Code" placeholder="L8S 1S1" /></h1>
                </label>
                <button style={{
                  alignSelf: 'center', width: '60px', height:"40px", margin: "50px"}}>Submit</button>
            </form>
        </div>
    )
}

