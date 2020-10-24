import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // product: this.findProduct.bind(this)
      product: data.products.find((x) => x._id === this.props.match.params.id),
    };
  }

  // findProduct= () => {
  //     data.products.find(x => x._id === this.props.match.params.id)
  // }

  handleAddToCart = () => {
    // props.history.push("/cart")
    this.props.history.push("/cart");
  };
  handleBuy = () => {
    this.props.history.push("/payment");
    // history.push("/payment")
  };

  //     const product = data.products.find(x => x._id === props.match.params.id)

  render() {
    return (
      <div className="product-page">
        <div className="details">
          <div className="details-image">
            <img src={this.state.product.image} alt="product"></img>
          </div>

          <div className="details-information">
            <div>
              <ul>
                <li>
                  {" "}
                  <h4>{this.state.product.name}</h4>{" "}
                </li>
                <li> Rating: {this.state.product.rating} Stars</li>
                <li> Price: ${this.state.product.price}</li>
                <li>
                  {" "}
                  Address: <span>{this.state.product.address}</span>
                </li>
                <li className="details-description">
                  Description:{" "}
                  <p className="details-description-content">
                    {this.state.product.description}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="details-action">
            <ul>
              <li className="price">RCC$: {this.state.product.price}</li>
              {/* if the stock is greater than 0 , show instock, else,  */}
              <li>
                Status:{" "}
                {this.state.product.quantity > 0 ? "In Stock" : "Out of Stock"}
              </li>
              <li>
                Quantity:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </li>

              <li>
                <button
                  className="button-addToCart"
                  onClick={this.handleAddToCart.bind(this)}
                >
                  Add to Cart
                </button>
              </li>
              <li>
                <button
                  className="button-buy"
                  onClick={this.handleBuy.bind(this)}
                >
                  Buy Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductPage;
