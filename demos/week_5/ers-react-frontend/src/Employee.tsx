import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReimbursementSubmit from './ReimbursementSubmit';

function Employee() {

    const [reimbursements, setReimbursements] = useState<{ 
        reimbursement_id: string, 
        amount: number, 
        description: string, 
        status: string,
        submitter: string }[]>([]);

    // useEffect is a hook that will "hook" into different phases of the component lifecycle
    // If the second argument is an empty array, the callback function will execute only the first time
    // when the component is mounted
    useEffect(() => {
        retrieveReimbursements();
    }, [])

    async function retrieveReimbursements() {
        const response = await axios.get('http://127.0.0.1:8080/reimbursements', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}` // send employee token, so it will only
                // retrieve that specific employee's reimbursements
            }
        });
        
        setReimbursements(response.data); // update the state
    }

    return (
        <>
            <h1>Welcome to the Employee Page!</h1>

            <h2>Your Reimbursements</h2>
            <table>
                <thead>
                    <tr>
                        <th>Reimbursement ID</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Submitter Username</th>
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map((r) => {
                        return (
                            <tr key={r.reimbursement_id}>
                                <td>{r.reimbursement_id}</td>
                                <td>{r.amount}</td>
                                <td>{r.description}</td>
                                <td>{r.status}</td>
                                <td>{r.submitter}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <ReimbursementSubmit refreshReimbursements={retrieveReimbursements} />
        </>
    )
}

export default Employee;