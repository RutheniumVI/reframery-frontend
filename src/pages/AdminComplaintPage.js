import React from 'react';
import AdminMenu from "../components/AdminMenu"
import ListComplaints from '../components/ListAdminComplaints';

export default function ComplaintPage() {
    return (
        <div>
            <AdminMenu />
            <ListComplaints />
        </div>


    );
}

