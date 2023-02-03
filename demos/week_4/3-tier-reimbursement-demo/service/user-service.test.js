const { register } = require('./user-service');
const { getUserByUsername, addUser } = require('../dao/user-dao');
const LengthValidationError = require('../errors/length-validation-error');
const UsernameAlreadyTakenError = require('../errors/username-already-taken-error');
const PasswordMatchingError = require('../errors/password-matching-error');
jest.mock('../dao/user-dao.js', function() {
    return {
        getUserByUsername: jest.fn(),
        addUser: jest.fn() // This is basically here to prevent an actual user from being added to the database
        // this is basically at this point a fake function that does nothing
    }
});

// Keep in mind register is an async function
//  Whatever you throw or return from an async function is wrapped inside of a promise
// If an async function fails, it is considered a "rejected" promise
// If an async function succeeds, it is considered a "resolved" promise
describe('Registration tests', () => {
    test('Username provided is 3 characters', async () => {
        // Arrange

        // Act + Assert
        // Want to assert that LengthValidationError is thrown
        await expect(register('abc', 'password123', 'password123')).rejects.toThrow(LengthValidationError);
    });

    test('Password provided is 3 characters', async () => {
        await expect(register('abc123', 'cat', 'cat')).rejects.toThrow(LengthValidationError);
    });

    test('Username is already taken' , async () => {
        getUserByUsername.mockReturnValueOnce(Promise.resolve(
            { Item: { username: 'user123', password: 'password12345', role: 'employee' } 
        }));

        await expect(register('user123', 'somepassword', 'somepassword')).rejects.toThrow(UsernameAlreadyTakenError);
    });

    test('Password does not match confirmPassword', async () => {
        getUserByUsername.mockReturnValueOnce(Promise.resolve({})); // user does not already exist

        await expect(register('user123', 'somepassword', 'sOmepasswor')).rejects.toThrow(PasswordMatchingError);
    });

    test('Everything is good to go', async () => {
        getUserByUsername.mockReturnValueOnce(Promise.resolve({}));

        await register('user123', 'somepassword', 'somepassword');
    });
});

/*

it('should test async errors', async () =>  {        
    await expect(failingAsyncTest())
    .rejects
    .toThrow('I should fail');
});

*/