import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addBalanceToUser } from '../actions/transactionActions';
import { getUser, searchUnvalidatedUsers, validateUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Header from 'components/Header';
import SideBar from "components/AdminSidebar";
import Footer from 'components/Footer'


export default function AwaitingPage() {
    const dispatch = useDispatch();

    //get the admin user information
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const senderEmail = userInfo.email;
    const userCommunity = userInfo.communityName;
    console.log(senderEmail);

    //get the list of unvalidated users
    const unvalidatedUsers = useSelector((state) => state.unvalidatedUsers);
    const { loadingUser, error, unvalidatedList } = unvalidatedUsers;

    //get the user information with the user email
    const userGet = useSelector(state => state.userGet);
    const { user } = userGet;
    const validateHandler = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Are you sure to validate the current user?");
        if (confirm) {
            const userEmail = e.target.value;
            console.log(userEmail);
            dispatch(getUser(userEmail));
        }
    };

    //when get the user details, change the user validate status and send default 25 credits to the user
    useEffect(() => {
        dispatch(searchUnvalidatedUsers(userCommunity));
        if (user) {
            console.log(user);
            //if get the user, then update the user attribute: validateStatus and ValidateTime, and update the balance
            dispatch(validateUser(user.email));
            console.log(senderEmail);
            // dispatch(addBalanceToUser(senderEmail, user.email, 25));
            window.location.reload();
        }
    }, [user]);
    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                <div className="admin-container">
                    <div className="admin-table">
                        <div className="table">
                            {loadingUser ? (
                                <LoadingBox></LoadingBox>
                            ) : error ? (
                                <MessageBox variant="danger">{error}</MessageBox>
                            ) : (

                                        <div >
                                            <div className="title-table">
                                                <div className="username"> User Name</div>
                                                <div className="email"> Email</div>
                                                <div className="request"> Request Time </div>
                                                <div className="status"> Status</div>
                                                <div className="div-button"> &nbsp;</div>
                                            </div>
                                            {
                                                unvalidatedList.map((currentUser) => (currentUser.validateStatus === false
                                                    && currentUser.admin === false &&
                                                    <div key={currentUser.email} className="row">
                                                        <div className="username"> {currentUser.firstName} {currentUser.lastName} </div>
                                                        <div className="email">{currentUser.email}</div>
                                                        <div className="request">{currentUser.registerTime.slice(0, 10)} </div>
                                                        <div className="status">pending</div>
                                                        <div className="div-button"><button className="button is-primary is-rounded" value={currentUser.email} onClick={validateHandler}>Validate</button></div>
                                                    </div>))
                                            }
                                        </div>

                                    )}
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
