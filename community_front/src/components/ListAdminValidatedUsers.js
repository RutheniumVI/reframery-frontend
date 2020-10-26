import React from 'react';
import { useData } from "../data/useData";

export default function ListValidateUser() {
    const { data } = useData();
    return (
        <div>
            <div className="admin-table">
                <table align="center">
                    <tr>
                        <td> Request ID </td>
                        <td> User ID</td>
                        <td> Email</td>
                        <td> Request Time </td>
                        <td> Validate Time</td>
                    </tr>
                    {
                        data["requests"].map(request =>
                            request.status && <tr>
                                <td> {request._id} </td>
                                <td>{request.name}</td>
                                <td>{request.email}</td>
                                <td>{request.request_time} </td>
                                <td>{request.validate_time}</td>

                            </tr>

                        )
                    }


                </table>
            </div>
        </div>

    );
}
