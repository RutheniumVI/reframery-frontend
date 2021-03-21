import React, { useEffect } from "react";
import CreatedItem from "./CreatedItem";
import { useSelector, useDispatch } from 'react-redux';
import { getItemsOfUser } from "../actions/itemActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


export default function CreatedItemList({ mainCategory }) {
    //get items from getItemsOfUser
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const itemsOfUserGet = useSelector(state => state.itemsOfUserGet);
    const { items, loading, error } = itemsOfUserGet;

    //userInfo.communityName

    useEffect(() => {
        dispatch(getItemsOfUser(userInfo.email, 10, 1, true));
    }, [dispatch, userInfo.email]);

    //console.log("Data " + items);
    //const loweredCate = mainCategory.toLowerCase();
    //console.log("Items: " + items);
    //const filtereditems = items[loweredCate];




    return (

        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div className="products-list">
                            <ul className="products">
                                {items.map((item) => (
                                    <li key={item._id}>
                                        <CreatedItem key={item.id} item={item}></CreatedItem>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    )}
        </div>


    );
}
