import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../data/useData";

export default function MyItemPage() {
  const { data } = useData();
  return (
    <body className="user-body">
      <div className="user-container">
        <div className="box">
          {data.input_products.map((input_product) => (
            <div className="profile-show" key={input_product.id}>
              <h1 className="profile-h1">
                Welcome{" "}
                <img
                  className="profile-image"
                  src={input_product.image}
                  alt="profile"
                />
                , view your item here:
              </h1>
              <h2 className="profile-h2">Title</h2>
              <select className="profile-input">
                <option></option>
                <option>Banana</option>
                <option>Take care of the old</option>
                <option>Tutoring a kid</option>
                <option>...</option>
              </select>
              <h2 className="profile-h2">Category</h2>
              <input
                type="text"
                className="profile-input"
                value={input_product.category}
              />{" "}
              <br />
              <Link to="/add-category">
                <button
                  className="profile-button"
                  style={{ marginTop: "40px" }}
                >
                  Add a category
                </button>{" "}
                <br />
              </Link>
              <Link to="/edit-category">
                <button className="profile-button">Edit a category</button>{" "}
                <br />
              </Link>
              <Link to="/delete-category">
                <button className="profile-button">Delete a category</button>{" "}
                <br />
              </Link>
              <Link to="/add-new-item">
                <button className="profile-button">Add an item</button> <br />
              </Link>
              <Link to="/edit-item">
                <button className="profile-button">Edit an item</button> <br />
              </Link>
              <Link to="/delete-item">
                <button className="profile-button">Delete an item</button>{" "}
                <br />
              </Link>
              <Link to="/">
                <button className="profile-button">Back to Main Page</button>{" "}
                <br />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}
