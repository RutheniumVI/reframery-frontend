import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { searchItems } from "../actions/searchActions";

export default function SearchBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { community } = props;
  const limit = 20;
  const page = 0;
  const [category, setCategory] = useState('products');
  const [subCategory, setSubCategory] = useState('');
  const [searchKey, setSearchKey] = useState('');

  //handler for search button
  const searchHandler = (e) => {
    e.preventDefault();
    if (searchKey === '') {
      window.location.reload();
    } else {
      dispatch(searchItems(searchKey, category, subCategory, limit, page, community));
      navigate(`/search?community=${community}&category=${category}&subCategory=${subCategory}&item=${searchKey}&page=${page}&limit=${limit}`);
    }
  };
  //handler for setting the value of category and subcategory
  const setCategoryHandler = (e) => {
    e.preventDefault();
    const categoryValue = e.target.value;
    if (categoryValue === 'food' || categoryValue === 'clothing') {
      setCategory('products')
      setSubCategory(categoryValue)
    } else if (categoryValue === 'landscaping' || categoryValue === 'homemaintenance') {
      setCategory('services')
      setSubCategory(categoryValue)
    } else if (categoryValue === 'consulting' || categoryValue === 'training') {
      setCategory('expertises')
      setSubCategory(categoryValue)
    } else {
      setCategory(categoryValue)
    }
  };

  return (
    <div className="searchbar">
      <div className="search-component">
        <div className="select-category">
          <select value={category} onChange={setCategoryHandler}>
            {/* <option key="All" value="All">All</option> */}
            <option key="Product" value="products">Product</option>
            <option key="Food" value="food">  &nbsp; &nbsp; Food</option>
            <option key="Clothing" value="clothing">  &nbsp; &nbsp; Clothing</option>
            <option key="Service" value="services">Service</option>
            <option key="Landscaping" value="landscaping">  &nbsp; &nbsp; Landscaping</option>
            <option key="Homemaintenance" value="homemaintenance">  &nbsp; &nbsp; Homemaintenance</option>
            <option key="Expertise" value="expertises">Expertise</option>
            <option key="Consulting" value="consulting">  &nbsp; &nbsp; Consulting</option>
            <option key="Traing" value="training">  &nbsp; &nbsp; Traing</option>
          </select>
        </div>
        <input type="text" className="search-key"
          placeholder="Search items" value={searchKey}
          onChange={e => setSearchKey(e.target.value)}>
        </input>
        <button className="icon-search" onClick={searchHandler}><i class="fa fa-search" ></i></button>
      </div>
    </div>
  );
}
