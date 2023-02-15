const AWS = require('aws-sdk'); // Don't need to install using npm install
// Since it is included in the Node.js Runtime for Lambda functions
AWS.config.update({
    region: 'us-east-1'
});
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const bodyObject = JSON.parse(event.body);
    const username = bodyObject.username;
    const password = bodyObject.password;

    try {
        const data = await documentClient.get({
            TableName: process.env.USERS_TABLE_NAME,
            Key: {
                "username": username
            }
        }).promise();

        if (data.Item) { // username is already taken
            return {
                statusCode: 400,
                body: JSON.stringify({
                    "message": "Username already taken!"
                })
            }
        }

        await documentClient.put({
            TableName: process.env.USERS_TABLE_NAME,
            Item: {
                username,
                password
            }
        }).promise();

        return {
            statusCode: 201, // 201 Created
            body: JSON.stringify({
                "message": "User successfully registered",
            })
        }
    } catch(err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                "message": err.message
            })
        }
    }

}