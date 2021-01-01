import React from 'react';
import { useData } from "../data/useData";

export default function ListUpdateUserBalance() {
    const { data } = useData();
    return (
        <div>
            <div className="admin-table">
                <table align="center">
                    <tr>

                        <td> User ID</td>
                        <td> Email</td>
                        <td> Current Balance </td>
                        <td> Update</td>
                    </tr>
                    {
                        data["requests"].map(request =>
                            request.status && <tr>
                                <td>{request.name}</td>
                                <td>{request.email}</td>
                                <td>25</td>
                                <td><button className="button-validate">Update</button></td>
                            </tr>

                        )
                    }

                </table>
            </div>
        </div>

    );
}
