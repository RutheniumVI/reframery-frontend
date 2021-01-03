import React from 'react';
import AdminMenu from '../components/AdminSidebar'
import CreateNewAminAccount from '../components/AdminCreateNewAdmin'

export default function CreateAdminPage() {

    return (
        <div  className="admin-container" >
            <AdminMenu />
            <CreateNewAminAccount />
            
        </div>
    );
}
