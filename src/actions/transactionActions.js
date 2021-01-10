import Axios from 'axios';
import {
    BALANCE_ADD_FAIL,
    BALANCE_ADD_REQUEST,
    BALANCE_ADD_SUCCESS,
    BALANCE_DEDUCT_FAIL,
    BALANCE_DEDUCT_REQUEST,
    BALANCE_DEDUCT_SUCCESS,
} from '../constants/transactionConstants';

export const addBalanceToUser = (senderID, receiverID,creditUnit) => async (dispatch) => {
    dispatch({ type: BALANCE_ADD_REQUEST, payload: { senderID, receiverID, creditUnit } });
    try {
        const { data } = await Axios.post('/api/transactions/add-balance', { senderID, receiverID, creditUnit });
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

export const deductBalanceToUser = (senderID, receiverID,creditUnit) => async (dispatch) => {
    dispatch({ type: BALANCE_DEDUCT_REQUEST, payload: { senderID, receiverID, creditUnit } });
    try {
        const { data } = await Axios.post('/api/transactions/deduct-balance', { senderID, receiverID, creditUnit });
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

