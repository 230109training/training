const LengthValidationError = require('../errors/length-validation-error');
const UsernameAlreadyTakenError = require('../errors/username-already-taken-error');
const PasswordMatchingError = require('../errors/password-matching-error');
const { getUserByUsername, addUser } = require('../dao/user-dao');
const uuid = require('uuid');
// Business logic:
// 1. Username must be at least 4 characters
// 2. Password must be at least 4 characters
// 3. Username must not already be taken
// 4. password must match confirmPassword
async function register(username, password, confirmPassword) {

    // Logic 1 and 2
    if (username.length < 4 || password.length < 4) {
        throw new LengthValidationError("Username and password must be at least 4 characters");
    }

    // Logic 3
    let data = await getUserByUsername(username);
    // { Item: { id: 1, ... } }
    if (data.Item) {
        throw new UsernameAlreadyTakenError("Username has already been taken");
    }

    // Logic 4
    if (password !== confirmPassword) {
        throw new PasswordMatchingError("password and confirm password must match");
    }

    // If we pass all checks, then add the user
    await addUser(username, password, "employee");
}

module.exports = {
    register
};