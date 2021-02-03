import React from 'react';
import AdminMenu from '../components/AdminSidebar'
import ProfilePage from './MyProfilePage'

export default function AdminProfilePage() {

    return (
        <div className="admin-container">
            <div className="admin-table">
                <ProfilePage />
            </div>

        </div>
    );
}
