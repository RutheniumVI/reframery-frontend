import { React, useEffect, useState } from "react";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { 
    getItem, updateItemName, updateItemPrice, updateItemStock, 
    updateItemDescription, updateItemCategory, updateItemDiscount,
    updateItemImage } from 'actions/itemActions';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';

export default function EditItemPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [itemname, setItemname] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [discount, setDiscount] = useState('');
    const [imageURL, setImageURL] = useState('');

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const itemGet = useSelector((state) => state.itemGet);
    const { loading, error, item } = itemGet;

    const itemUpdate = useSelector(state => state.itemUpdate);
    const { item: ifupdate } = itemUpdate;

    const subCategoryName = "food";


    useEffect(() => {
        dispatch(getItem(id));
        if (ifupdate) {
            //window.location.reload();?
        }

        //setItemname(item.name);
        //setPrice(item.price);
        //setStock(item.stock);
        //setDescription(item.description);
        //setCategory(item.category);
        //setDiscount(item.discount);
        //setImageURL(item.imageURL);
    }, [dispatch, id, ifupdate]);


    const update = (e, key, newValue) => {
        e.preventDefault();
        console.log("Switch Key:"  + key);
        switch(key) {
            case 0:
                dispatch(updateItemName(id, newValue));
                break;
            case 1:
                dispatch(updateItemPrice(id, newValue));
                break;
            case 2:
                dispatch(updateItemStock(id, newValue));
                break;
            case 3:
                dispatch(updateItemDescription(id, newValue));
                break;
            case 4:
                if (newValue < 0) {
                    window.alert("Invalid Category!");
                    break;
                }
                dispatch(updateItemCategory(id, newValue));
                break;
            case 5:
                dispatch(updateItemDiscount(id, newValue));
                break;
            case 6:
                dispatch(updateItemImage(id, newValue));
            default: 
                break;


        }
        
        console.log("New Attribute: " + newValue);

    };


    console.log("Updated Item: " + JSON.stringify(item));

    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                            <div className="container create-item-form-container">
                                <div className="columns mt-5">
                                    <div className="column is-half is-offset-one-quarter">
                                        <h1 className="title is-1">Edit Your Item</h1>
                                        <div className="field">
                                            <label className="label">Item Name</label>
                                            <div className="control">
                                                <input type="text" className="input" defaultValue={item.name} required onChange={(e) => setItemname(e.target.value)} />
                                            </div>

                                            <button onClick={(e) => update(e, 0, itemname)} className="button is-link is-outlined">Update</button>

                                            <p class="help">Should not exceed 15 characters</p>
                                            {itemname.length > 15 ?
                                                <div class="notification is-danger">
                                                    Invalid Item Name
                                                </div> : null}
                                        </div>

                                        <div className="field">
                                            <label className="label">Unit Price</label>
                                            <div className="field has-addons ">
                                                <div className="control">
                                                    <input type="number" className="input" defaultValue={item.price} required onChange={(e) => setPrice(e.target.value)} />
                                                </div>

                                                <div class="control">
                                                    <a class="button is-static">
                                                        Dollars
                                                    </a>
                                                </div>
                                                <button onClick={(e) => update(e, 1, price)} className="button is-link is-outlined">Update</button>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Stock</label>
                                            <div className="field has-addons">
                                                <div className="control">
                                                    <input type="number" className="input" defaultValue={item.stock} required onChange={(e) => setStock(e.target.value)} />
                                                </div>

                                                <div class="control">
                                                    <a class="button is-static">
                                                        Units
                                                    </a>
                                                </div>
                                                <button onClick={(e) => update(e, 2, stock)} className="button is-link is-outlined">Update</button>
                                            </div>
                                        </div>

                                        <div class="field">
                                            <label class="label">Description</label>
                                            <div class="control">
                                                <textarea class="textarea" defaultValue={item.description} required onChange={(e) => setDescription(e.target.value)}></textarea>
                                            </div>
                                            <button onClick={(e) => update(e, 3, description)} className="button is-link is-outlined">Update</button>
                                        </div>

                                        <div class="field">
                                            <label class="label">Select category</label>
                                            <div class="control">
                                                <div class="select">
                                                    <select defaultValue={item.category} required onChange={(e) => setCategory(e.target.value)}>
                                                        <option value="-1">--</option>
                                                        <option value="products">product</option>
                                                        <option value="services">service</option>
                                                        <option value="expertises">expertise</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button onClick={(e) => update(e, 4, category)} className="button is-link is-outlined">Update</button>
                                        </div>

                                        <div>
                                            <label class="label">Discount</label>
                                            <div class="control">
                                                <div class="select">
                                                    <select defaultValue={item.discount} required onChange={(e) => setDiscount(e.target.value)} >
                                                        <option value="-1">--</option>
                                                        <option value="0">No discount available</option>
                                                        <option value="1">Buy one get one free</option>
                                                        <option value="2">Buy two get one free</option>
                                                        <option value="3">Buy three get one free</option>
                                                        <option value="4">Buy four get one free</option>

                                                    </select>
                                                </div>
                                                <button onClick={(e) => update(e, 5, discount)} className="button is-link is-outlined">Update</button>
                                            </div>
                                        </div>


                                        <div className="field">
                                            <label className="label">Item Image</label>
                                            <div className="control">

                                                <img src={item.imageURL} alt="Image"></img>
                                                <input type="text" className="input" defaultValue={item.imageURL} required onChange={(e) => setImageURL(e.target.value)} />
                                                <button onClick={(e) => update(e, 6, imageURL)} className="button is-link is-outlined">Update</button>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
            </div>
            <Footer />
        </div>
    );
}
