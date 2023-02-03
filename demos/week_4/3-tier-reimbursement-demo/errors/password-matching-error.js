module.exports = class PasswordMatchingError extends Error {
    constructor(message) {
        super(message);
        this.name = "PasswordMatchingError";
    }
}