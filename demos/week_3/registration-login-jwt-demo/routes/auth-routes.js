// auth-routes.js is for anything related to registration/login
const express = require('express');
const jwtUtil = require('../utility/jwt-util');
const router = express.Router();

const userDao = require('../dao/user-dao');

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const data = await userDao.retrieveUserByUsername(username);
    const userItem = data.Item; // userItem could be undefined if user does not exist

    if (userItem) { // we can use if (userItem) thanks to the idea of truthy and falsy values
        // undefined is falsy, so if userItem is not undefined, then the statement should be true
        if (userItem.password === password) {
            res.send({
                "message": "Sucessful login!",
                "token": jwtUtil.createToken(userItem.username, userItem.role)
            });
        } else {
            res.statusCode = 400;
            res.send({
                "message": "Invalid password!"
            });
        }
    } else { // userItem is undefined
        res.statusCode = 400;
        res.send({
            "message": "Username is invalid"
        });
    }
});

router.post('/users', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if user with username already exists
    const data = await userDao.retrieveUserByUsername(username);
    if (data.Item) { // if user exists
        res.statusCode = 400;
        res.send({
            "message": "Username already taken"
        })
    } else {
        await userDao.registerUser(username, password);

        // res.statusCode = 200; // 200 is already the default status code
        res.send({
            "message": "User successfully registered"
        });
    }
});

module.exports = router; // export the auth router