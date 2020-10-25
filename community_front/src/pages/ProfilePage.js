import React, { Component } from "react";
import { HashRouter as useNavigate, Link } from "react-router-dom";

function ProfilePage(){
  return(
    <div class="f-container">
      <div >
        <table className="block1">
          <row> 
            <div style = {{margin: "20px", textAlign: "center"}}>
              <img style = {{width: "160px", height: "160px", borderRadius:"80px"}}
              src= "images/blank.png" alt="User"
              />
                <Link to = "/edit-profile"><button style={{
                  alignSelf: 'center', width: '60px', height:"40px"}}>Edit</button></Link>
            </div>
          </row>
        </table>
      </div>
      <div>
        <ul className="block2">
          <li>
            <p class="profile-text">Username: John Smith</p>
            <hr/>
          </li>
          <li>
            <p class="profile-text">Phone: (365)-888-2410</p>
            <hr/>
          </li>
          <li>
            <p class="profile-text">Address: 60 Longwood Rd S, Hamilton</p>
            <hr/>
          </li>
          <li>
            <p class="profile-text">Postal Code: Postal Code</p>
            <hr/>
          </li>
          <li>
            <p class="profile-text">Today is the 50th day in Reframecy Currency Currency!</p>
            <hr/>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default ProfilePage;
