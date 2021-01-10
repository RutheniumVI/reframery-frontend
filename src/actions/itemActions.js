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

// create an new item 
export const crateItem = (category, name, price, userEmail, image, stock, description, discount, subCategoryID) => async (dispatch) => {
  dispatch({type: ITEM_CREATE_REQUEST, payload: {category, name, price, userEmail, image, stock, description, discount, subCategoryID}});
  try {
      const { data } = await Axios.post(`/api/items/create`, {category, name, price, userEmail, image, stock, description, discount, subCategoryID});
    dispatch({ type: ITEM_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_CREATE_FAIL, payload:
      error.response && error.response.data.message
          ? error.response.data.message
          : error.message, });
  }
};

//update an item attributes
export const updateItem = (ItemID, category, name, price, image, stock, description, discount, subCategoryID
) => async (dispatch) => {
  dispatch({ type: ITEM_UPDATE_REQUEST, payload: ItemID });
  try {
      const { data } = await Axios.put(`/api/items/${ItemID}`,
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
export const updateItemImage = (ItemID,imageBinary
  ) => async (dispatch) => {
    dispatch({ type: ITEM_UPDATE_IMAGE_REQUEST, payload: ItemID });
    try {
        const { data } = await Axios.put(`/api/items/${ItemID}`,
            {
              ItemID,imageBinary
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
        const { data } = await Axios.delete(`/api/items/${itemID}`);
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

  // fetch item details 
  export const geItem = (itemID) => async(dispatch) => {
    dispatch({type: ITEM_GET_REQUEST, payload: itemID});
    try{
      const {data} = await Axios.get(`/api/items/${itemID}`);
      dispatch({type: ITEM_GET_SUCCESS, payload: data});
    }catch(error){
      dispatch({type:ITEM_GET_FAIL, payload: error.message});
    }
  }

// fetch item list of all the three categories 
export const getNewestItems = (limit, starting) => async (dispatch) => {
  dispatch({type: ITEM_LIST_REQUEST});
  try {
      const { data } = await Axios.get(`/api/items`, {limit, starting});
    dispatch({ type: ITEM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_LIST_FAIL, payload: error.message });
  }
};

// fetch item list in different category 
export const getItemsOfCategory = (category, limit, starting, reversed) => async (dispatch) => {
    dispatch({type: ITEM_LIST_CATEGORY_REQUEST});
    try {
        const { data } = await Axios.get(`/api/items/${category}`, {category, limit, starting, reversed});
      dispatch({ type: ITEM_LIST_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ITEM_LIST_CATEGORY_FAIL, payload: error.message });
    }
  };

  // fetch item list for a giving user
export const getItemsOfUser = (userEmail, limit, starting, reversed) => async (dispatch) => {
  dispatch({type: ITEM_LIST_USER_REQUEST});
  try {
      const { data } = await Axios.get(`/api/items/${userEmail}`, {userEmail, limit, starting, reversed});
    dispatch({ type: ITEM_LIST_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ITEM_LIST_USER_FAIL, payload: error.message });
  }
};

  // fetch item list for a giving sub-category
  export const getItemsOfSubCategory = (subcategoryID, limit, starting, reversed) => async (dispatch) => {
    dispatch({type: ITEM_LIST_SUBCATEGORY_REQUEST});
    try {
        const { data } = await Axios.get(`/api/items/${subcategoryID}`, {subcategoryID, limit, starting, reversed});
      dispatch({ type: ITEM_LIST_SUBCATEGORY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ITEM_LIST_SUBCATEGORY_FAIL, payload: error.message });
    }
  };

