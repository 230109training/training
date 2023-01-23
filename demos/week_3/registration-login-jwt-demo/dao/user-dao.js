const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

const docClient = new AWS.DynamoDB.DocumentClient(); // instantiate a docClient object

// Username is a PK
// We can either use .get, .scan, or .query for retrieving items
// .get makes sense here, because we are retrieving based on PK
function retrieveUserByUsername(username) {
    return docClient.get({
        TableName: 'reimb_users',
        Key: {
            "username": username
        }
    }).promise();
}

function registerUser(username, password) {
    return docClient.put({
        TableName: "reimb_users",
        Item: {
            "username": username,
            "password": password,
            "role": "employee" // hardcode role, since registration should default to employee role
        }
    }).promise();
}

module.exports = {
    retrieveUserByUsername,
    registerUser
}

// Breadcrumb statements
// retrieveUserByUsername('employee123').then(data => {
//     console.log(data.Item);
// })

// retrieveUserByUsername('user123').then(data => {
//     console.log(data.Item);
// })

// retrieveUserByUsername('userthatdoesntexist').then(data => {
//     console.log(data.Item);
// })

// registerUser('newuser123', 'password').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error(err);
// })