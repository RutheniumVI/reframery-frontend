import Axios from 'axios';

import {
    ITEM_SEARCH_FAIL,
    ITEM_SEARCH_REQUEST,
    ITEM_SEARCH_SUCCESS
} from '../constants/searchConstants';

Axios.defaults.auth = {
    username: 'access_key_admin',
    password: 'secret_key_hush',
  };
// search a list of item by the filter 
export const searchItems = (searchKeyword, category, subCategoryName, limit, page, community) => async (dispatch) => {
    dispatch({ type: ITEM_SEARCH_REQUEST });
    try {
        const { data } = await Axios.post(`/search/searchItems/${limit}-${page}-${community}`, {searchKeyword, category, subCategoryName});
        dispatch({ type: ITEM_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ITEM_SEARCH_FAIL, payload: error.message });
    }
};