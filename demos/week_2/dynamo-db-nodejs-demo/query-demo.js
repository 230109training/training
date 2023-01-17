const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

// 3 environment variables that need to be set to "log-in to our AWS account"
// 1. AWS_ACCESS_KEY_ID
// 2. AWS_SECRET_ACCESS_KEY
// 3. AWS_DEFAULT_REGION

const documentClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'grocery_items',
    IndexName: 'category-index',
    KeyConditionExpression: '#c = :value',
    ExpressionAttributeNames: {
        "#c": "category"
    },
    ExpressionAttributeValues: {
        ":value": "meat"
    }
};

// Time complexity O(1)
documentClient.query(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.Items);
    }
});