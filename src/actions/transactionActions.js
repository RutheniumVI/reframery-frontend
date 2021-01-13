import Axios from 'axios';
import {
    TRANSACTION_GET_FAIL,
    TRANSACTION_GET_SUCCESS,
    TRANSACTION_GET_REQUES,
    BALANCE_GET_REQUEST,
    BALANCE_GET_SUCCESS,
    BALANCE_GET_FAIL,
    BALANCE_ADD_FAIL,
    BALANCE_ADD_REQUEST,
    BALANCE_ADD_SUCCESS,
    BALANCE_DEDUCT_FAIL,
    BALANCE_DEDUCT_REQUEST,
    BALANCE_DEDUCT_SUCCESS,
    TRANSACTION_OF_USER_GET_REQUEST,
    TRANSACTION_OF_USER_GET_SUCCESS,
    TRANSACTION_OF_USER_GET_FAIL,
} from '../constants/transactionConstants';

// get transaction details from backend
export const getTransaction = (TrannsactionID) => async (dispatch) => {
    dispatch({ type: TRANSACTION_GET_REQUES, payload: TrannsactionID });
    try {
        const { data } = await Axios.get(`/trandactions/transaction/${TrannsactionID}`);
        dispatch({ type: TRANSACTION_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: TRANSACTION_GET_FAIL, payload: error.message });
    }
}

// get a list of transactions for a user from backend
export const getTransactionsOfUser = (userEmail, limit, startingFrom, reversed) => async (dispatch) => {
    dispatch({ type: TRANSACTION_OF_USER_GET_REQUEST, payload: userEmail });
    try {
        const { data } = await Axios.get(`/trandactions//getTransactionsOfUser/${userEmail}-${limit}-/${startingFrom}-/${reversed}`, { userEmail, limit, startingFrom, reversed });
        dispatch({ type: TRANSACTION_OF_USER_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: TRANSACTION_OF_USER_GET_FAIL, payload: error.message });
    }
}

//get user balance  from backend
export const getBalance = (userEmail) => async (dispatch) => {
    dispatch({ type: BALANCE_GET_REQUEST, payload: userEmail });
    try {
        const { data } = await Axios.get(`/transactions/balance/${userEmail}`);
        dispatch({ type: BALANCE_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: BALANCE_GET_FAIL, payload: error.message });
    }
}

//add credits to a user
export const addBalanceToUser = (senderID, receiverID, creditUnit) => async (dispatch) => {
    dispatch({ type: BALANCE_ADD_REQUEST, payload: { senderID, receiverID, creditUnit } });
    try {
        const { data } = await Axios.post('/transactions/add-balance', { senderID, receiverID, creditUnit });
        dispatch({ type: BALANCE_ADD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: BALANCE_ADD_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

//deduct redits from a user
export const deductBalanceToUser = (senderID, receiverID, creditUnit) => async (dispatch) => {
    dispatch({ type: BALANCE_DEDUCT_REQUEST, payload: { senderID, receiverID, creditUnit } });
    try {
        const { data } = await Axios.post('/transactions/deduct-balance', { senderID, receiverID, creditUnit });
        dispatch({ type: BALANCE_DEDUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: BALANCE_DEDUCT_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

