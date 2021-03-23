import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import { useNavigate, Link } from "react-router-dom";
import { createItem } from "../actions/itemActions";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer'

export default function CreateItemPage() {
    const navigate = useNavigate();
    const [itemname, setItemname] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [discount, setDiscount] = useState('');

    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const itemCreate = useSelector(state => state.itemCreate);
    const { item, error } = itemCreate;


    //console.log("User Info: " + userInfo.email);
    //console.log("Item name: " + itemname);
    //console.log("Community name: " + userInfo.communityName);

    const userEmail = userInfo.email;
    const communityName = userInfo.communityName;

    const imageURL = ""; // sm.ms 图床
    const subCategoryName = "food";



    const handleChange = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Are you sure to create this item for sale?");
        if (confirm) {
            dispatch(createItem(itemname, category, subCategoryName, imageURL, userEmail, price, stock, description, discount, communityName)
            );
        }

        //console.log("Error: " + error);

        console.log("Item: " + item);
        if (item) {
            navigate('/my-item');
            //window.alert("Create Item Failed");
            //window.location.reload();
        } else {
            window.alert("Create Item Failed: " + error);

        }

    };


    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                <div className="container create-item-form-container">
                    <div className="columns mt-5">

                        <div className="column is-half is-offset-one-quarter">
                            <h1 className="title is-1">Create Your Item</h1>
                            <div className="field">
                                <label className="label">Item Name</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder="e.g. Birthday Cake" value={itemname} required onChange={(e) => setItemname(e.target.value)} />
                                </div>
                                <p class="help">Should not exceed 15 characters</p>
                                {itemname.length <= 15 ? null :                                 
                                <div class="notification is-danger">
                                    Invalid Item Name
                                </div>}

                            </div>


                            <div className="field">
                                <label className="label">Unit Price</label>
                                <div className="field has-addons ">
                                    <div className="control">
                                        <input type="number" className="input" placeholder="e.g. 35" value={price} required onChange={(e) => setPrice(e.target.value)} />
                                    </div>

                                    <div class="control">
                                        <a class="button is-static">
                                            Dollars
                                        </a>
                                    </div>
                                </div>
                                {price >= 0 ? null :                                 
                                <div class="notification is-danger">
                                    Invalid Price
                                </div>}
                            </div>

                            <div className="field">
                                <label className="label">Stock</label>
                                <div className="field has-addons">
                                    <div className="control">
                                        <input type="number" className="input" placeholder="e.g. 15" value={stock} required onChange={(e) => setStock(e.target.value)} />
                                    </div>

                                    <div class="control">
                                        <a class="button is-static">
                                            Units
                                        </a>
                                    </div>
                                </div>
                                {stock >= 0 ? null :                                 
                                <div class="notification is-danger">
                                    Invalid Stock
                                </div>}
                            </div>

                            <div class="field">
                                <label class="label">Description</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="e.g. Perfect for celebrating memorable days" value={description} required onChange={(e) => setDescription(e.target.value)} ></textarea>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Select category</label>
                                <div class="control">
                                    <div class="select">
                                        <select value={category} required onChange={(e) => setCategory(e.target.value)}>
                                            <option value="-1">--</option>
                                            <option value="products">product</option>
                                            <option value="services">service</option>
                                            <option value="expertises">expertise</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label class="label">Discount</label>
                                <div class="control">
                                    <div class="select">
                                        <select value={discount} required onChange={(e) => setDiscount(e.target.value)}>
                                            <option value="-1">--</option>
                                            <option value="0">No discount available</option>
                                            <option value="1">Buy one get one free</option>
                                            <option value="2">Buy two get one free</option>
                                            <option value="3">Buy three get one free</option>
                                            <option value="4">Buy four get one free</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="file is-boxed is-success has-name mt-4 mb-4">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="resume" />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Image for Item
                                        </span>
                                    </span>
                                    <span className="file-name has-text-centered">
                                        No File Selected
                                    </span>
                                </label>
                            </div>

                            <div class="field is-grouped is-grouped-centered">
                                <button
                                    className="button is-primary"
                                    type="submit"
                                    onClick={handleChange}
                                >
                                    Submit
                            </button>
                                <Link to="/my-item" className="button is-light">Cancel</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );

}
