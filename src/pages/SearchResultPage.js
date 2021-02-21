import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import homeImage from "../img/home_img.jpg"
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer'
import { getItemsOfCategory, getNewestItems } from "actions/itemActions";
import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";
import { searchItems } from "actions/searchActions";
import Item from "components/Item";



export default function SearchResultpage() {
    const search = useLocation().search;
    const community = new URLSearchParams(search).get('community');
    const category = new URLSearchParams(search).get('category');
    const itemName = new URLSearchParams(search).get('item');
    const startingFrom = new URLSearchParams(search).get('start');
    const limit = new URLSearchParams(search).get('limit');
    const reversed = "reversed";
    const [pageNumber, setPageNumber] = useState(1);

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    const itemsSearch = useSelector((state) => state.itemsSearch);
    const { loading, error, items } = itemsSearch;


    const decreaseHandler = (e) => {
        setPageNumber(pageNumber - 1)
    }

    const increaseHandler = (e) => {
        setPageNumber(pageNumber + 1)
    }

    // send the request to the backend
    useEffect(() => {
        dispatch(searchItems({ category, itemName }, limit, startingFrom, reversed));
    }, [startingFrom]);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        items.length > 0 ?
                            <div className="home-container">
                                <div className="header">
                                    <Header community={community} cartNum={0} />
                                </div>
                                <div className="sidebar-content">
                                    {userInfo ? (userInfo.user.admin ? null : <SideBar />) : null}

                                    <section className="container">
                                        <div className="moreItems-category">
                                            Search Result:
                                        </div>
                                        <div className="list-products" >
                                            <div className="itemlist-container" >
                                                <div className="list-items">
                                                    {items.map((item) => (
                                                        <Item key={item.id} item={item} community={community}></Item>
                                                    ))}

                                                </div>
                                            </div>

                                        </div>
                                        <div className="page-number" >
                                            &lt; {pageNumber} &gt;
                                    </div>
                                        <div className="page-button" >
                                            <div className="button-container">
                                                <div className="button1">
                                                    {pageNumber > 1 ? <Link to={"/search?community=" + community + "&category=" + category + "&item=" + itemName + "&start=" + (pageNumber * limit - limit + 1) + "&limit=" + limit} className="link">
                                                        <button className="button is-primary" onClick={decreaseHandler}>
                                                            <span> Previous Page  </span>
                                                        </button>
                                                    </Link> : <div></div>}
                                                </div>
                                                <div className="button2">
                                                    {pageNumber > 0 && items.length > limit - 1 ? <Link to={"/search?community=" + community + "&category=" + category + "&item=" + itemName + "&start=" + (pageNumber * limit - limit + 1) + "&limit=" + limit} className="link">
                                                        <button className="button is-primary" onClick={increaseHandler}>
                                                            <span> Next Page  </span>
                                                        </button>
                                                    </Link> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <Footer />
                            </div>
                            : <div>Items Not Found</div>
                    )}
        </div>
    );
}
