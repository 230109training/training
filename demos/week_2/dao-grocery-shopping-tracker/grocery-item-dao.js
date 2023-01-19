const AWS = require('aws-sdk');

// In order to perform AWS operations using the aws-sdk library,
// we need to actually "log in" to AWS through an IAM user
// This would require you to create an IAM user with the appropriate permissions
// for using DynamoDB, and you would need to generate an access key to use to log into that user
// from here

// As previously mentioned a few days ago, aws-sdk will automatically look
// for the access key and secret access key from the following 2 environment variables
// 1. AWS_ACCESS_KEY_ID=<access key value>
// 2. AWS_SECRET_ACCESS_KEY=<secret access key>
// It will use the values of those two environment variables to log in as the IAM user

// You should also set the AWS_DEFAULT_REGION environment variable to the AWS region you are using

AWS.config.update({
    region: 'us-east-1'
});

const docClient = new AWS.DynamoDB.DocumentClient();

// addGroceryItem function returns a promise
function addGroceryItem(grocery_item_id, name, quantity, price, category) {
    const params = {
        TableName: 'grocery_items',
        Item: {
            grocery_item_id,
            name,
            quantity,
            price,
            category
        }
    }

    return docClient.put(params).promise();
}

// retrieveAllGroceryItems()
// Retrieves all grocery items from the table
// You can utilize scan for this
function retrieveAllGroceryItems() {
    const params = {
        TableName: 'grocery_items'
    }

    return docClient.scan(params).promise();
}

function retrieveGroceryItemById(id) {
    const params = {
        TableName: 'grocery_items',
        Key: {
            "grocery_item_id": id
        }
    }

    return docClient.get(params).promise();
}

// Naive approach (inefficient O(n))
// function retrieveGroceryItemsByCategory(category) {
//     const params = {
//         TableName: 'grocery_items',
//         FilterExpression: '#c = :value',
//         ExpressionAttributeNames: {
//             '#c': 'category'
//         },
//         ExpressionAttributeValues: {
//             ':value': category
//         }
//     };

//     return docClient.scan(params).promise();
// }

// Smart approach (efficient O(1))
function retrieveGroceryItemsByCategory(category) {
    const params = {
        TableName: 'grocery_items',
        IndexName: 'category-index',
        KeyConditionExpression: '#c = :value',
        ExpressionAttributeNames: {
            '#c': 'category'
        },
        ExpressionAttributeValues: {
            ':value': category
        }
    };

    return docClient.query(params).promise();
}

function deleteGroceryItemById(grocery_item_id) {
    const params = {
        TableName: 'grocery_items',
        Key: {
            grocery_item_id
        }
    }

    return docClient.delete(params).promise();
}

function updateGroceryNameById(grocery_item_id, newName) {
    const params = {
        TableName: 'grocery_items',
        Key: {
            grocery_item_id
        },
        UpdateExpression: 'set #n = :value',
        ExpressionAttributeNames: {
            '#n': 'name'
        },
        ExpressionAttributeValues: {
            ':value': newName
        }
    }

    return docClient.update(params).promise();
}

function updateGroceryQuantityById(grocery_item_id, newQuantity) {
    const params = {
        TableName: 'grocery_items',
        Key: {
            grocery_item_id
        },
        UpdateExpression: 'set #n = :value',
        ExpressionAttributeNames: {
            '#n': 'quantity'
        },
        ExpressionAttributeValues: {
            ':value': newQuantity
        }
    }

    return docClient.update(params).promise();
}

function updateGroceryPriceById(grocery_item_id, newPrice) {
    const params = {
        TableName: 'grocery_items',
        Key: {
            grocery_item_id
        },
        UpdateExpression: 'set #n = :value',
        ExpressionAttributeNames: {
            '#n': 'price'
        },
        ExpressionAttributeValues: {
            ':value': newPrice
        }
    }

    return docClient.update(params).promise();
}

function updateGroceryCategoryById(grocery_item_id, newCategory) {
    const params = {
        TableName: 'grocery_items',
        Key: {
            grocery_item_id
        },
        UpdateExpression: 'set #n = :value',
        ExpressionAttributeNames: {
            '#n': 'category'
        },
        ExpressionAttributeValues: {
            ':value': newCategory
        }
    }

    return docClient.update(params).promise();
}

module.exports = {
    addGroceryItem,
    retrieveAllGroceryItems,
    retrieveGroceryItemById,
    retrieveGroceryItemsByCategory,
    deleteGroceryItemById,
    updateGroceryNameById,
    updateGroceryQuantityById,
    updateGroceryPriceById,
    updateGroceryCategoryById
}
