import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchItems } from "../actions/searchActions";

export default function SearchBar() {
  const [category, setCategory] = useState('All');
  const [searchKey, setSearchKey] = useState('');

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchItems({ category, searchKey }, 20, 0, true));
  };

  return (
    <div className="searchbar">
      <div className="search-component">
        <div className="select-category">
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option key="All" value="All">All</option>
            <option key="Product" value="Product">Product</option>
            <option key="Service" value="Service">Service</option>
            <option key="Expertise" value="Expertise">Expertise</option>
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
