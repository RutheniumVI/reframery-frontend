import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {
    itemsOfCategoryGetReducer,
    itemGetReducer,
    itemCreateReducer,
    itemUpdateReducer,
    itemImageUpdateReducer,
    itemDeleteReducer,
    newestItemsGetReducer,
    itemsOfUserGetReducer,
    itemsOfSubcategoryGetReducer,
} from './reducers/itemReducers.js';

import { balanceAddReducer, balanceDeductReducer } from './reducers/transactionReducers.js';

import { adminUsersReducer, 
    unvalidatedUsersCountReducer, 
    unvalidatedUsersReducer, 
    userDeleteReducer,
     userGetReducer, 
     userRegisterReducer, 
     userSigninReducer, 
     userUpdateReducer, 
     userImageUpdateReducer,
     userValidateReducer, 
     validatedUsersCountReducer } from './reducers/userReducer.js';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null
    },
};

const reducer = combineReducers({
    //reducers for users
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userGet: userGetReducer,
    userUpdate: userUpdateReducer,
    userImageUpdate:userImageUpdateReducer,
    userValidate: userValidateReducer,
    userDelete: userDeleteReducer,
    adminUsers: adminUsersReducer,
    unvalidatedUsers: unvalidatedUsersReducer,
    validatedUsersCount: validatedUsersCountReducer,
    unvalidatedUsersCount: unvalidatedUsersCountReducer,

     // reducers for transactions
     balanceAdd: balanceAddReducer,
     balanceDeduct: balanceDeductReducer,

     //reducers for items
     itemCreate: itemCreateReducer,
     itemUpdate: itemUpdateReducer,
     itemImageUpdate: itemImageUpdateReducer,
     itemDelete:itemDeleteReducer,
     itemGet: itemGetReducer,
     newestItemsGet: newestItemsGetReducer, 
     itemsOfCategoryGet: itemsOfCategoryGetReducer,
     itemsOfUserGet: itemsOfUserGetReducer,
     itemOfSubcategoryGet: itemsOfSubcategoryGetReducer   

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;