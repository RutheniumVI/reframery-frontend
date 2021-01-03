import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

export default function AdminMenu() {
    const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
    return (
        <div className="admin-sidebar-container">

            <div className="admin-sidebar">
                <div className="top">
                    <Link to="/home">
                        <img className="logo" src="/images/logo.png" alt="logo" width="100" ></img >
                    </Link>
                    <Link to="/home"><div className="marketplace"> Marketplace</div></Link>
                </div>

                <div className="middle">
                    <div className="menu">
                        <Link to="/admin"><div className="link"> My Admin</div></Link>
                        <Link to="/admin/awaiting-validation"><div className="link">Awaiting Validation</div></Link>
                        <Link to="/admin/validated-users"><div className="link">Validated Users</div></Link>
                        {/* The following two links are shown only for a super admin */}
                        {userInfo.superAdmin && <Link to="/admin/update-users-balance"><div className="link">Update user balance</div></Link>}
                        {userInfo.superAdmin && <Link to="/admin/administrator-management"><div className="link">Administrator Management</div></Link>}
                        <Link to="/admin/my-profile"><div className="link">Account Setting</div></Link>

                    </div>
                </div>
            </div>

        </div>

    );
}



