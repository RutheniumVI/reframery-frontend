import React from "react";
import { useData } from "../data/useData";
import { Link } from "react-router-dom";

export default function AddItemPage() {
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
                , add your item here:
              </h1>
              <h2 className="profile-h2">Title</h2>
              <input type="text" className="profile-input" placeholder=" " />
              <h2 className="profile-h2">Category</h2>
              <select className="profile-input">
                <option></option>
                <option>Products</option>
                <option>Services</option>
                <option>Competences</option>
                <option>(your custom category)</option>
              </select>
              <h2 className="profile-h2">Address</h2>
              <input type="text" className="profile-input" placeholder=" " />
              <h2 className="profile-h2">Description</h2>
              <textarea type="text" className="profile-input" placeholder=" " />
              <h2 className="profile-h2">Price</h2>
              <input
                type="text"
                className="profile-input"
                placeholder=" "
              />{" "}
              <br />
              <Link to="/my-item">
                <button className="profile-button">Add</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}
