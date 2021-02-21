import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { searchItems } from "../actions/searchActions";

export default function SearchBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {community} = props;
  const limit = 20;
  const page = 0;
  const reversed = true;
  const [category, setCategory] = useState('All');
  const [subCategoryName, setSubCategory] = useState('');
  const [searchKey, setSearchKey] = useState('');  
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;


  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchItems(searchKey, category,subCategoryName, limit, page, community));
    navigate(`/search?community=${community}&category=${category}&item=${searchKey}&start=${page}&limit=${limit}`);
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
