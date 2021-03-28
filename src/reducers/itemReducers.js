const {
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

} = require('../constants/itemConstants');

export const itemCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ITEM_CREATE_REQUEST:
            return { loading: true, error: "requesting"};
        case ITEM_CREATE_SUCCESS:
            return { loading: false, item: action.payload, error: "sucess" };
        case ITEM_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const itemUpdateReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ITEM_UPDATE_REQUEST:
            return { loading: true };
        case ITEM_UPDATE_SUCCESS:
            return { loading: false, item: action.payload };
        case ITEM_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const itemImageUpdateReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ITEM_UPDATE_IMAGE_REQUEST:
            return { loading: true };
        case ITEM_UPDATE_IMAGE_SUCCESS:
            return { loading: false, item: action.payload };
        case ITEM_UPDATE_IMAGE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const itemDeleteReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ITEM_DELETE_REQUEST:
            return { loading: true };
        case ITEM_DELETE_SUCCESS:
            return { loading: false, item: action.payload };
        case ITEM_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


export const itemGetReducer = (state = { loading: true, item: {} }, action) => {
    switch (action.type) {
        case ITEM_GET_REQUEST:
            return { loading: true };
        case ITEM_GET_SUCCESS:
            return {
                loading: false,
                item: action.payload
            };
        case ITEM_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const newestItemsGetReducer = (
    state = { loading: true, items: [] },
    action
) => {
    switch (action.type) {
        case ITEM_LIST_REQUEST:
            return { loading: true };
        case ITEM_LIST_SUCCESS:
            return {
                loading: false,
                items: action.payload
            };
        case ITEM_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const itemsOfCategoryGetReducer = (
    state = { loading: true, items: [] },
    action
) => {
    switch (action.type) {
        case ITEM_LIST_CATEGORY_REQUEST:
            return { loading: true };
        case ITEM_LIST_CATEGORY_SUCCESS:
            return {
                loading: false,
                items: action.payload
            };
        case ITEM_LIST_CATEGORY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const itemsOfUserGetReducer = (
    state = { loading: true, items: [] },
    action
) => {
    switch (action.type) {
        case ITEM_LIST_USER_REQUEST:
            return { loading: true };
        case ITEM_LIST_USER_SUCCESS:
            return {
                loading: false,
                items: action.payload
            };
        case ITEM_LIST_USER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const itemsOfSubcategoryGetReducer = (
    state = { loading: true, items: [] },
    action
) => {
    switch (action.type) {
        case ITEM_LIST_SUBCATEGORY_REQUEST:
            return { loading: true };
        case ITEM_LIST_SUBCATEGORY_SUCCESS:
            return {
                loading: false,
                items: action.payload
            };
        case ITEM_LIST_SUBCATEGORY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};



