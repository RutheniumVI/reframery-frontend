import Axios from 'axios';

import {
    ADMIN_LIST_FAIL,
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    UNVALIDATEUSER_LIST_FAIL,
    UNVALIDATEUSER_LIST_REQUEST,
    UNVALIDATEUSER_LIST_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_VALIDATE_REQUEST,
    USER_VALIDATE_SUCCESS,
    USER_VALIDATE_FAIL,
    USER_IMAGE_UPDATE_REQUEST,
    USER_IMAGE_UPDATE_SUCCESS,
    USER_IMAGE_UPDATE_FAIL,
} from '../constants/userConstants';

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post(`/users/signin/${email}`, { email, password});
         console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_SIGNOUT });
};

export const createUser = (username, email, password, communityName) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { username, email, password, communityName } });
    try {
        const { data } = await Axios.post('/users/user', { username, email, password, communityName });
        console.log(data);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


export const getUser = (email) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST, payload: email });
    try {
        const { data } = await Axios.get(`/users/user/${email}`);        
        console.log("testing");
        console.log(data);
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const updateUser = (email, username, password, phoneNumber,
    firstName, lastName, birthday, address, city, province, country, postcode,
    admin, manager, communityName
) => async (dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST, payload: email });
    try {
        const { data } = await Axios.put(`/users/user/${email}`,
            {
                username, password, phoneNumber, firstName, lastName, birthday, address, city, province, country, postcode,
                admin, manager, communityName
            }
        );
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const updateUserImage = (email, imageBinary
) => async (dispatch) => {
    dispatch({ type: USER_IMAGE_UPDATE_REQUEST, payload: email });
    try {
        const { data } = await Axios.put(`/users/uploadUserImage/${email}`,
            {
                imageBinary
            }
        );
        dispatch({ type: USER_IMAGE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_IMAGE_UPDATE_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const deleteUser = (email) => async (dispatch) => {
    dispatch({ type: USER_DELETE_REQUEST, payload: email });
    try {
        const { data } = await Axios.delete(`/users/user/${email}`);
        dispatch({ type: USER_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const validateUser = (email) => async (dispatch) => {
    dispatch({ type: USER_VALIDATE_REQUEST, payload: email });
    try {
        const { data } = await Axios.put(`/users/user/validateUser/${email}`);
        dispatch({ type: USER_VALIDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_VALIDATE_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const searchAdminUsers = () => async (dispatch) => {
    dispatch({ type: ADMIN_LIST_REQUEST });
    try {
        const { data } = await Axios.get('/users/searchAdminUsers');
        dispatch({ type: ADMIN_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ADMIN_LIST_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const searchUnvalidatedUsers = () => async (dispatch) => {
    dispatch({ type: UNVALIDATEUSER_LIST_REQUEST });
    try {
        const { data } = await Axios.get('/users/searchUnvalidatedUsers');
        dispatch({ type: UNVALIDATEUSER_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: UNVALIDATEUSER_LIST_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};


