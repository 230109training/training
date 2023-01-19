const { retrieveUserByUsername } = require('./dao/user-dao');
const express = require('express');
const bodyParser = require('body-parser');
const { createJWT, verifyTokenAndReturnPayload } = require('./utility/jwt-util');

const PORT = 3000;
const app = express();

app.use(bodyParser.json()); // Very important middleware so that you can use req.body to access the JSON request body

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const data = await retrieveUserByUsername(username);
    const userItem = data.Item;

    if (userItem) { // See if user with username supplied actually exists
        if (userItem.password === password) {
            // Successful login
            // Create a JWT
            const token = createJWT(userItem.username, userItem.role);

            res.send({
                "message": "Successfully authenticated",
                "token": token
            });
        } else {
            res.statusCode = 400;
            res.send({
                "message": "Invalid password"
            })
        }
    } else {
        res.statusCode = 400;
        res.send({
            "message": `User with username ${username} does not exist`
        })
    } 
});

app.get('/endpointforregularusersonly', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; // ['Bearer', '<token>']
    
    try {
        const payload = await verifyTokenAndReturnPayload(token);

        if (payload.role === 'regular_user') {
            res.send({
                "message": `Welcome, regular_user ${payload.username}!`
            })
        } else {
            res.statusCode = 401;
            res.send({
                "message": `YOU ARE NOT A REGULAR USER!!!! You are a ${payload.role}`
            })
        }

    } catch(err) { // token verification failure
        res.statusCode = 401;
        res.send({
            "message": "Token verification failure"
        })
    }
    
});

app.get('/endpointforadminsonly', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; // ['Bearer', '<token>']
    
    try {
        const payload = await verifyTokenAndReturnPayload(token);

        if (payload.role === 'admin') {
            res.send({
                "message": `Welcome, admin ${payload.username}!`
            })
        } else {
            res.statusCode = 401;
            res.send({
                "message": `YOU ARE NOT AN ADMIN!!!! You are a ${payload.role}`
            })
        }

    } catch(err) { // token verification failure
        res.statusCode = 401;
        res.send({
            "message": "Token verification failure"
        })
    }
    
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
