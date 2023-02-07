import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FinanceManager() {

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
                Authorization: `Bearer ${localStorage.getItem('token')}` // Sending a finance_manager's token to the backend
                // So the finance manager should get all reimbursements from every user
            }
        });
        
        setReimbursements(response.data); // update the state
    }

    async function approveReimbursement(id: string) {
        const response = await axios.patch(`http://127.0.0.1:8080/reimbursements/${id}/status`, { status: "approved" }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            alert('Reimbursement successfully approved!');
        }

        retrieveReimbursements(); // retrieve reimbursements from backend and re-render component
    }

    async function denyReimbursement(id: string) {
        const response = await axios.patch(`http://127.0.0.1:8080/reimbursements/${id}/status`, { status: "denied" }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            alert('Reimbursement successfully denied!');
        }

        retrieveReimbursements(); // retrieve reimbursements from backend and re-render component
    }

    return (
        <>
            <h1>Welcome to the Finance Manager Page!</h1>
            <h2>All Reimbursements</h2>

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
                                {r.status === 'pending' ? 
                                <>
                                    <td><button onClick={() => { approveReimbursement(r.reimbursement_id) }}>Approve</button></td>
                                    <td><button onClick={() => { denyReimbursement(r.reimbursement_id) }}>Deny</button></td>
                                </> : <></>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default FinanceManager;