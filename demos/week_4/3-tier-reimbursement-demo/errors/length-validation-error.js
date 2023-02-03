module.exports = class LengthValidationError extends Error {
    constructor(message) {
        super(message); // Sets the message property using the parent Error class's constructor
        this.name = 'LengthValidationError'; // Set the name property of the error object
    }
}