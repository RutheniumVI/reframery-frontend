import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import data from './testData.json';

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { createUser, getUser, signin, signout, updateUser } from '../actions/userActions';

import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS
} from '../constants/userConstants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// const mockStore = configureMockStore(middlewares);
// const mock_store = mockStore();
const mock = new MockAdapter(axios);

describe('createUser actions', () => {
    // Initialize mockstore with empty state
    var initialState;
    var store;

    describe('create user action', () => {
        beforeEach(() => {
            initialState = {};
            store = mockStore(initialState)
        });

        it('create a user successfully with all the required information', async () => {
            mock.onPost("/users/user").reply(200, data.user1[0]);
            await store.dispatch(createUser('user02', 'user02@gmail.com', '1234', 'Canada'));
            const actions = store.getActions()
            const expectedPayload = {
                payload: data.user1[0], type: USER_REGISTER_SUCCESS
            }
            expect(actions[1]).toEqual(expectedPayload)
        });

        it('can not create user with the same email', async () => {
            mock.onPost("/users/user").reply(404, { message: 'The email has been used' });
            await store.dispatch(createUser('user02', 'user02@gmail.com', '1234', 'Canada'));
            const actions = store.getActions()
            const expectedPayload = {
                payload: 'The email has been used', type: USER_REGISTER_FAIL
            }
            expect(actions[1]).toEqual(expectedPayload)
        });


    });

    describe('signin action', () => {
        beforeEach(() => {
            initialState = {};
            store = mockStore(initialState)
        });

        it('sign in sucessfully with the correct email and password', async () => {
            mock.onPost("/users/signin/user02@gmail.com").reply(200, { token: "ThisIsAToken" });
            await store.dispatch(signin('user02@gmail.com', '1234'));
            const actions = store.getActions()
            const expectedPayload = {
                payload: {
                    token: "ThisIsAToken"
                }, type: USER_SIGNIN_SUCCESS
            }
            expect(actions[1]).toEqual(expectedPayload)
        });

        it('fail to sign in with the wrong password', async () => {
            mock.onPost("/users/signin/user02@gmail.com").reply(401, { message: 'Invalid email or password' });
            await store.dispatch(signin('user02@gmail.com', '12345'));
            const actions = store.getActions()
            const expectedPayload = {
                payload: 'Invalid email or password', type: USER_SIGNIN_FAIL
            }
            expect(actions[1]).toEqual(expectedPayload)
        });
    });

    describe('signout action', () => {
        beforeEach(() => {
            initialState = {};
            store = mockStore(initialState)
        });

        it('update the user sucessfully when the user exits', async () => {
            store.dispatch(signout());
            const actions = store.getActions()
            const expectedPayload = {
                type: USER_SIGNOUT
            }
            expect(actions[0]).toEqual(expectedPayload)
        });
    });

    describe('getUser action', () => {
        beforeEach(() => {
            initialState = {};
            store = mockStore(initialState)
        });

        it('get the user sucessfully when the user exits', async () => {
            mock.onGet("/users/user/user02@gmail.com").reply(200, data.user1[0]);
            await store.dispatch(getUser('user02@gmail.com'));
            const actions = store.getActions()
            const expectedPayload = {
                payload: data.user1[0], type: USER_DETAILS_SUCCESS
            }
            expect(actions[1]).toEqual(expectedPayload)
        });

        it('fail to get the user when the user does not exit', async () => {
            mock.onGet("/users/user/user01@gmail.com").reply(404, { message: 'User Not Found' });
            await store.dispatch(getUser('user01@gmail.com'));
            const actions = store.getActions()
            const expectedPayload = {
                payload: 'User Not Found', type: USER_DETAILS_FAIL
            }
            expect(actions[1]).toEqual(expectedPayload)
        });

    });

    describe('updateUser action', () => {
        beforeEach(() => {
            initialState = {};
            store = mockStore(initialState)
        });

        it('update the user sucessfully when the user exits', async () => {
            mock.onPut("/users/user/user02@gmail.com").reply(200, data.user1[1]);
            await store.dispatch(updateUser('user02@gmail.com', 'user03'));
            const actions = store.getActions()
            const expectedPayload = {
                payload: data.user1[1], type: USER_UPDATE_SUCCESS
            }
            expect(actions[1]).toEqual(expectedPayload)
        });

        it('fail to update when the user does not exit', async () => {
            mock.onPut("/users/user/user02@gmail.com").reply(404, {message: 'User Not Found'});
            await store.dispatch(updateUser('user02@gmail.com', 'user02'));
            const actions = store.getActions()
            const expectedPayload = {
                payload: 'User Not Found', type: USER_UPDATE_FAIL
            }
            expect(actions[1]).toEqual(expectedPayload)
        });



    });


});