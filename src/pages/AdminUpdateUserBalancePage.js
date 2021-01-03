import React from 'react';
import AdminMenu from '../components/AdminSidebar'
import ListUpdateUserBalance from '../components/AdminListUpdateUserBalance'

export default function UpdateBalancePage() {

    return (
        <div  className="admin-container">
            <AdminMenu />
            <ListUpdateUserBalance />
            
        </div>
    );
}
