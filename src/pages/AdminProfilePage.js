import React from 'react';
import AdminMenu from '../components/AdminSidebar'
import ProfilePage from './ProfilePage'

export default function AdminProfilePage() {

    return (
        <div className="admin-container">
            <AdminMenu />
            <div className="admin-table">
                <ProfilePage />
            </div>

        </div>
    );
}
