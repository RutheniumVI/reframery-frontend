import React from 'react';

import { Link } from 'react-router-dom';

export default function AdminMenu() {
    return (
        <div className="adminpage">
            <div >
                <div className="menu">
                    <ul>
                        <li><Link to="/admin"><span className="link">My Admin</span></Link> </li>
                        <li><Link to="/admin/awaiting-validation"><span className="link">Awaiting Validation</span></Link></li>
                        <li><Link to="/admin/validated-users"><span className="link">Validated Users</span></Link></li>
                        <li><Link to="/admin/complaints"><span className="link">Complaints</span></Link></li>
                        <li>Locked Users</li>
                        <li>Account Setting</li>
                    </ul>

                </div>
            </div>
        </div>

    );
}



