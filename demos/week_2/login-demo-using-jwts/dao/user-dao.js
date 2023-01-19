// user-dao.js is specifically to contain logic related to interacting with the DynamoDB users table
// If we had other tables as well in our application, then we would utilize other dao files on top of it
const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

const docClient = new AWS.DynamoDB.DocumentClient();

function retrieveUserByUsername(username) {
    const params = {
        TableName: 'users',
        Key: {
            username
        }
    };

    return docClient.get(params).promise();
}

module.exports = {
    retrieveUserByUsername
};