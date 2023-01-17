const AWS = require('aws-sdk');
const uuid = require('uuid');

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

const documentClient = new AWS.DynamoDB.DocumentClient(); // Document Client

const params = {
    TableName: 'grocery_items',
    Item: {
        grocery_item_id: uuid.v4(),
        name: 'celery',
        quantity: 5,
        price: 1.10
    }
};

// put() will fully replace an existing item with a given key
// or add an item if it doesn't exist
documentClient.put(params, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully added item");
    }
});