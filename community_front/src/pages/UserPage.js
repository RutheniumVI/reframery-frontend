import React from "react";
import { useData } from "../data/useData";
import { Link } from "react-router-dom";

export default function UserPage() {
  const { data } = useData();
  return (
    <body className="user-body">
      <div className="user-container">
        <div className="box">
          {data.users.map((user) => (
            <div className="profile-show" key={user.id}>
              <h1 className="profile-h1">
                <img className="profile-image" src={user.image} alt="profile" />{" "}
                's Personal Profile
              </h1>
              <h2 className="profile-h2">Full Name</h2>
              <input
                type="text"
                className="profile-input"
                placeholder={user.name}
              />
              <h2 className="profile-h2">Phone</h2>
              <input
                type="text"
                className="profile-input"
                placeholder={user.phone}
              />
              <h2 className="profile-h2">Address</h2>
              <input
                type="text"
                className="profile-input"
                placeholder={user.address}
              />
              <h2 className="profile-h2">Postal Code</h2>
              <input
                type="text"
                className="profile-input"
                placeholder={user.postcode}
              />
              <h2 className="profile-h2">Email</h2>
              <input
                type="text"
                className="profile-input"
                placeholder={user.email}
              />
              <h2 className="profile-h2">Password</h2>
              <input
                type="password"
                className="profile-input"
                placeholder={user.password}
              />{" "}
              <br />
              <Link to="/user-profile">
                <button className="profile-button">Update</button>
              </Link>
              <Link to="/">
                <button
                  className="profile-button"
                  style={{ marginLeft: "50px" }}
                >
                  Back to Main Page
                </button>{" "}
                <br />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}
