import React, { useState as useStateMock } from "react";
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme';
import RegisterPage from '../pages/RegisterPage';
import WellcomeComponent from '../components/WellcomeComponent.js';

import { act } from 'react-dom/test-utils';

import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";



const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
    let input = wrapper.find(inputSelector);
    input.simulate('change', {
        target: { value: newValue },
    })
    return wrapper.find(inputSelector);
}

// beforeEach(() => {
  
//     jest.resetAllMocoks();
// });

describe('WellcomePage UI tests', () => {

     describe('input change value', () => {       

        let registerPageWrapper;

        beforeEach(() => {
            registerPageWrapper = mount(<Provider store={store}>
                <Router>
                    <RegisterPage />
                </Router>
            </Provider>);

            // jest.resetAllMocoks();
            jest.clearAllMocks()
        });

        it('username input changes', () => {
            const updateUserNameInput = simulateChangeOnInput(
                registerPageWrapper,
                '#username',
                'user01'
            )
            expect(updateUserNameInput.instance().value).toBe('user01');
        });

        it('email input changes', () => {
            const updateEmailInput = simulateChangeOnInput(
                registerPageWrapper,
                '#email',
                'user01@gmail.com'
            )
            expect(updateEmailInput.instance().value).toBe('user01@gmail.com');
        });

        it('password input changes', () => {
            const updatePasswordInput = simulateChangeOnInput(
                registerPageWrapper,
                '#password',
                '1234'
            )
            expect(updatePasswordInput.instance().value).toBe('1234');
        });

        it('confirmPassword input changes', () => {
            const updateConfirmedPasswordInput = simulateChangeOnInput(
                registerPageWrapper,
                '#confirmPassword',
                '1234'
            )
            expect(updateConfirmedPasswordInput.instance().value).toBe('1234');
        });

        it('select community correctly', () => {
            let updateCommunityInput = simulateChangeOnInput(
                registerPageWrapper,
                'select',
                'USA'
            )
            expect(updateCommunityInput.instance().value).toBe('USA');
            updateCommunityInput = simulateChangeOnInput(
                registerPageWrapper,
                'select',
                'Brazil'
            )
            expect(updateCommunityInput.instance().value).toBe('Brazil');
            updateCommunityInput = simulateChangeOnInput(
                registerPageWrapper,
                'select',
                'Mexico'
            )
            expect(updateCommunityInput.instance().value).toBe('Mexico');
        });

        it('fill out the form with inputs', () => {
            const usernameInput = simulateChangeOnInput(registerPageWrapper, '#username', 'user02')
            const emailInput = simulateChangeOnInput(registerPageWrapper, '#email', 'user02@gmail.com')
            const passwordInput = simulateChangeOnInput(registerPageWrapper, '#password', '1234')
            const confirmPasswordInput = simulateChangeOnInput(registerPageWrapper, '#confirmPassword', '1234')
            const communityInput = simulateChangeOnInput(registerPageWrapper, 'select', 'Canada')
            expect(usernameInput.instance().value).toEqual('user02');
            expect(emailInput.instance().value).toEqual('user02@gmail.com');
            expect(passwordInput.instance().value).toEqual('1234');
            expect(confirmPasswordInput.instance().value).toEqual('1234');
            expect(communityInput.instance().value).toEqual('Canada');
        });
        

    });


});



