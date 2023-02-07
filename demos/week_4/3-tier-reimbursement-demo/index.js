const express = require('express');
const bodyParser = require('body-parser');
const { register } = require('./service/user-service');

const app = express();
app.use(bodyParser.json());

app.post('/users', async (req, res) => {
    
    // The purpose of the controller layer is to extract data from HTTP requests and construct HTTP responses
    // (+ authorization)

    // What data do we need to extract from the request?
    // When a user registers, they need to provide a username, password, and confirmPassword

    try {
        const username = req.body.username;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        // Pass the data to the service layer
        // If you are calling an async function, make sure that you await the async function
        await register(username, password, confirmPassword);
        // Register MAY throw LengthValidationError, UsernameAlreadyTakenError, and PasswordMatchingError
        // Those errors will be caught if they occur by the catch block

        res.statusCode = 201;
        return res.send({
            "message": "User successfully registered"
        });
    } catch(err) {
        if (err.name === 'LengthValidationError' || err.name === 'UsernameAlreadyTakenError' || err.name === 'PasswordMatchingError') {
            res.statusCode = 400;
        } else {
            res.statusCode = 500; // 500 is reserved for any error that was not "expected" by the system
        }

        return res.send({
            "message": err.message
        });
    }
});


app.listen(8080, () => {
    console.log('Listening on port 8080');
});