import React from 'react';
import AdminMenu from '../components/AdminSidebar';
import ListAwaitingValidation from '../components/AdminListAwaitingValidation';


export default function AwaitingPage() {
    return (
        <div  className="admin-container">
            <AdminMenu />
            <ListAwaitingValidation />
        </div>

    );
}
