import React from "react";
import { useData } from "../data/useData";
import { Link } from "react-router-dom";

export default function EditItemPage() {
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
                , edit your item here:
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
              <select className="profile-input">
                <option></option>
                <option>product</option>
                <option>service</option>
                <option>competence</option>
                <option>(your custom category)</option>
              </select>
              <h2 className="profile-h2">Address</h2>
              <input
                type="text"
                className="profile-input"
                placeholder={input_product.address}
              />
              <h2 className="profile-h2">Description</h2>
              <textarea
                type="text"
                className="profile-input"
                placeholder={input_product.description}
              />
              <h2 className="profile-h2">Price</h2>
              <input
                type="text"
                className="profile-input"
                placeholder={input_product.price}
              />{" "}
              <br />
              <Link to="/my-item">
                <button className="profile-button">Edit</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}
