import React, { useEffect } from 'react';
import Header from 'components/Header';
import SideBar from "components/AdminSidebar";
import Footer from 'components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { numOfUnvalidatedUsers, numOfValidatedUsers } from 'actions/userActions';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';

export default function OverviewPage() {
    const dispatch = useDispatch();
    //get the admin user information
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const userCommunity = userInfo.communityName;

    //states of getting the number of validated users
    const  validatedUsersCount = useSelector((state) => state.validatedUsersCount);
    const { loading:loadingOfValidated, error:errorOfValidated, counterOfValidated } =  validatedUsersCount;
    
    //states of getting the number of unvalidated users
    const  unvalidatedUsersCount = useSelector((state) => state.unvalidatedUsersCount);
    const { loading:loadingOfUnvalidated, error:errorOfUnvalidated, counterOfUnvalidated } =  unvalidatedUsersCount;

    useEffect(() => {
        dispatch(numOfValidatedUsers(userCommunity));
        dispatch(numOfUnvalidatedUsers(userCommunity));
    }, [dispatch, userCommunity]);
    return (
        <div>
            {loadingOfValidated ? (
                <LoadingBox></LoadingBox>
            ) : errorOfValidated ? (
                <MessageBox variant="danger">{errorOfValidated}</MessageBox>
            ) : (
                <div>
                    <Header />
                    <div className="sidebar-content">
                        <SideBar />
                        <div className="container admin-container">
                            <div className="admin-table">
                                <div className="table">
                                    <div className="title-table">
                                        <div className="column1"> All Users</div>
                                        <div className="column2"> Awaiting Validation</div>
                                        <div className="column3"> Validated Users</div>
                                    </div>

                                    <div className="row">
                                        <div className="column1"> {counterOfValidated + counterOfUnvalidated} </div>
                                        <div className="column2"> {counterOfUnvalidated} </div>
                                        <div className="column3">{counterOfValidated}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </div>

    );

}
