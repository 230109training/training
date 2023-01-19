// This is a file that will contain useful functions for dealing with JWTs
const jwt = require('jsonwebtoken');
const Promise = require('bluebird');
const { DocumentClient } = require('aws-sdk/clients/dynamodb');

function createJWT(username, role) {
    return jwt.sign({
        username,
        role
    }, 'thisisasecret', { 
        expiresIn: '1d'
    })
}

// (header + payload) sign with the secret -> signature

// The JWT will be sent to the client
// When client sends the JWT back to the server, the server needs to check if the JWT is valid
// (header + payload + signature) -> verify that the signature was generated using the "secret"
// You cannot forge any of the information inside of the payload or header, because the server will know that it was
// forged

// verify
jwt.verify = Promise.promisify(jwt.verify); // Turn jwt.verify into a function that returns a promise
// instead of forcing us to use (err, data) => {} callback function

function verifyTokenAndReturnPayload(token) {
    return jwt.verify(token, 'thisisasecret'); // return a promise with the payload
}

module.exports = {
    createJWT,
    verifyTokenAndReturnPayload
}