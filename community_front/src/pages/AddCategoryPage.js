import React from "react";
import { useData } from "../data/useData";
import { Link } from "react-router-dom";

export default function AddCategoryPage() {
  const { data } = useData();
  return (
    <body className="user-body">
      <div className="user-container">
        <div className="box">
          {data.users.map((user) => (
            <div className="profile-show" key={user.id}>
              <h1 className="profile-h1">
                Welcome{" "}
                <img className="profile-image" src={user.image} alt="profile" />
                , custom your own category here:
              </h1>
              <h2 className="profile-h2" style={{ marginTop: "50px" }}>
                Category
              </h2>
              <input type="text" className="profile-input" placeholder=" " />
              <br />
              <Link to="/my-item">
                <button
                  style={{ marginTop: "50px" }}
                  className="profile-button"
                >
                  Add
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}
