import {
    BALANCE_ADD_FAIL,
    BALANCE_ADD_REQUEST,
    BALANCE_ADD_SUCCESS,
    BALANCE_DEDUCT_FAIL,
    BALANCE_DEDUCT_REQUEST,
    BALANCE_DEDUCT_SUCCESS,

} from "../constants/transactionConstants";

export const balanceAddReducer = (state = {}, action) => {
    switch (action.type) {
        case BALANCE_ADD_REQUEST:
            return { loading: true };
        case BALANCE_ADD_SUCCESS:
            return { loading: false, transaction: action.payload };
        case BALANCE_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const balanceDeductReducer = (state = {}, action) => {
    switch (action.type) {
        case BALANCE_DEDUCT_REQUEST:
            return { loading: true };
        case BALANCE_DEDUCT_SUCCESS:
            return { loading: false, transaction: action.payload };
        case BALANCE_DEDUCT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};