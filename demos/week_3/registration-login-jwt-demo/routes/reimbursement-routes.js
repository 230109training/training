const express = require('express');
const router = express.Router();

const jwtUtil = require('../utility/jwt-util');
const reimbursementDao = require('../dao/reimbursement-dao');

router.post('/reimbursements', async (req, res) => {
    try {
        const authorizationHeader = req.headers.authorization;
        // "Bearer <token>"
        const token = authorizationHeader.split(" ")[1]; // access 2nd element at index 1
        // If token is invalid, it will enter the catch block
        const tokenPayload = await jwtUtil.verifyTokenAndReturnPayload(token);

        if (tokenPayload.role === 'employee') {
            // if employee, then add reimbursement
            await reimbursementDao.addReimbursement(tokenPayload.username, req.body.amount, req.body.description);
        
            res.statusCode = 201;
            res.send({
                "message": "Successfully added reimbursement"
            })
        } else {
            res.statusCode = 401; // 401 unauthorized
            res.send({
                "message": "You do not have the appropriate role of 'employee' to access this operation"
            })
        }
    } catch(err) {
        if (err.name === 'JsonWebTokenError') {
            res.statusCode = 400;
            res.send({
                "message": "Invalid JWT"
            })
        } else if (err.name === 'TypeError') {
            res.statusCode = 400;
            res.send({
                "message": "No Authorization header provided"
            });
        } else {
            res.statusCode = 500; // 500 internal server error
        }
    }
    
});

module.exports = router;