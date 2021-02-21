
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { promoteToAdmin, searchAdminUsers} from "../actions/userActions";
import Header from 'components/Header';
import SideBar from "components/AdminSidebar";
import Footer from 'components/Footer'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AdminManagePage() {
    const dispatch = useDispatch();

    //get signin user Info
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const userCommunity = userInfo.communityName;


    //get the list of admin users
    const adminUsers = useSelector((state) => state.adminUsers);
    const { loadingAdmin, error, admins } = adminUsers;
    console.log(admins);

    //button handler for promote a dmin to a manager
    const promoteHandler = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Are you sure to promote the current admin to a manager?");
        if (confirm) {
            const userEmail = e.target.value;
            dispatch(promoteToAdmin(userEmail));
            window.location.reload();
        }
    };

    //update the admin information when getting the user details
    useEffect(() => {
        dispatch(searchAdminUsers(userCommunity));
    }, [dispatch, userCommunity]);

    return (
        <div>
            <Header />
            <div className="sidebar-content">
                <SideBar />
                <div className="admin-container">
                    <div className="admin-table">
                        <div className="table">
                            {loadingAdmin ? (
                                <LoadingBox></LoadingBox>
                            ) : error ? (
                                <MessageBox variant="danger">{error}</MessageBox>
                            ) : (
                                        <div >
                                            <Link to="/admin/create-admin-account"><div className="create">Create a new administrator</div></Link>
                                            <div className="table">
                                                <div className="title-table">
                                                    <div className="username"> Admin Name</div>
                                                    <div className="email"> Email</div>
                                                    <div className="request"> Register Time </div>
                                                    <div className="div-button"> &nbsp;</div>
                                                </div>
                                                {
                                                    admins.map((currentUser) => (
                                                        <div className="row" key={currentUser.email}>
                                                            <div className="username"> {currentUser.firstName} {currentUser.lastName} </div>
                                                            <div className="email">{currentUser.email}</div>
                                                            <div className="request">{currentUser.registerTime.slice(0, 10)} </div>
                                                            <div className="div-button">
                                                                {
                                                                    currentUser.manager ? (
                                                                        <div>&nbsp;</div>
                                                                    ) : (
                                                                            <button className="button is-primary is-rounded" value={currentUser.email} onClick={promoteHandler}>Promote As Manager</button>
                                                                        )
                                                                }
                                                            </div>
                                                        </div>))
                                                }
                                            </div>


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