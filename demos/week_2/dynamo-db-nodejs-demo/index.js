const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-1", // replace the region value with the region in which
    // you created your DynamoDB table
});

// If you notice the code here, there is nowhere that we are actually 
// "logging in" to AWS. Therefore, our aws-sdk operations are not permitted
// to actually access any resources in AWS, like retrieving data from a table

// The best way to configure our application to actually "log-in" is by setting
// environment variables

// An ENVIRONMENT VARIABLE is a value that can be set onto an operating system.
// Think of an environmment variable as a global variable for our computer
// Any application running on our computer can access the environment variables
// The AWS SDK will automatically look for specially named environment variables
// that contain our AWS credentials
// 1. AWS_ACCESS_KEY_ID
// 2. AWS_SECRET_ACCESS_KEY
// 3. AWS_DEFAULT_REGION
// We need to set each of these 3 environment variables. For the first 2 environment
// variables, we want to set our access keys for the IAM user that we created
// For the third environment variable, we want to set the region that
// we are using (us-east-1)

const dynamoDB = new AWS.DynamoDB(); // DynamoDB Client

// Retrieving data using DynamoDB client
// const params = {
//     Key: {
//         "grocery_item_id": {
//             S: "abc123"
//         }
//     },
//     TableName: 'grocery_items'
// };

// dynamoDB.getItem(params, (err, data) => {
//     if (err) {
//         console.log(err);
//         console.log("An error occurred!!!")
//     } else {
//         console.log("Successfully retrieved data")
//         console.log(data);
//     }
// });

// CRUD Operations
// 1. Create (HTTP POST operation / dynamoDB put operation)
// 2. Read (HTTP GET operation / dynamoDB get operation)
// 3. Update (HTTP PUT operation / dynamoDb update operation)
// 4. Delete (HTTP DELETE operation / dynamoDb delete operation)


// Retrieving data using DocumentClient
const documentClient = new AWS.DynamoDB.DocumentClient();

// const params2 = {
//     TableName: 'grocery_items',
//     Key: {
//         grocery_item_id: "abc123"
//     }
// };

// documentClient.get(params2, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully retrieved data");
//         console.log(data);
//         console.log(data.Item);
//     }
// });

// Adding an item to our table (DocumentClient)
// const params3 = {
//     TableName: 'grocery_items',
//     Item: {
//         grocery_item_id: 'abc125',
//         name: 't-bone steak',
//         quantity: 1,
//         price: 12.75
//     }
// };

// documentClient.put(params3, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Successfully added item");
//     }
// });

// Modifying an item in our table (DocumentClient)
// const params4 = {
//     TableName: 'grocery_items',
//     Key: {
//         grocery_item_id: "abc123"
//     },
//     UpdateExpression: "set #n = :value1, #q = :value2, #p = :value3",
//     ExpressionAttributeNames: {
//         "#n": "name",
//         "#q": "quantity",
//         "#p": "price"
//     },
//     ExpressionAttributeValues: {
//         ":value1": "paprika",
//         ":value2": 10,
//         ":value3": 3.12
//     },
//     ReturnValues: "UPDATED_NEW"
// }

// documentClient.update(params4, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated item");
//         console.log(data);
//     }
// });

// Delete and item in our table (DocumentClient)
const params5 = {
    TableName: "grocery_items",
    Key: {
        grocery_item_id: "abc123"
    }
}

documentClient.delete(params5, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted item");
    }
})