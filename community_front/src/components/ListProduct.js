import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useData } from "../data/useData";

export default function ListProduct({ mainCategory }) {
  let navigate = useNavigate();
  const { data } = useData();
  const loweredCate = mainCategory.toLowerCase();
  return (
    <div>
      <p className="home-category">
        {loweredCate.charAt(0).toUpperCase() + loweredCate.slice(1)}
      </p>
      <ul className="products">
        {data[loweredCate].map((product) => (
          <li key={product._id}>
            <div className="product">
              <img
                className="product-image"
                src={product.image}
                onClick={() => navigate(`/product/${product._id}`)}
                alt="product"
              ></img>

              <div className="product-name">
                <Link to={"/product/" + product._id}>
                  <span className="link">{product.name}</span>
                </Link>
              </div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating} Stars</div>
              <div className="product-city">{product.city} </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
