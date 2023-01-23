const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

const docClient = new AWS.DynamoDB.DocumentClient(); // instantiate a docClient object


// ... functions in here to deal with the reimbursement table
// in DynamoDB
function addReimbursement(username, amount, description) {
    // ... fill out logic for adding reimbursement
    // hardcode status to pending when you're adding
    return new Promise((resolve, reject) => {
        resolve({});
    });
}

module.exports = { // put functions in here to be exported
    addReimbursement
};