import React from 'react';
import AdminMenu from '../components/AdminSidebar'
import ListValidateUser from '../components/AdminListValidatedUsers'

export default function ValidateUserPage() {

    return (
        <div  className="admin-container">
            <AdminMenu />
            <ListValidateUser />
            
        </div>
    );
}
