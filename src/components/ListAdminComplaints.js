import React from 'react';
import { useData } from "../data/useData";

export default function ListComplaints() {

    const { data } = useData();
    return (
        <div>
            <div className="admin-table">
                <table align="center">
                    <tr>
                        <td> Complaint ID </td>
                        <td> Complainant User ID</td>
                        <td> Complainant Email</td>
                        <td> Complaint Time </td>
                        <td> Respondent User ID</td>
                        <td> Respondent Email</td>
                        <td> Status</td>
                        <td> &nbsp;</td>

                    </tr>
                    {
                        data["complaints"].map((complaint) =>
                            <tr>
                                <td> {complaint._id} </td>
                                <td>{complaint.complainant_id}</td>
                                <td>{complaint.complaint_email}</td>
                                <td>{complaint.complaint_time} </td>
                                <td>{complaint.respondent_id}</td>
                                <td>{complaint.respondent_email}</td>
                                <td>{complaint.status}</td>
                                <td><button className="button-complaint">Process</button></td>
                            </tr>


                        )
                    }


                </table>
            </div>
        </div>


    );
}

