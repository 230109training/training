const { retrieveUserByUsername } = require('./dao/user-dao');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();

app.use(cookieParser());
app.use(session({
    secret: 'thisisasecret',
    saveUninitialized: true,
    resave: false // Save a session to the session store every time, even when nothing changed. It is recommended
    // to be set to false
}));
app.use(bodyParser.json()); // Very important middleware so that you can use req.body to access the JSON request body

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const data = await retrieveUserByUsername(username);
    const userItem = data.Item;

    if (userItem) { // See if user with username supplied actually exists
        if (userItem.password === password) {
            // Successful login
            // Create an HTTP session
            const currentSession = req.session; // Session object
            currentSession.username = userItem.username; // Attach the username as a property to the session object
            currentSession.role = userItem.role; // Attach the role as a property to the session object

            res.send({
                "message": "Successfully authenticated"
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

    // Check to see if password supplied in HTTP request is equal to the password property in the userItem
    
});

// When we send a request to this endpoint, Postman will automatically include the cookie
// That it was given by the POST /login HTTP response
// This cookie will allow for this request to use the same session object that was created in the POST /login request
app.get('/endpointforadminsonly', (req, res) => {
    // In this endpoint, we need to retrieve the session object and see if it contains the user's username and role
    // information and check if they have an admin role
    const currentSession = req.session;

    if (currentSession.username && currentSession.role) { // Check if user is logged in
        if (currentSession.role === 'admin') {
            res.send({
                "message": `Hello, admin ${currentSession.username}!`
            })
        } else {
            res.statusCode = 401;
            res.send({
                "message": `You are NOT AN ADMIN!!!!! You are a ${currentSession.role}`
            })
        }
    } else { // if not logged in
        res.statusCode = 401; // 401 Unauthorized
        res.send({
            "message": "You are not logged in!"
        });
    }
});

app.get('/endpointforregularusersonly', (req, res) => {
    const currentSession = req.session;

    if (currentSession.username && currentSession.role) {
        if (currentSession.role === 'regular_user') {
            res.send({
                "message": `Welcome, regular_user ${currentSession.username}!`
            })
        } else {
            res.statusCode = 401;
            res.send({
                "message": `You are NOT A REGULAR USER!!! You are are ${currentSession.role}`
            })
        }
    } else {
        res.statusCode = 401;
        res.send({
            "message": "You are not logged in!"
        })
    }
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// async function test() {
//     let data = await retrieveUserByUsername('admin123');
//     console.log(data.Item);
// }

// test();
