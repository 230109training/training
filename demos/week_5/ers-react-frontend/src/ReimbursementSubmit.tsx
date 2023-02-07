import React, { useState } from 'react';
import axios from 'axios';

// Defining the props object to contain a refreshReimbursements property which is a function that accepts 0 arguments
// and returns nothing
function ReimbursementSubmit(props: { refreshReimbursements: () => void }) {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');

    async function submitReimbursement() {
        const response = await axios.post('http://127.0.0.1:8080/reimbursements', { "amount": amount, "description": description }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.status === 201) {
            alert('Reimbursement successfully submitted!');
            props.refreshReimbursements();
        }
    }

    return (
        <>
            <form onSubmit={(event) => { event.preventDefault() }}>
                <label htmlFor="amount">Amount</label>
                <input onChange={(e) => { setAmount(Number(e.target.value)) }} value={amount} type="number" id="amount" name="amount" />
                <label htmlFor="description">Description</label>
                <input onChange={(e) => { setDescription(e.target.value) }} value={description} type="text" id="description" name="description" />
                <button onClick={submitReimbursement}>Submit</button>
            </form>
        </>
    )
}

export default ReimbursementSubmit;