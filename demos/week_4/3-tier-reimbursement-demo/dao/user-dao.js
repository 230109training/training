function getUserByUsername(username) {
    throw new Error("DynamoDB connection error");
    // Fill in actual logic for database
}

function addUser(username, password, role) {
    throw new Error("DynamoDB connection error");
}

module.exports = {
    getUserByUsername,
    addUser
}