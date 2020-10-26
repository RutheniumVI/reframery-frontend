import React from 'react';
import AdminMenu from '../components/AdminMenu';

export default function OverviewPage() {
    const counter = {
        awaiting_validation: 2,
        validate_users: 5,
        complaints: 1,
        lockedusers: 0,
    }

    return (
        <div>
            <AdminMenu />
            <div className="admin-table">
                <table align="center">
                    <tr>

                        <td> {counter.awaiting_validation + counter.validate_users}</td>
                        <td>{counter.awaiting_validation}</td>
                        <td>{counter.validate_users}</td>
                        <td>{counter.complaints}</td>
                        <td>{counter.lockedusers}</td>
                    </tr>
                    <tr>
                        <td> All Users </td>
                        <td>Awaiting Validation</td>
                        <td>Validated Users</td>
                        <td>Complaints </td>
                        <td>Locked Users</td>
                    </tr>

                </table>
            </div>
        </div>
    );

}
