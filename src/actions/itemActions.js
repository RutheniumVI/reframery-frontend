import Axios from 'axios';

import {
  ITEM_LIST_CATEGORY_REQUEST,
  ITEM_LIST_CATEGORY_SUCCESS,
  ITEM_LIST_CATEGORY_FAIL,
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_GET_REQUEST,
  ITEM_GET_SUCCESS,
  ITEM_GET_FAIL,
  ITEM_CREATE_REQUEST,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAIL,
  ITEM_UPDATE_REQUEST,
  ITEM_UPDATE_SUCCESS,
  ITEM_UPDATE_FAIL,
  ITEM_UPDATE_IMAGE_REQUEST,
  ITEM_UPDATE_IMAGE_SUCCESS,
  ITEM_UPDATE_IMAGE_FAIL,
  ITEM_DELETE_REQUEST,
  ITEM_DELETE_SUCCESS,
  ITEM_DELETE_FAIL,
  ITEM_LIST_USER_REQUEST,
  ITEM_LIST_USER_SUCCESS,
  ITEM_LIST_USER_FAIL,
  ITEM_LIST_SUBCATEGORY_REQUEST,
  ITEM_LIST_SUBCATEGORY_SUCCESS,
  ITEM_LIST_SUBCATEGORY_FAIL,

} from '../constants/itemConstants';

// create an new item and send it to backend
export const crateItem = (category, name, price, userEmail, image, stock, description, discount, subCategoryID) => async (dispatch) => {
  dispatch({ type: ITEM_CREATE_REQUEST, payload: { category, name, price, userEmail, image, stock, description, discount, subCategoryID } });
  try {
    const { data } = await Axios.post('/items/item', { category, name, price, userEmail, image, stock, description, discount, subCategoryID });
    dispatch({ type: ITEM_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ITEM_CREATE_FAIL, payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//update an item attributes 
export const updateItem = (ItemID, category, name, price, image, stock, description, discount, subCategoryID
) => async (dispatch) => {
  dispatch({ type: ITEM_UPDATE_REQUEST, payload: ItemID });
  try {
    const { data } = await Axios.put(`/items/item/${ItemID}`,
      {
        ItemID, category, name, price, image, stock, description, discount, subCategoryID
      }
    );
    dispatch({ type: ITEM_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ITEM_UPDATE_FAIL, payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


//update an item image
export const updateItemImage = (ItemID, imageBinary
) => async (dispatch) => {
  dispatch({ type: ITEM_UPDATE_IMAGE_REQUEST, payload: ItemID });
  try {
    const { data } = await Axios.put(`/items/item/${ItemID}`,
      {
        ItemID, imageBinary
      }
    );
    dispatch({ type: ITEM_UPDATE_IMAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ITEM_UPDATE_IMAGE_FAIL, payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

//delete an item
export const deleteItem = (itemID) => async (dispatch) => {
  dispatch({ type: ITEM_DELETE_REQUEST, payload: itemID });
  try {
    const { data } = await Axios.delete(`/items/item/${itemID}`);
    dispatch({ type: ITEM_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ITEM_DELETE_FAIL, payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// fetch item details from backend
export const geItem = (itemID) => async (dispatch) => {
  dispatch({ type: ITEM_GET_REQUEST, payload: itemID });
  try {
    const { data } = await Axios.get(`/items/item/${itemID}`);
    dispatch({ type: ITEM_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_GET_FAIL, payload: error.message });
  }
}

// fetch item list of all the three categories from backend
export const getNewestItems = (limit, starting) => async (dispatch) => {
  dispatch({ type: ITEM_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`/getNewestItems/:startingFrom-:limit`, { limit, starting });
    dispatch({ type: ITEM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_LIST_FAIL, payload: error.message });
  }
};

// fetch item list in different category from backend
export const getItemsOfCategory = (category, limit, startingFrom, reversed) => async (dispatch) => {
  dispatch({ type: ITEM_LIST_CATEGORY_REQUEST });
  try {
    const { data } = await Axios.get(`/items/getItemsOfCategory/${category}-/${limit}-/${startingFrom}-/${reversed}`, { category, limit, startingFrom, reversed });
    dispatch({ type: ITEM_LIST_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_LIST_CATEGORY_FAIL, payload: error.message });
  }
};

// fetch alist of itmes for a giving user from backend
export const getItemsOfUser = (userEmail, limit, startingFrom, reversed) => async (dispatch) => {
  dispatch({ type: ITEM_LIST_USER_REQUEST });
  try {
    const { data } = await Axios.get(`/items/getItemsOfUser/${userEmail}-${limit}-/${startingFrom}-/${reversed}`, { userEmail, limit, startingFrom, reversed });
    dispatch({ type: ITEM_LIST_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_LIST_USER_FAIL, payload: error.message });
  }
};

// fetch item list for a giving sub-category from backend
export const getItemsOfSubCategory = (subcategoryID, limit, startingFrom, reversed) => async (dispatch) => {
  dispatch({ type: ITEM_LIST_SUBCATEGORY_REQUEST });
  try {
    const { data } = await Axios.get(`/items/getItemsOfSubCategory/${subcategoryID}-/${limit}-/${startingFrom}-/${reversed}-`, { subcategoryID, limit, startingFrom, reversed });
    dispatch({ type: ITEM_LIST_SUBCATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_LIST_SUBCATEGORY_FAIL, payload: error.message });
  }
};

