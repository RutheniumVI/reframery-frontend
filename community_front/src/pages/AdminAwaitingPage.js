import React from 'react';
import AdminMenu from '../components/AdminMenu';
import ListAwaitingValidation from '../components/ListAdminAwaitingValidation';


export default function AwaitingPage() {
    return (
        <div>
            <AdminMenu />
            <ListAwaitingValidation />
        </div>

    );
}
