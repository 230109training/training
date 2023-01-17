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
    FilterExpression: '#c = :value',
    ExpressionAttributeNames: {
        "#c": "category"
    },
    ExpressionAttributeValues: {
        ":value": "meat"
    }
    // ExpressionAttributeNames and ExpressionAttributeValues are essentially "aliases" for the
    // actual attribute names and values that we specify for those attributes
    // The reason we want to use aliases is there is often "reserved keywords" that dynamoDb
    // has for various expressions that we construct
    // So we just want to avoid encountering any issues with those reserved keywords
}

// O(n) time complexity
documentClient.scan(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.Items);
    }
});