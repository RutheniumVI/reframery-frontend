
import React from 'react';
import AdminMenu from "../components/AdminSidebar"
import ListAdmin from '../components/AdminListAdmin';

export default function AdminManagePage() {
    return (
        <div className="admin-container">
            <AdminMenu />
            <ListAdmin />
        </div>


    );
}