import Axios from 'axios';

import {
    ITEM_SEARCH_FAIL,
    ITEM_SEARCH_REQUEST,
    ITEM_SEARCH_SUCCESS
} from '../constants/searchConstants';

// search a list of item by the filter 
export const searchItems = (filter, limit, startingFrom, reversed) => async (dispatch) => {
    dispatch({ type: ITEM_SEARCH_REQUEST });
    try {
        const { data } = await Axios.get(`/items/searchItems/${filter}-${limit}-/${startingFrom}-/${reversed}`, { filter, limit, startingFrom, reversed });
        dispatch({ type: ITEM_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ITEM_SEARCH_FAIL, payload: error.message });
    }
};